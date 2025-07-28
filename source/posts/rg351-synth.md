<steelsky>
{
  "title":"Using An RG351 As A cSound Synth",
  "description":"These things can run linux, so naturally I made one into a cSound synth.",
  "tags":"#hacking #audio",
  "type":"post",
  "date":"2021-08-01"
}
</steelsky>
# Using An RG351 As A cSound Synth
<iframe width="560" height="315" src="https://www.youtube.com/embed/XpfNiham95k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What Is an RG531 And Why Is This Interesting?

The RG351 is a "retro handheld" device manufactured by a company called Anbernic. These devices are used by retro game enthusiasts to emulate classic game consoles. 

Behind the scenes, these devices are running the Linux kernel which means they are super hackable. 

The thing that makes the RG351 stand out in this line of devices is that this is the first one to include an AArch64 (64bit ARM) chip. 

## ArkOs

While the stock firmware on the RG351 is fun to play with, in order to unlock the full potential of the device you need to install a custom OS called ArkOs. This gives us full access to both 32 and 64 user space in what is essentially a stripped down Ubuntu install. 

## Doing The Thing

Because we are essentially running Ubuntu at this point, we don't even have to compile cSound ourselves. 

It's as easy as running

```bash
apt install csound
```

Note: In order to run this command you will need to setup wifi and enable remote connections in the ArkOs options menu. Then you will need to login to the device through SSH. See the ArkOs wiki for info on how to do this. 

Now you just need to write or copy a cSound synth onto the device. 

The easiest way to do this is probably with `nano`. This should be installed by default, so you can run:

```bash
nano synth.csd
```

If you want something to get you started you can copy and paste this example synth based on the cSound docs. 

```cpp
<CsoundSynthesizer>
<CsOptions>
; Select audio/midi flags here according to platform
-odac    ;;;realtime audio out
</CsOptions>
<CsInstruments>
ksmps = 32
nchnls = 2
0dbfs  = 1

instr 1

iflg = p4
asig oscils .7, 220, 0, iflg
     outs asig, asig

endin
</CsInstruments>
<CsScore>

i 1 0 2 0
i 1 3 2 2	;double precision
e
</CsScore>
</CsoundSynthesizer>
```

Save the file and exit Nano.

You should now be able to use the csound command to launch your synth. 

```bash
csound synth.csd
```

Note:

This is a "realtime" synth so you will need to plug a midi controller into the USB OTG port on top of the RG351 in order for this to make any noise. In my tests, I found that in order for the RG351 to detect the midi controller it needed to be plugged in when the device was turned on.  

## More Info

[Info on RG351](https://retrogamecorps.com/rg351/)
[ArkOs](https://github.com/christianhaitian/arkos)
[ArkOs Wiki](https://github.com/christianhaitian/arkos/wiki)
[cSound](https://csound.com/)
[Using Nano](https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/)
