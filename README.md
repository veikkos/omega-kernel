# EZ-FLASH OMEGA Kernel

## Patched by veikkos

* Updated to [Goomba GB/CGB emulator](http://www.dwedit.org/gba/goombacolor.php) version 2019-05-04
  * Applied [source patch](https://github.com/veikkos/omega-kernel/tree/master/goomba-patch) to Goomba to make it Omega compatible
  * Removed binary patching by kernel which is no longer needed
* Quick start
  * Keep L pressed when booting to start last game in NOR
  * Keep L+A pressed when booting to start last played SD-card game

Use with your own risk!

## How to build

    1.We use devkitARM_r47, you can use the current version or newer.
    2.Set the following environment variables in system, or modify the value in build.bat, based on your installation path
 
        PATH,DEVKITARM,DEVKITPRO,LIBGBA

    3.Double click on build.bat under winodws. If it goes well, you will get ezkernel.gba
    4.Rename the ezkernel.gba to ezkernel.bin, that is the omega kernel upgrade file
