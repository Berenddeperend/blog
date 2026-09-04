first, i tried node-thermal-printer. it didnt work, because my Star TSP143IIU+ only understands Star Graphic Mode.

I tried the CUPS raster driver, but it took 40s per print.

Now, i make a bitmap and wrap it in the star craphics mode command. enter raster mode, send each row as a
scanline (b + length + pixel data), exit raster mode, partial cut.

That binary buffer is send to the printer, lp -d Star_TSP143 -o raw. No raster conversion or driver processing, the printer gets the dat i can print.
