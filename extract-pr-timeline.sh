#!/bin/bash
#
# Extracts a timeline of gym PR changes from git history.
# Loops over all commits that touched template.njk, extracts data-pr values,
# and outputs a CSV with only the rows where a new PR was set for a lift.
#
# Usage: ./extract-pr-timeline.sh > pr-timeline.csv

FILE="src/_includes/template.njk"
OUTPUT_FILE="pr-timeline.csv"

echo "date,commit,lift,pr" > "$OUTPUT_FILE"

declare -A last_pr

git log --reverse --format="%H %aI" -- "$FILE" | while read commit date; do
  content=$(git show "$commit:$FILE" 2>/dev/null)
  if [ $? -ne 0 ]; then
    continue
  fi

  # Extract lift name + PR pairs.
  # The pattern in the HTML is:
  #   <strong>LiftName</strong> ... followed by ...
  #   <div class="loading-bar-inner" data-pr="VALUE"></div>
  #
  # We grab all <strong> tags and all data-pr values in order, then zip them.

  lifts=()
  prs=()

  while IFS= read -r line; do
    # Check for lift name
    if [[ "$line" =~ \<strong\>([^<]+)\</strong\> ]]; then
      current_lift="${BASH_REMATCH[1]}"
    fi
    # Check for data-pr on same or subsequent line
    if [[ "$line" =~ data-pr=\"([^\"]+)\" ]]; then
      pr_value="${BASH_REMATCH[1]}"
      if [ -n "$current_lift" ]; then
        lifts+=("$current_lift")
        prs+=("$pr_value")
        current_lift=""
      fi
    fi
  done <<< "$content"

  short_date="${date%%T*}"

  for i in "${!lifts[@]}"; do
    lift="${lifts[$i]}"
    pr="${prs[$i]}"
    prev="${last_pr[$lift]}"

    if [ "$pr" != "$prev" ]; then
      echo "$short_date,$commit,$lift,$pr" >> "$OUTPUT_FILE"
      last_pr["$lift"]="$pr"
    fi
  done
done

echo "Done. Output written to $OUTPUT_FILE"
