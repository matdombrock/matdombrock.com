<steelsky>
{
  "title":"Comparison of Popular SDRs",
  "description":"Getting started with software defined radio.",
  "tags":"#radio #guide"
}
</steelsky>
# Comparison of Popular SDRs

I've been a radio nerd for a while but only recently discovered the wonders of SDR (Software Defined Radio). I was a bit overwhelmed with all of the options at first, so to help others get started easily I've created a short guide for choosing the right SDR. 

*Note: This page does NOT contain any affiliate links! Links to purchase these SDRs are provided for convenience only.*

For info on SDR programs/tools see [SDR Tools](sdr-tools.html).

## Understanding the Specs

* Frequency Range: These values describe the range that this SDR can pick up. Larger ranges are pretty much always better but if you are interested in specific bands then you need to choose an SDR that meets your needs. 
* Max Sample Rate:  This value describes the amount of data that the SDR can receive at once. This is also sometimes called the "bandwidth" of the SDR. You can also think of this as the range that the SDR is able to pickup at one time. Like "Frequency Range", bigger is usually better. However, note that not all SDRs can preform well at their max sample rate. 
* Antenna Connector: While most SDRs have a male SMA connector this is not a rule. You need to make sure that you have the correct antenna (or adapter) for the SDR you choose. More info [here](https://www.jpole-antenna.com/2014/04/04/amateur-radio-antenna-connectors/).

## Upconverting With "Ham It Up"

[Buy "Ham It Up Plus" from Nooelec](https://www.nooelec.com/store/ham-it-up-plus.html)

[Buy "Ham It Up Nano" from Nooelec](https://www.nooelec.com/store/sdr/sdr-addons/ham-it-up-304/ham-it-up-nano.html)

Something to think about when considering the frequency range of an SDR is that nearly every SDR on the market is incapable of picking up HF signals like some HAM and AM stations. Systems that do allow for HF out of the box like the RTL-SDR Blog do so by means of suboptimal direct sampling. 

For instance, if you want to listen to AM radio you are going to be dealing with signals in the kilohertz range. Most SDRs are not able to pick that up out of the box at all. 

The "Ham It Up" upconverter by Nooelec is the solution. It takes frequencies that are too low register on your SDR and converts them up into a range that your SDR can handle. 

**Using Ham It Up:**

- Connect your antenna to the RF input of the "Ham It Up"
- Connect your SDR to the IF output of the "Ham It Up"
- Plug your USB power source into the USB jack
- Switch the toggle switch on the "Ham It Up" to the "upconvert" position
  - This takes low frequency signals and upconverts them by 125MHz
- Start your SDR software
- Tune to 125MHz + the frequency you want to pick up
  - So, for 820AM (820KHz) you would tune to 125.820MHz
- Switch the toggle switch on the "Ham It Up" to the "bypass" position to resume normal operation

*Note: You can also set a frequency offset of -125MHz in your SDR software if you would like to.*

## Nooelec NESDR Mini 2+ 

[Buy from Nooelec](https://www.nooelec.com/store/sdr/sdr-receivers/nesdr-mini-2-plus.html)

Frequency Range: 25MHz - 1750MHz

Max Sample Rate: 3.2MHz

Antenna Connector: MCX

## NooElec NESDR Smart XTR

[Buy from Nooelec](https://www.nooelec.com/store/nesdr-smart-xtr-sdr.html)

Frequency Range: 65MHz - 2300MHz

Max Sample Rate: 3.2MHz

Antenna Connector: SMA Male

## RTL-SDR Blog

[Buy from RTL-SDR Blog](https://www.rtl-sdr.com/buy-rtl-sdr-dvb-t-dongles/)

Frequency Range: 500KHz - 1.7GHz

Max Sample Rate: 3.2MHz (2.4 MHz stable)

Antenna Connector: SMA Male

## HackRF One

[Buy from Great Scott Gadgets](https://greatscottgadgets.com/hackrf/one/)

Frequency Range: 1MHz - 6GHz

Max Sample Rate: 20Mhz

Antenna Connector: SMA Male