#!/bin/bash
#
# Extracts a timeline of gym PR changes from git history.
# Loops over all commits that touched template.njk, extracts data-pr values,
# and outputs a CSV with only the rows where a new PR was set for a lift.
#
# Usage: ./extract-pr-timeline.sh

FILE="src/_includes/template.njk"
OUTPUT_FILE="pr-timeline.csv"
RAW=$(mktemp)

# Step 1: extract every lift + pr value from every commit that touched the file.
# Piping into while-loop runs it in a subshell so we don't try to persist state here.
# Instead we dump everything to a temp file.
git log --reverse --format="%H %aI" -- "$FILE" | while read commit date; do
  short_date="${date%%T*}"
  git show "$commit:$FILE" 2>/dev/null | awk -v date="$short_date" -v commit="$commit" '
    /<strong>/ {
      s = $0
      gsub(/.*<strong>/, "", s)
      gsub(/<\/strong>.*/, "", s)
      lift = s
    }
    /data-pr=/ && lift != "" {
      s = $0
      gsub(/.*data-pr="/, "", s)
      gsub(/".*/, "", s)
      print date "," commit "," lift "," s
      lift = ""
    }
  '
done > "$RAW"

# Step 2: only keep rows where the PR value changed for that lift
echo "date,commit,lift,pr" > "$OUTPUT_FILE"
awk -F, '{
  key = $3
  val = $4
  if (last[key] != val) {
    print
    last[key] = val
  }
}' "$RAW" >> "$OUTPUT_FILE"

rm "$RAW"
echo "Done. Output written to $OUTPUT_FILE"
