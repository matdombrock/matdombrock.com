<steelsky>
{
  "title":"Using Dipole Antennas",
  "description":"A guide by RTL-SDR.",
  "tags":"#radio #link #guide #archive"
}
</steelsky>
# USING OUR NEW DIPOLE ANTENNA KIT

SOURCE: https://www.rtl-sdr.com/using-our-new-dipole-antenna-kit/

Over on [our store](https://www.rtl-sdr.com/store) we've recently released our new receive only dipole antenna kit which now replaces the older magnetic whip style antennas from the previous kit. This was done for a few reasons including 1) We believe that the dipole kit is much more versatile and will enable beginners to get better reception straight away, 2) magnets of any type are no longer welcome on most airmail parcel carriers (though they still get through for now). While the magnetic whip still works perfectly fine, the dipole kit should make it easier to get the antenna outside or in a better position away from noisy computers/electronics, and it also allows for a simple v-dipole configuration for satellite reception.

The units are currently in stock at our Chinese warehouse either bundled with an RTL-SDR or as an individual antenna set. 

**[www.rtl-sdr.com/store](https://www.rtl-sdr.com/store)**

This post is a guide on how to use the dipole antenna set in various configurations. First we'll show and explain about what's included in the set:

- **1x dipole antenna base with 60cm RG174 cable and SMA Male connector.** This is the dipole base where the telescopic antennas connect to. The short run of RG174 is decoupled from the base elements with a ferrite choke. This helps to prevent the feed line from interfering with the dipole radiation pattern. On the inside of the base the two dipole element sides are connected with a 100 kOhm resistor to help bleed off any static. The dipole has a 1/4 inch female screw on the bottom, which allows you to use standard camera mount products for mounting.
- **1x 3 meter RG174 coax cable extension.** This coax cable extension allows you to mount the antennas in a place that gets better reception. E.g. outside on a window, or higher up.
- **2x 23cm to 1 m telescopic antennas.** The telescopic dipoles are detachable from the dipole base via a M5 thread which allows for greater portability and the ability to swap them out. These long telescopic antennas cover VHF to UHF.
- **2x 5cm to 13cm telescopic antennas.** These smaller antennas cover UHF to 1090 MHz ADS-B, and even still work decently up to L-band 1.5 GHz frequencies.
- **1x flexible tripod mount with 1/4" male screw.** This piece allows you to mount the dipole on a variety of different locations. E.g. a pole, tree branch, desk, door, window sill. The legs of the tripod are bendy and rubberized so can wrap securely around many objects.
- **1x suction cup mount with 1/4" male screw.** With this mount you can mount the dipole on the outside of a window, on a wall, car roof/window, or on any other smooth surface. To use first clean the surface with window cleaner or isopropyl alcohol. Then place the suction cup on the cleaned surface and close the lever to activate the suction.

[![What's included in the new Dipole kit](https://www.rtl-sdr.com/wp-content/uploads/2017/09/dipole_components-500x500.jpg)](https://www.rtl-sdr.com/wp-content/uploads/2017/09/dipole_components.jpg)What's included in the new Dipole kit

## Dipole Orientation

Signals are normally transmitted with either horizontal, vertical or right hand/left hand circular polarization (RHCP/LHCP). This is essentially the 'orientation' of a signal, and an antenna with the same polarization should be used too for best performance. A dipole can be used in either vertical or horizontal polarization, just by orienting it either vertically or horizontally.

If you mismatch vertical and horizontal polarization or RHCP and LHCP you'll get an instant 20dB loss. If you mismatch vertical/RHCP, vertical/LHCP, horizontal/RHCP, horizontal/LHCP you'll only get a 3dB loss.

For vertical polarization you will want to have the element connected to the center coax conductor pointing UP. You can confirm which element is connected to the center conductor by temporarily removing the black lid on the dipole base (it can be easily pried off with a nail or flat head screwdriver).

There are also ways to optimize the radiation pattern with dipoles. For example for LEO VHF satellites you can use a V-dipole configuration. You can also make a somewhat directional antenna by using a bent dipole configuration. Some more examples of dipole configurations can be found on [KK4OBI's page on bent dipoles](http://www.qsl.net/kk4obi/Center-fed L-dipoles Vertical.html).

[![img](https://www.rtl-sdr.com/wp-content/uploads/2017/09/Bent-Dipole-Animation.gif)](https://www.rtl-sdr.com/wp-content/uploads/2017/09/Bent-Dipole-Animation.gif)

## Terrestrial Signal Reception

Most signals broadcast terrestrially (on Earth) are vertically polarized.

To use the dipole for vertically polarized signals, all that you need to do is orient the elements vertically (up and down).

When used in the vertical orientation, the element connected to the center conductor should be pointing UP. You can check which element is connected to the center conductor by removing the top cap on the dipole base. This will let you look inside at the connections.

## Satellite Reception

The dipole can be used in a V-Dipole configuration for polar orbiting satellite reception. See [Adam 9A4QV's post](https://lna4all.blogspot.com/2017/02/diy-137-mhz-wx-sat-v-dipole-antenna.html) where he wrote about how he discovered that it was possible to use dipoles in this configuration for excellent satellite reception. The idea is to use the dipole in horizontal polarization. This gives 3dB loss on the RHCP satellite signals, but also nicely gives 20dB loss on terrestrial signals which could be overloading your RTL-SDR.

For 137 MHz satellites like NOAA and Meteor M2 extend the larger antenna elements out to about 53.4 cm each (about 2.5 sections). Angle the dipole so it is horizontal and in a 'Vee' shape, at about 120 degrees. Place the dipole in the North-Source direction.

With an appropriate L-band LNA like the [Outernet LNA](https://amzn.to/2nnEHtk) the dipole can also somewhat work to receive L-band satellites. Using the smallest antenna collapsed, use a V-dipole configuration and point it towards the L-band satellite. Ideally use a reflector too. In the image below we used a simple cookie tin as a reflector. A hole was drilled into the center and the mount used to clamp in the antenna. This together with the Outernet LNA was enough to receive AERO and STD-C.

![L-band v-dipole with reflector tin](https://www.rtl-sdr.com/wp-content/uploads/2017/09/l-band_veedipole.jpg)

![Receiving Inmarsat signals with the Outernet LNA](https://www.rtl-sdr.com/wp-content/uploads/2017/09/dipole_lbandreflect_1.jpg)

![L-band v-dipole with reflector tin](https://www.rtl-sdr.com/wp-content/uploads/2017/09/l-band_veedipole-500x375.jpg)

![Receiving Inmarsat signals with the Outernet LNA](https://www.rtl-sdr.com/wp-content/uploads/2017/09/dipole_lbandreflect_1-500x266.jpg)

## Choosing the Antenna Element Length

Like with the whip you can use an online calculator to calculate the optimal length for your frequency of interest. We recommend this [dipole calculator](http://www.csgnetwork.com/antennaedcalc.html). The exact length does not matter too much, but try to get the lengths as close to what the calculator says as you can. With the dipole you want both elements to be the same length.

In reality extending the antenna to almost any random length will work just fine for most strong signals. But if you're really trying to optimize those weak signals you'll want to fine tune the lengths.

Basically the longer the antenna, the lower it's resonant frequency. The shorter the antenna, the higher the resonant frequency. You want to be close to the resonant frequency. Remember that there is about 2cm of metal inside the antenna itself which needs to be added on. Below is a cheat sheet for various lengths and frequencies. Note that the length refers to the length of one side of the dipole only (e.g. the length that you need to extend each element out to).

- Large Antenna, 5 Sections, 100cm + 2cm is resonant @ ~70 MHz
- Large Antenna, 4 Sections, 80cm + 2cm is resonant @ ~87MHz
- Large Antenna, 3 Sections, 60cm + 2cm is resonant @ ~115 MHz
- Large Antenna, 2 Sections, 42cm + 2cm is resonant @ ~162 MHz
- Large Antenna, 1 Section, 23cm + 2cm is resonant @ ~ 285 MHz
- Small Antenna, 4 Sections, 14cm + 2cm is resonant @ ~445 MHz
- Small Antenna, 3 Sections, 11cm + 2cm is resonant @ ~550 MHz
- Small Antenna, 2 Sections, 8cm + 2cm is resonant @ ~720MHz
- Small Antenna, 1 Section, 5cm + 2cm is resonant @ ~1030 MHz.

See the SWR plots at the end for a more accurate reading of the resonance points. But in most cases no matter what you extend the length to the SWR should be below 5 at most frequencies which results in 2.5 dB loss or less. More accurate info on VSWR loss graphs can be found in this [document from the ARRL "Understanding SWR by Example"](https://www.arrl.org/files/file/Technology/tis/info/pdf/q1106037.pdf) (pdf).

## Using the Mounts

The suction cup mount allows you to easily place the antenna on a window, or any smooth surface. To use it first clean the surface thoroughly with isopropyl alcohol or glass cleaner. Then apply the suction cup and close the lever to lock it in place. The lever requires some force to push down, and this ensures a strong grip. You can then angle the antenna in the orientation that you need using the ball socket. Once in place close the ring to lock the ball socket in place.

The flexible tripod mount is useful to mounting the dipole to almost everything else. Including tables, doors, poles, trees etc. The legs of the tripod have a flexible metal wire inside and rubber sheath so they can be bent into a position to grip almost anything.

[![Some examples of how to use the mounts.](https://www.rtl-sdr.com/wp-content/uploads/2017/09/dipole_mounts.jpg)](https://www.rtl-sdr.com/wp-content/uploads/2017/09/dipole_mounts.jpg)Some examples of how to use the mounts.

Note that the mounts and RG174 extension allow you to more easily use the dipole antennas outside or in a better indoors position (e.g. on a Window). **But please note that like our older magnetic whip we do not recommend permanently mounting this antenna outdoors.** This antenna is designed to be a portable antenna that you put up and take down at the end of the day - not for permanent outdoor mounting. It is not protected against water, not grounded so cannot handle a lightning strike and could be damaged with dirt and grime build up. For permanent outdoor mounting you could conceivably fill the inside and hinges of the dipole with silicon putty or maybe even hot glue and ground the antenna yourself, but we have not tested this. The stainless steel antennas won't rust, but dirt and grime could gum up the collapsing mechanism.

## Tightening the hinge

Once you've got the orientation of the dipoles the way you want, you might want to tighten the hinge so the elements don't move so easily anymore. To do this simply take a small screwdriver and tighten the screw on the hinge.

## Sample VSWR Plots

![Small Antenna Collapsed](https://www.rtl-sdr.com/wp-content/uploads/2017/09/Small_Ant_Collapsed.jpg)

![Small Antenna Extended](https://www.rtl-sdr.com/wp-content/uploads/2017/09/Small_Ant_Extended.jpg)

![Large Antenna Collapsed](https://www.rtl-sdr.com/wp-content/plugins/ultimate-responsive-image-slider/assets/css/images/blank.gif)

![Large Antenna Extended](https://www.rtl-sdr.com/wp-content/plugins/ultimate-responsive-image-slider/assets/css/images/blank.gif)

![RG174 Cable Loss](https://www.rtl-sdr.com/wp-content/uploads/2017/09/RG174_Cable_Loss.jpg)

![Small Antenna Collapsed](https://www.rtl-sdr.com/wp-content/uploads/2017/09/Small_Ant_Collapsed-500x400.jpg)

![Small Antenna Extended](https://www.rtl-sdr.com/wp-content/uploads/2017/09/Small_Ant_Extended-500x400.jpg)

![Large Antenna Collapsed](https://www.rtl-sdr.com/wp-content/uploads/2017/09/Large_Ant_Collapsed-500x400.jpg)

![Large Antenna Extended](https://www.rtl-sdr.com/wp-content/uploads/2017/09/Large_Ant_Extended-500x400.jpg)

![RG174 Cable Loss](https://www.rtl-sdr.com/wp-content/uploads/2017/09/RG174_Cable_Loss-500x400.jpg)

## Other Notes

**Note that this is NOT an antenna designed for TXing**. It is an RX antenna only. So please do not TX with it unless you really know what you are doing as you could damage your TX radio. You'll probably need to remove the 100kOhm static bleed resistor to TX anyway.