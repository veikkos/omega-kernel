# EZ-FLASH OMEGA Kernel

[Source code at GitHub](https://github.com/veikkos/omega-kernel)

## Patched by veikkos (v5)

* Updated to [Goomba GB/GBC emulator](http://www.dwedit.org/gba/goombacolor.php) version 2019-05-04
    * Applied [source patch](https://github.com/veikkos/omega-kernel/blob/master/goomba-patch/goomba_ezflash_omega.patch) to Goomba to make it Omega compatible
    * Removed binary patching by kernel which is no longer needed
* Goomba changes [(issue link)](https://github.com/veikkos/omega-kernel/issues/2) [(patch link)](https://github.com/veikkos/omega-kernel/blob/master/goomba-patch/goomba_gbc_mode.patch)
    * No SGB borders by default
        * New "Prefer GBC over GB" default mode instead of "Prefer GBC over SGB"
    * Original GB games use black and white "Grayscale" palette instead of colorized "Wario Blast"
* Quick start
    * Keep L pressed when booting to start last game in NOR
    * Keep L+A pressed when booting to start last played SD-card game
* Start emulated games directly without single-item game menu [(link)](https://github.com/veikkos/omega-kernel/issues/4)
* Automated backup of game saves
    * Save file is backed up automatically when starting a game
    * Backups are stored in `/SAVER-BACKUP` directory
    * 5 last save files are stored
        * `.sav0` is most recent, `.sav4` is oldest
    * Restore is manual process
        * Copy `/SAVER-BACKUP` directory to a computer to avoid overwriting your backups
        * Copy selected backup file to `/SAVER` folder, remove number from the end
    * Progress status localized in EN and ZH

Use with your own risk!

## How to build

    1.We use devkitARM_r47, you can use the current version or newer.
    2.Set the following environment variables in system, or modify the value in build.bat, based on your installation path
 
        PATH,DEVKITARM,DEVKITPRO,LIBGBA

    3.Double click on build.bat under Windows. If it goes well, you	will get ezkernel.bin which is the omega kernel upgrade file

### Dark red UI

In addition to original UI, firmware can also be built with nice dark red UI. Credits to Nona_Elexis for the graphics.

Change `make` to `make RED_THEME=1` in build.bat or command line.

Run `make clean` before changing UI type!
