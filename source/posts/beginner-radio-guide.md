<steelsky>
{
  "title":"Beginner Radio Guide",
  "description":"A beginner radio guide, specifically for the Baofeng UV-5R.",
  "tags":"#radio"
}
</steelsky>

# Beginner Radio Guide

[Download This Document As A PDF](https://github.com/matdombrock/radio/raw/master/RADIO%20INFORMATION%20_%20radio.pdf) (May not be up to date)

[Download The Full Open Source User Manual](https://github.com/matdombrock/radio/raw/master/UV-5R-Owners-Manual-2.pdf) (Not created by me)

[Download The Full Frequency List](https://raw.githubusercontent.com/matdombrock/radio/master/baofeng-freqs.csv) (CSV)

*DISCLAIMER: A lot of the text here has been blatantly copied from other sources with only minor changes and commentary. This document was created for my personal use (but you are free to use it too) as a compilation of available resources and documentation. I've tried my best to list my sources inline as well as at the end of the document.*

**WARNING: I take absolutley no legal responsibility for what you do with the information listed below. It is YOUR responsibility to make sure you know the laws and etiquette involved in proper radio usage. The BaoFeng UV-5R is fully capable of transmitting fairly powerful signals on frequencies you ARE NOT allowed to operate on. Make sure you know what you're doing, especially before you transmit anything!** 

<!-- # TABLE OF CONTENTS

[BaoFeng Usage](#baofeng-usage)

[Family Radio Service (FRS) (WALKIE TALKIES)](#family-radio-service-frs)

[Multi-Use Radio Service (MURS)](#multi-use-radio-service-murs)

[General Mobile Radio Service (GMRS)](#general-mobile-radio-service-gmrs)

[NOAA (Weather)](#noaa-weather-broadcast-frequencies)

[Police, Fire, EMS](#police-fire-ems)

[Police Codes](#police-codes) -->

# BaoFeng Usage
(Source: [http://www.bugoutbagbuilder.com/learning-tutorials/baofeng-uv-5r-basic-setup-emergency-frequencies](http://www.bugoutbagbuilder.com/learning-tutorials/baofeng-uv-5r-basic-setup-emergency-frequencies))

**BaoFeng UV-5R Dual Band Two Way Radio**

Range: VHF (136-174), UHF (400-520)

## Commands, Keys & Buttons

**PTT (PUSH-TO-TALK)**: Press and hold to transmit, release it to receive.

**SIDE KEY1/[CALL]**: Press to activate the FM radio. Press it again to deactivate. Press and hold to activate the alarm button. Hold again to deactivate.

**SIDE KEY2/[MONI]**: Press to turn on the flashlight. Hold the key to monitor the signal (temporarily disable squelch).

**[VFO/MR] BUTTON**: Press to switch between pre-programmed channel mode, and frequency mode.

**[A/B] BUTTON**: Press to switch the frequency display. This will determine which of the two displayed frequencies you’re transmitting and receiving on.

**[BAND] BUTTON**: Press to switch the band you’re operating on, which is wither VHF (136 mHz) or UHF (470 mHz). While the FM radio is activated, press to switch the FM radio bands (65-75MHZ or 76-108 MHZ).

**[SCAN] KEY**: Hold the button for two seconds to start scanning for active channels (channels that are transmitting). The radio will automatically stop at a frequency if it detects activity. While the FM radio is active, hold to search for radio stations.

**[#”KEY”] KEY**: Press while in Channel mode, press to switch between High and Low transmit power. Press and hold for two seconds to lock and unlock the keypad. This is useful for when the radio is on and you want to receive communications, but you want to store the radio without button-mashing any settings.

**[MENU] KEY**: Press to enter the main menu and to select and confirm settings (acts as “ENTER” key).

**ARROW KEYS**: Press and hold the UP or DOWN arrow keys to dial the frequency or programmed channels up or down while not in the menu. Use the arrows to navigate the menu, too.

**[EXIT] KEY**: Press to cancel a function or exit a menu or screen.

## Important Menu Options

###  0: SQL - Squelch Level
Squelch is the "cutoff" or "gate" for incoming transmissions, the higher the value the more distinct the transmission must be to come through.

Setting the squelch to 0 will open up the squelch entirely, setting it to 9 will close it almost entirely. 

### 1: STEP - Frequency Step
Selects the step in frequency step when using [UP] the [DOWN] keys. This is also the interval the scanner will run at.

### 2: TXP - Transmit Power
This controls how much power output your transmissions will use.

HIGH: 4-5w
LOW: 1-2W

Transmit power is only settable in Frequency(VFO) Mode. In Memory(MR) Mode transmit power will be set to the level programmed in memory for any given channel.

### 3: SAVE - Battery Save
Sampling ratio of the Receiver to acknowledge a signal. I think the higher value will sample more often (look for incoming transmissions) and use more battery.

### 5: WN - Wideband / Narrowband
In the USA, FCC part 90 radios are mandated to switch over to Narrowband communication by January 1st 2013. Meaning all commercial users. This does not affect Amateur Radio operators. If you don't know what this means you should probably be using Narrowband.

### 6: ABR - Display Illumination Time
Time-out for the LCD back-light in seconds.

### 7: TDR - Dual Watch
When enabled it allows you to monitor two frequencies simultaneously. It should be noted that this radio does not possess a dual VFO, meaning that the Dual Watch feature is a time sharing operation. Your radio will flip-flop between A and B channels at a fixed rate. This will not allow you to receive two frequencies in parallel.

NOTE: Be careful when using this setting because your radio will by default, transmit on whatever the active channel is!

### 8: BEEP - Keypad Beep
When enabled your radio will emit an audible tone at every key press.

### 14: VOICE - Voice Prompt
When enabled your radio will "talk back" to you, meaning audible confirmation when pressing keys and working the menu system. Can be set to Chinese, English or Off.

### 18: SC-REV - Scanner Resume Method
Sets the behavior of the scanner upon finding active frequencies.

• Time Operation: The scanner will resume after a pre set time. 
• Carrier Operation: The scanner will resume once the signal disappears. 
• Search Operation: The scanner holds on the frequency with detected activity

### 21: MDF-A - Channel Mode A Display
Sets the display mode for the upper display to either text or freq.

NOTE: Channel name can only be set via Computer.

### 22: MDF-B - Channel Mode B Display
Sets the display mode for the lower display to either text or freq.

NOTE: Channel name can only be set via Computer.

### 23: BCL - Busy Channel Lock-out
If enabled your radio will prevent you from transmitting on active frequencies.

NOTE: You should probably have this on!

### 32: AL-MOD - Alarm Mode
* SITE: Cycling tone over the air
* TONE: Radio speaker only
* CODE: Transmit 5s tone followed by Morse

NOTE: You should set this to TONE to avoid transmitting an alarm when that is not needed.

### 34: TDR-AB - Transmit selection while in Dual Watch mode
If enabled, this will force the radio to transmit on the selected frequency when in Dual Watch mode

## Reset/“Zero Out” The Radio
To setup the radio, ensure the battery pack is snapped to the back of the transceiver. Thread the antenna onto the antenna post and tighten. Turn the radio on by rotating the volume knob clockwise. It’ll click, the radio will beep twice, and then a voice will state “Frequency Mode” or “Channel Mode”.

* Press MENU.
* Use the up and down arrows on the keypad to navigate to menu option 40.
* Press MENU again to select “ALL”.
* Press MENU a third time to select “SOURCE?”.
* Press MENU a fourth time to reset the radio.
///////
* The radio will reset and default to a Chinese voice. To select your preferred language:
* Navigate to menu option 14.
* Press MENU again to select the language selection.
* Use the arrows to locate “ENG” for English (or your preferred language).
* Press MENU again to confirm the language selection.
* Exit.

## Use the UV-5R as an FM radio
The UV-5R’s most simple function is acting like an FM radio for your favorite stations. This is useful during disasters, when emergency broadcasts and information are put out through local radio stations. To enable FM mode, just press the orange “CALL” button on the size of the radio. Scan each station available by repeatedly pressing the */”SCAN” key.

## Enter, save, and use an emergency frequency
You can enter a frequency and start receiving and transmitting simply by typing the appropriate numbers on the keypad. For example, typing in 162.400 will key you into the NOAA weather broadcast. Typing in 151.940 will key you into the most common national emergency channel.

We want to program some emergency channels so we don’t have to remember all the digits to every frequency we might use. To save a frequency and make a new channel:

* Press VFO/MR to put the radio into Frequency (VFO) Mode.
* Press the A/B button to select the top frequency. Note the arrow to the left of the frequency on the display, indicating your selection. All programming must be done using the top frequency.
* Turn off TDR/Dual Standby (it should be off but confirm it is).
* Press MENU.
* Press 7.
* Press MENU to select the menu option.
* Use the up and down arrows to select “OFF”.
* Press Menu to confirm.
* Exit.
* Type in the frequency you want to save using the keypad.
* Press MENU.
* Navigate to option 27.
* Press MENU again to enter the channel selection.
* Select the desired channel (000 to 127) by pressing the up and down arrows. We recommend starting at channel 1, then 2, and so on. If a channel number has “CH-“ in front of it, that channel already has a frequency saved.
* Press MENU to save the frequency to the selected channel.
* Exit.

You can now select the saved frequency by pressing VFO/MR to select Channel Mode, and then pressing the up and down arrows. The radio will cycle through all the saved frequencies’ channels. While in Channel Mode, the display will show two of your saved frequencies, and the channel each frequency is saved on.

## Delete a saved frequency/channel

Deleting a frequency or channel is even easier:

* Press MENU.
* Navigate to option 28.
* Press MENU to enter channel selection.
* Select the channel/frequency you wish to delete.
* Press MENU again to delete it.
* Exit.

## Search for active frequencies and transmissions

You may find yourself in a disaster situation with no known frequencies or channels. If this happens, you can still use the UV-5R to pick up emergency communications by using it to scan the airwaves:

* Press VFO/MR and ensure the radio is in Frequency Mode.
* Press and hold the */”SCAN” Key.
* The radio will scan through frequencies rapidly, stopping when it hears a transmission.
* To set the number of frequencies the radio jumps with each scan, press MENU.
* Navigate to option 1: “STEP”.
* Press MENU to enter the step selection.
* Use the up and down arrows to increase or decrease the amount of the step.
* The lowest step (2.5K) is the slowest and most thorough search. 50K is the fastest and least thorough frequency search.
* Change the radio’s operating band (VHF or UHF)

The Baofeng operates in two bands: Very High and Ultra High Frequency. Only one of two bands can be monitored and used at a time. To switch between bands:

* Press MENU.
* Navigate to option 33: BAND.
* Press MENU again to enter the band selection.
* Use the up and down arrows to select VHF or UHF.
* Press MENU again to confirm.
* Exit.

TIP: Many emergency radio frequencies, police, EMS, government agencies, and rescue operations use the VHF band.

## CTCSS and DCS (“private line” or PL communications)
Sometimes, one radio frequency will be used for transmitting and receiving by multiple operators. This is especially likely in a disaster scenario. Many first responders, command centers, and rescue operations will stick to one frequency to ensure stable communications. But in order to separate all the operators on a single frequency from each other (and to avoid sharing transmissions and crowding up the airwaves), two possible systems of tonal frequencies are used.

These tonal frequency systems are called CTCSS (Continuous Tone Coded Squelch System) and DCS (Digital Code Squelch). Both systems work largely the same, except DCS is digital.

CTCSS has 50 universal tones measured in hertz (67.0 Hz)
DCS has 105 universal tones measured alphanumerically (D023N)
To have a better understanding of this, consider a wireless phone and the cellular network it operates on. Think of the frequency itself as the network, and the CTCSS or DCS tone as the phone number. You must be on the network to transmit or receive, but you also have to “dial” the right number to communicate (the CTCSS or DCS).

There are universal, preprogrammed tones built into the UV-5R for both systems. You must know which tone the frequency in question is using, in order to transmit.

**How to Program CTCSS and DCS to a Frequency/Channel**

To program a CTCSS or DCS tone into a frequency that requires it (and save it to a channel):
* Press VFO/MR and put the radio in Channel Mode.
* Ensure you’re on Channel A by pressing A/B.
* Type in the frequency you want to save.
* Press MENU.
* Navigate to option 10 and 12 to set a transmitting and receiving DCS tone.
* Navigate to option 11 and 13 select a transmitting and receiving CTCS tone.
* Press MENU again to select the appropriate option.
* Use the up and down arrow keys to select the appropriate DCS or CTCS transmitting and receiving tones. In options 10 and 12, or 11 and 13.
* Press MENU to confirm your selection for each.
* Navigate to option 27 to store the frequency and the transmitting and receiving DCS or CTCS tones to a channel.
* Exit.

Now, the frequency you just saved should be on the display with either “DCS” or “CT” to the left.

## How to Program a Repeater Frequency

HAM radios can only travel certain distances directly, usually a few miles. Repeaters act like “waypoints” for a transmission, hopping it from one repeater to next, extending your communication range. This is incredibly useful in a disaster situation because it allows you to reach much greater distances. Some repeaters allow transmissions to reach thousands of miles.

To program a repeater and transmit on its frequency, you’ll need to know some information about the repeater itself:
* Repeater frequency
* Shift (+ or -)
* Offset
* R-CTCS or R-DCS (rarely)
* T-CTCS or T-DCS

Some repeaters use different tonal frequency systems that are not CTCS or DCS, or none at all. Those other systems cannot be programmed into the UV-5R. They are not covered in this guide.

**To program a repeater:**
* Press VFO/MR and put the radio in Channel Mode.
* Ensure you’re on Channel A by pressing A/B.
* Type in the frequency for the repeater you want to save.
* Press MENU.
* Navigate to option 10 or 11 to input the R-DCS or R-CTCS (if applicable).
* Navigate to option 12 to 13 to input the T-CTCS or T-DCS.
* Navigate to option 25: SFT-D.
* Set the positive or negative shift for the CTCS/DCS (provided).
* Navigate to option 26: Offset.
* Set the appropriate offset (provided based on band).
* Navigate to option 27 and save your repeater to a channel.
* Exit.

Now, in Channel mode, you can select the repeater channel and transmit on the repeater in question.

# Family Radio Service (FRS)

## About
(Source: [https://www.fcc.gov/wireless/bureau-divisions/mobility-division/family-radio-service-frs](https://www.fcc.gov/wireless/bureau-divisions/mobility-division/family-radio-service-frs))
The Family Radio Service (FRS) is a private, two-way, short-distance voice and data communications service for facilitating family and group activities. The most common use for FRS channels is short-distance, two-way voice communications using small hand-held radios that are similar to walkie-talkies.

Other services that allow similar communications include the  [General Mobile Radio Service (GMRS)](https://www.fcc.gov/encyclopedia/general-mobile-radio-service-gmrs)  and the  [Multi-Use Radio Service (MURS)](https://www.fcc.gov/encyclopedia/multi-use-radio-service-murs-0).

The FRS is authorized 22 channels in the 462 MHz and 467 MHz range, all of which are shared with GMRS.

## Licensing
FRS is licensed by rule. This means an individual license is not required to operate an FRS radio provided you comply with the rules. You may operate an FRS radio regardless of your age, and for personal or for business use if you are not a representative of a foreign government.

## Operating a Family Radio Service (FRS) Unit

You can operate a FRS transmitter at any place where the FCC regulates radio communications, subject to certain limitations. A FRS transmitter may not be modified and must be certified by the FCC.

None of the FRS channels are assigned for the exclusive use of any user. You must cooperate in the selection and use of the channels in order to make the most effective use of them and to reduce the possibility of interference.

The usual range of an FRS device on channels 8-14 is less than one-half mile, but longer range communications can be achieve on channels 1-7 and 15-22 depending on conditions. You may not interconnect FRS transmitters and radios with the telephone system.

## GMRS FRS Dual-service radios

Some manufacturers received approval to market radios that were certified under both FRS and GMRS, which allowed users to use one device to operate on FRS channels, which does not require a license, and GMRS, which requires an FCC license. In 2017, the FCC changed its rules to stop equipment authorization of FRS dual-service radios and it changed the rules for both FRS and GMRS such that existing radios would be reclassified as either FRS or GMRS to remove the confusion of whether a license was needed for legal operation.

Specifically, if you have a radio that was sold as a dual-service FRS/GMRS radio and it is limited to the channels and power limits provided under the “Data” tab on this page, then that device can be operated as an FRS device without a licensing requirement. However, if the device exceeds the limits under the “Data” tab or includes any of the following channels (467.5500, 467.5750, 467.6000, 467.6250, 467.6500, 467.6750, 467.7000, and 467.7250 MHz), then it is a GMRS device and an individual FCC license is needed to operate the device other than on the channels and with the bandwidth and power limits shown under the “Data” tab.

## Channels
There are 22 FRS channels. Each channel has a bandwidth of 12.5 kHz, but the power of each channel may vary as indicated below. All channels are shared with GMRS, so you may hear communications from licensed GMRS stations on these channels.

(Source: [https://en.wikipedia.org/wiki/General_Mobile_Radio_Service](https://en.wikipedia.org/wiki/General_Mobile_Radio_Service))

|Channel     |Frequency (MHz)|FRS EIRP Restriction|GMRS EIRP Restriction|
|------------|---------------|--------------------|---------------------|
|1           |462.5625       |Up to 2 watt        |Up to 5 watts        |
|2           |462.5875       |Up to 2 watt        |Up to 5 watts        |
|3           |462.6125       |Up to 2 watt        |Up to 5 watts        |
|4           |462.6375       |Up to 2 watt        |Up to 5 watts        |
|5           |462.6625       |Up to 2 watt        |Up to 5 watts        |
|6           |462.6875       |Up to 2 watt        |Up to 5 watts        |
|7           |462.7125       |Up to 2 watt        |Up to 5 watts        |
|8           |467.5625       |Up to 0.5 watt      |Up to 0.5 watt[7]    |
|9           |467.5875       |Up to 0.5 watt      |Up to 0.5 watt[7]    |
|10          |467.6125       |Up to 0.5 watt      |Up to 0.5 watt[7]    |
|11          |467.6375       |Up to 0.5 watt      |Up to 0.5 watt[7]    |
|12          |467.6625       |Up to 0.5 watt      |Up to 0.5 watt[7]    |
|13          |467.6875       |Up to 0.5 watt      |Up to 0.5 watt[7]    |
|14          |467.7125       |Up to 0.5 watt      |Up to 0.5 watt[7]    |
|15          |462.5500       |Up to 2 watt        |Up to 50 watts       |
|16          |462.5750       |Up to 2 watt        |Up to 50 watts       |
|17          |462.6000       |Up to 2 watt        |Up to 50 watts       |
|18          |462.6250       |Up to 2 watt        |Up to 50 watts       |
|19          |462.6500       |Up to 2 watt        |Up to 50 watts       |
|20          |462.6750       |Up to 2 watt        |Up to 50 watts       |
|21          |462.7000       |Up to 2 watt        |Up to 50 watts       |
|22          |462.7250       |Up to 2 watt        |Up to 50 watts       |



#  Multi-Use Radio Service (MURS)
(Source: [https://www.fcc.gov/wireless/bureau-divisions/mobility-division/multi-use-radio-service-murs](https://www.fcc.gov/wireless/bureau-divisions/mobility-division/multi-use-radio-service-murs))
## About
The Multi-Use Radio Service (MURS) uses channels in the 151 – 154 MHz spectrum range. The most common use of MURS channels is for short-distance, two-way communications using small, portable hand-held radios that function similar to walkie-talkies.

Similar services include  [General Mobile Radio Service (GMRS)](https://www.fcc.gov/general/general-mobile-radio-service-gmrs)  and  [Family Radio Service (FRS)](https://www.fcc.gov/general/family-radio-service-frs).

MURS is authorized five channels that were previously in the industrial/business radio service and were known as the “color dot” frequencies in Part 90 of the FCC rules.

## Licensing
MURS is licensed by rule. This means an individual license is not required for an entity to operate a MURS transmitter if it is not a representative of a foreign government and if it uses the transmitter in accordance with the MURS rules outlined in [47 C.F.R. Part 95 Subpart J](https://www.fcc.gov/encyclopedia/rules-regulations-title-47). There is no age restriction regarding who may operate an MURS transmitter.

## Operations
You may operate a MURS transmitter at any location the FCC regulates radio communications, subject to certain restrictions. A MURS transmitter must be certified by the FCC.

None of the MURS channels are assigned for the exclusive use of any user. You must cooperate in the selection and use of the channels in order to make the most effective use of them and to reduce the possibility of interference.

No MURS transmitter shall, under any condition of modulation, transmit more than 2 watts transmitter power output.

The usual range of communications between MURS stations is less than a few miles; connecting a MURS radio to an external antenna can extend the range to ten miles or more. MURS stations are not allowed to be interconnected with the public switched telephone network. A station identification announcement is not required to be transmitted. Other restrictions on the use of MURS stations also apply.

## Channels
(Source: [https://en.wikipedia.org/wiki/Multi-Use_Radio_Service](https://en.wikipedia.org/wiki/Multi-Use_Radio_Service))

|Channel     |Frequency|Maximumauthorized bandwidth|Channel name|
|------------|---------|---------------------------|------------|
|1           |151.82 MHz|11.25 kHz                  |MURS 1      |
|2           |151.88 MHz|11.25 kHz                  |MURS 2      |
|3           |151.94 MHz|11.25 kHz                  |MURS 3      |
|4           |154.57 MHz|20.00 kHz                  |Blue Dot    |
|5           |154.60 MHz|20.00 kHz                  |Green Dot   |

# General Mobile Radio Service (GMRS)
(Source: [https://www.fcc.gov/general-mobile-radio-service-gmrs](https://www.fcc.gov/general-mobile-radio-service-gmrs))
## About
The General Mobile Radio Service (GMRS) is a licensed radio service that uses channels around 462 MHz and 467 MHz. The most common use of GMRS channels is for short-distance, two-way voice communications using hand-held radios, mobile radios and repeater systems. In 2017, the FCC expanded GMRS to also allow short data messaging applications including text messaging and GPS location information.

Services that provide functionality similar to GMRS include the Citizens Band Radio Service (CBRS), the Family Radio Service (FRS) and the Multi-Use Radio Service (MURS).

The GMRS is available to an individual (one man or one woman) for short-distance two-way communications to facilitate the activities of licensees and their immediate family members. Each licensee manages a system consisting of one or more transmitting units (stations.) The rules for GMRS limit eligibility for new GMRS system licenses to individuals in order to make the service available to personal users. (Some previously licensed non-individual systems are allowed to continue using GMRS.)

In 2017, the FCC updated the GMRS by allotting additional interstitial channels in the 467 MHz band, increased the license term from 5 to 10 years, allowed transmission of limited data applications such as text messaging and GPS location information and made other updates to the GMRS rules to reflect modern application of the service.

## Licensing
An FCC license is required to operate GMRS system. Licenses are issued for a ten-year term and can be renewed between 90 days prior to the expiration date and up to the actual expiration date of the license. After a license expires, an individual must request a new GMRS license.

A GMRS system licensed to a non-individual prior to July 31, 1987 is also eligible for renewal, but the licensee may not make any major modification to the system.

You may apply for a GMRS license if you are 18 years or older and not a representative of a foreign government. If you receive a license, any family member, regardless of age, can operate GMRS stations and units within the licensed system.

The FCC service rules for the GMRS are located in  [47 C.F.R. Part 95 Subpart E](https://www.fcc.gov/encyclopedia/rules-regulations-title-47). You can find information about GMRS licensing in the rules.

## Operations
You may operate a MURS transmitter at any location the FCC regulates radio communications, subject to certain restrictions. A MURS transmitter must be certified by the FCC.

None of the MURS channels are assigned for the exclusive use of any user. You must cooperate in the selection and use of the channels in order to make the most effective use of them and to reduce the possibility of interference.

No MURS transmitter shall, under any condition of modulation, transmit more than 2 watts transmitter power output.

The usual range of communications between MURS stations is less than a few miles; connecting a MURS radio to an external antenna can extend the range to ten miles or more. MURS stations are not allowed to be interconnected with the public switched telephone network. A station identification announcement is not required to be transmitted. Other restrictions on the use of MURS stations also apply.

## Channels
There are 30 GMRS channels with a bandwidth of 25 kHz (20 KHz authorized bandwidth) or 12.5 kHz as outlined below:
(Source: [https://en.wikipedia.org/wiki/General_Mobile_Radio_Service](https://en.wikipedia.org/wiki/General_Mobile_Radio_Service))

|Frequency   |FRS Channel|FRS Power|FRS Bandwidth|GMRS Power|GMRS Bandwidth|
|------------|-----------|---------|-------------|----------|--------------|
|462.5625 MHz|1          |2 W      |12.5 kHz     |5 W       |20 kHz        |
|462.5875 MHz|2          |2 W      |12.5 kHz     |5 W       |20 kHz        |
|462.6125 MHz|3          |2 W      |12.5 kHz     |5 W       |20 kHz        |
|462.6375 MHz|4          |2 W      |12.5 kHz     |5 W       |20 kHz        |
|462.6625 MHz|5          |2 W      |12.5 kHz     |5 W       |20 kHz        |
|462.6875 MHz|6          |2 W      |12.5 kHz     |5 W       |20 kHz        |
|462.7125 MHz|7          |2 W      |12.5 kHz     |5 W       |20 kHz        |
|467.5625 MHz|8          |0.5 W    |12.5 kHz     |0.5 W     |12.5 kHz      |
|467.5875 MHz|9          |0.5 W    |12.5 kHz     |0.5 W     |12.5 kHz      |
|467.6125 MHz|10         |0.5 W    |12.5 kHz     |0.5 W     |12.5 kHz      |
|467.6375 MHz|11         |0.5 W    |12.5 kHz     |0.5 W     |12.5 kHz      |
|467.6625 MHz|12         |0.5 W    |12.5 kHz     |0.5 W     |12.5 kHz      |
|467.6875 MHz|13         |0.5 W    |12.5 kHz     |0.5 W     |12.5 kHz      |
|467.7125 MHz|14         |0.5 W    |12.5 kHz     |0.5 W     |12.5 kHz      |
|462.5500 MHz|15         |2 W      |12.5 kHz     |50 W      |20 kHz        |
|462.5750 MHz|16         |2 W      |12.5 kHz     |50 W      |20 kHz        |
|462.6000 MHz|17         |2 W      |12.5 kHz     |50 W      |20 kHz        |
|462.6250 MHz|18         |2 W      |12.5 kHz     |50 W      |20 kHz        |
|462.6500 MHz|19         |2 W      |12.5 kHz     |50 W      |20 kHz        |
|462.6750 MHz|20         |2 W      |12.5 kHz     |50 W      |20 kHz        |
|462.7000 MHz|21         |2 W      |12.5 kHz     |50 W      |20 kHz        |
|462.7250 MHz|22         |2 W      |12.5 kHz     |50 W      |20 kHz        |
|467.5500 MHz|N/A        |N/A      |N/A          |50 W      |20 kHz        |
|467.5750 MHz|N/A        |N/A      |N/A          |50 W      |20 kHz        |
|467.6000 MHz|N/A        |N/A      |N/A          |50 W      |20 kHz        |
|467.6250 MHz|N/A        |N/A      |N/A          |50 W      |20 kHz        |
|467.6500 MHz|N/A        |N/A      |N/A          |50 W      |20 kHz        |
|467.6750 MHz|N/A        |N/A      |N/A          |50 W      |20 kHz        |
|467.7000 MHz|N/A        |N/A      |N/A          |50 W      |20 kHz        |
|467.7250 MHz|N/A        |N/A      |N/A          |50 W      |20 kHz        |


# NOAA Weather Broadcast Frequencies
(Source: [https://en.wikipedia.org/wiki/NOAA_Weather_Radio](https://en.wikipedia.org/wiki/NOAA_Weather_Radio))
**NOAA Weather Radio** (**NWR**; also known as **NOAA Weather Radio All Hazards**) is an automated 24-hour network of [VHF](https://en.wikipedia.org/wiki/Very_high_frequency "Very high frequency")  [FM](https://en.wikipedia.org/wiki/Frequency_modulation "Frequency modulation")  [weather radio](https://en.wikipedia.org/wiki/Weather_radio "Weather radio") stations in the [United States](https://en.wikipedia.org/wiki/United_States "United States") (U.S.) that broadcast weather information directly from a nearby [National Weather Service](https://en.wikipedia.org/wiki/National_Weather_Service "National Weather Service") office. The routine programming cycle includes local or regional weather forecasts, synopsis, climate summaries, synopsis or zone/lake/coastal waters forecasts (when applicable). During severe conditions the cycle is shortened into: hazardous weather outlooks, short-term forecasts, special weather statements or tropical weather summaries (the first two aren't normally broadcast in most offices).
```
162.4000 MHz
162.4250 MHz
162.4500 MHz
162.4750 MHz
162.5000 MHz
162.5250 MHz
162.550 MHz
```

# Police, Fire, EMS
## Bellingham:
```
Whatcom Fire - 453.28750 (173.8 PL)
Police Dispatch - 453.22500 (91.5 PL)
Police Special Operations - 453.38750
Police Special Operations - 453.41250 
Police Special Operations - 453.43750
Police Tactical Home Base - 154.02500 
Police Tactical KOB - 155.07000 
Public Works - 453.75000
Whatcom Regional Transit Authority - 453.42500
```
## Whatcom:
```
Sheriff Dispatch - 453.32500 
Sheriff East County - 453.67500 
Sheriff Rural Area - 155.61000
Sheriff Jail/Corrections - 453.30000 
Sheriff Jail/Corrections - 453.10000
Jail Operations - 453.97500
Simulcast Patch Of WCSO 155.610 Dispatch - 453.92500
V-Fire 7 - 153.87500
V-Fire 2 - 154.22000
V-Fire Tac 12 - 154.32500
V-Fire 3 - 154.34000
V-Fire 1 - 154.43000
V-Fire 4 - 155.29500 
V-Fire 6 - 158.84250 
V-Fire Tac 8 - 158.97750
V-Fire Tac 9 - 159.09750 
V-Fire Tac 10 - 159.21750
V-Fire Tac 11 - 159.21750
V-Fire Ch 5 - 159.79500
Fire - 453.18750
Fire - 453.58750
Fire + Vehicle Repeaters - 460.52500
```

# Police Codes
## 10-CODES

|Was (Ten-Code)                                                 |Now (Procedure Word)                                           |
|---------------------------------------------------------------|---------------------------------------------------------------|
|10-0                                                           |Use Caution                                                    |
|10-1                                                           |Unable to copy - change location                               |
|10-3                                                           |Stop transmitting                                              |
|10-4                                                           |Roger                                                          |
|10-5                                                           |Relay                                                          |
|10-6                                                           |Busy                                                           |
|10-7                                                           |Out at...                                                      |
|10-8                                                           |Clear                                                          |
|10-9                                                           |Say again                                                      |
|10-12                                                          |Stand by                                                       |
|10-13                                                          |Weather report/road report                                     |
|10-15                                                          |Disturbance                                                    |
|10-17A                                                         |Theft                                                          |
|10-17B                                                         |Vandalism                                                      |
|10-17C                                                         |Shoplifting                                                    |
|10-18                                                          |Urgent                                                         |
|10-19                                                          |Return to...                                                   |
|10-20                                                          |Location                                                       |
|10-21                                                          |Call...                                                        |
|10-22                                                          |Disregard                                                      |
|10-23                                                          |On scene                                                       |
|10-25                                                          |Meet...or contact...                                           |
|10-26                                                          |Detaining subject, expedite                                    |
|10-27                                                          |Drivers License information on...                              |
|10-28                                                          |Registration information on...                                 |
|10-29                                                          |Check for wanted on...                                         |
|10-31A                                                         |Burglary                                                       |
|10-31B                                                         |Robbery                                                        |
|10-31C                                                         |Homicide                                                       |
|10-31D                                                         |Kidnapping                                                     |
|10-31E                                                         |Shooting                                                       |
|10-38                                                          |Traffic stop on...                                             |
|10-42                                                          |Off duty                                                       |
|10-44                                                          |Request for...                                                 |
|10-46                                                          |Assist motorist                                                |
|10-49                                                          |East bound green light out (etc.)                              |
|10-50                                                          |Traffic F=Fatal PD=Property Damage Hit and run Injury No injury reported Unknown Private property, location|
|10-56                                                          |Drunk pedestrian                                               |
|10-63                                                          |Prepare to copy                                                |
|10-70                                                          |Fire                                                           |
|10-74                                                          |Negative                                                       |
|10-76                                                          |En route...                                                    |
|10-77                                                          |ETA (Estimated time of arrival)                                |
|10-78                                                          |Request assistance                                             |
|10-79                                                          |Notify coroner (to be done by phone whenever possible)         |
|10-80                                                          |Chase                                                          |
|10-89                                                          |Bomb threat                                                    |
|10-90                                                          |Alarm (type of alarm)                                          |
|10-91                                                          |Pick up prisoner                                               |
|10-92                                                          |Parking complaint                                              |
|10-95                                                          |Prisoner in custody                                            |
|10-97                                                          |Check traffic signal                                           |
|10-98                                                          |Prison/jail break                                              |
|10-99                                                          |Wanted/stolen                                                  |

## CLEAR SPEECH

|Code                                                           |Meaning                                                        |
|---------------------------------------------------------------|---------------------------------------------------------------|
|CODE ONE                                                       |Informs all units to STANDBY - STOP TRANSMITTING. Do not transmit, except for emergency messages, while Code 1 is in effect. Dispatch shall announce, "Clear Code 1," when the condition is secured.|
|CODE TWO                                                       |Indicates an "urgent" call short of an "emergency" situation. A Code 2 call has priority over all other police activities except "emergencies". Proceed directly to Code 2 calls as quickly as is consistent with safety. Agents may, in exceptional cases, use their emergency equipment (both visual and audible to comply with state law) to traverse an otherwise clear intersection against a red traffic control device. Once clear of the intersection - turn off the emergency equipment.|
|CODE THREE                                                     |Indicates an EMERGENCY call. Red lights and siren are authorized. Proceed as quickly as possible with due regard for safety, and in compliance with the laws governing emergency vehicles.|
|CODE FOUR                                                      |Used to indicate that sufficient units have responded to a location, or that assistance is not needed, or is no longer needed.|
|CODE FIVE                                                      |Used when Wanted/Records checks are requested by an agent to alert the agent of a wanted felon, a person known to be dangerous or a person known to be mentally unstable. A backup unit shall be dispatched Code 2 on all Code 5's. Personnel will NOT proceed with Code 5 details until the receiving unit requests same. The unit receiving a Code 5 will request the details when he is in a safe position to do so, which might not be until his backup arrives.|
|CODE SIX                                                       |When an agent is dispatched to a traffic accident, and the dispatcher states, "Code 6," the agent will advise the drivers involved to proceed to the station to file their reports. This will only be done if there are no injuries, no unusual circumstance and the vehicles are safely operable. Driver Exchange Forms will be completed at the scene to include the C. R. number.|
|CODE SEVEN                                                     |Indicates "out of service - personal."                         |
|CODE EIGHT                                                     |Assist a fire department.                                      |

## Full List
```
10-7A Out of service at home.
10-7B Out of service - personal.
10-7od Out of service - off duty
10-8 In service/available for assignment.
10-9 Repeat last transmission.
10-10 Off duty.
10-10A Off duty at home.
10-11 Identify this frequency.
10-12 Visitors are present (be discrete).
10-13 Advise weather and road conditions.
10-14 Citizen holding suspect.
10-15 Prisoner in custody.
10-16 Pick up prisoner.
10-17 Request for gasoline.
10-18 Equipment exchange.
10-19 Return/returning to the station.
10-20 Location?
10-21 Telephone:______
10-21a Advise home that I will return at ______.
10-21b Phone your home
10-21r Phone radio dispatch
10-22 Disregard the last assignment.
10-22c Leave area if all secure.
10-23 Standby.
10-24 Request car-to-car transmission.
10-25 Do you have contact with _______?
10-26 Clear.
10-27 Driver's license check.
10-28 Vehicle registration request.
10-29 Check wants/warrants.[vehicle] (PIN,SVS)
10-29a Check wants/warrants [subject] (PIN)
10-29c Check complete [subject]
10-29f The subject is wanted for a felony.
10-29h Caution - severe hazard potential.
10-29r Check wants/record [subject PIN,CJIC)
10-29m The subject is wanted for a misdemeanor.
10-29v The vehicle wanted in connection W/crime.
10-30 Does not conform to regulations.
10-32 Drowning.
10-33 Alarm sounding.
10-34 Assist at office.
10-35 Time check.
10-36 Confidential information.
10-37 Identify the operator.
10-39 Can ______ come to the radio?
10-40 Is ______ available for a telephone call?
10-42 Check on the welfare of/at ______.
10-43 Call a doctor.
10-45 What is the condition of the patient?
10-45A Condition of patient is good.
10-45B Condition of patient is serious.
10-45C Condition of patient is critical.
10-45D Patient is deceased.
10-46 Sick person [ambulance enroute]
10-48 Ambulance transfer call
10-49 Proceed to/Enroute to ______.
10-50 under influence of narcotics/Take a report.
10-51 Subject is drunk.
10-52 Resuscitator is needed.
10-53 Person down.
10-54 Possible dead body.
10-55 Coroner's case.
10-56 Suicide.
10-56A Suicide attempt.
10-57 Firearm discharged.
10-58 Garbage complaint
10-59 Security check./Malicious mischief
10-60 Lock out.
10-61 Miscellaneous public service.
10-62 Meet a citizen.
10-62A Take a report from a citizen.
10-62B Civil standby.
10-63 Prepare to copy.
10-64 Found property.
10-65 Missing person
10-66 Suspicious person.
10-67 Person calling for help.
10-68 Call for police made via telephone.
10-70 Prowler.
10-71 Shooting.
10-72 Knifing.
10-73 How do you receive?
10-79 Bomb threat.
10-80 Explosion.
10-86 Any traffic?
10-87 Meet the officer at ______.
10-88 Fill with the officer/Assume your post.
10-91 Animal.
10-91a Stray.
10-91b Noisy animal.
10-91c Injured animal.
10-91d Dead animal.
10-91e Animal bite.
10-91g Animal pickup.
10-91h Stray horse
10-91j Pickup/collect ______.
10-91L Leash law violation.
10-91V Vicious animal.
10-95 pedestrian/ Requesting an I.D./Techunit.
10-96 Out of vehicle-ped. send backup
10-97 Arrived at the scene.
10-98 Available for assignment.
10-99 Open police garage door.
10-100 Civil disturbance - Mutual aid standby.
10-101 Civil disturbance - Mutual aid request.


11-00 Codes
11-10 Take a report.
11-24 Abandoned automobile.
11-25 Traffic hazard.
11-26 Abandoned bicycle.
11-27 10-27 with the driver being held.
11-28 10-28 with the driver being held.
11-40 Advise if an ambulance is needed.
11-41 An ambulance is needed.
11-42 No ambulance is needed.
11-48 Furnish transportation.
11-51 Escort.
11-52 Funeral detail.
11-54 Suspicious vehicle.
11-55 Officer is being followed by automobile.
11-56 Officer is being followed by auto containing dangerous persons.
11-57 An unidentified auto appeared at the scene of the assignment.
11-58 Radio traffic is being monitored. Phone all non-routine messages.
11-59 Give intensive attention to high hazard/business areas.
11-60 Attack in a high hazard area.
11-65 Signal light is out.
11-66 Defective traffic light.
11-71 Fire.
11-78 Aircraft accident.
11-79 Accident - ambulance has been sent.
11-80 Accident - major injuries.
11-81 Accident - minor injuries.
11-82 Accident - no injuries.
11-83 Accident - no details.
11-84 Direct traffic.
11-85 Tow truck required.
11-94 Pedestrian stop.
11-95 Routine traffic stop.
11-96 Checking a suspicious vehicle.
11-97 Time/security check on patrol vehicles.
11-98 Meet: _______
11-99 Officer needs help.

900 Series Codes
904 Fire.
904A Automobile fire.
904B Building fire.
904G Grass fire.
909 Traffic problem; police needed.
910 Can handle this detail.
925 Suspicious vehicle.
932 Turn on _______ mobile relay at _______.
933 Turn off mobile relay.
949 Burning inspection at _______.
950 Control burn in progress/about to begin/ended.
951 Need fire investigator.
952 Report on conditions.
953 Investigate smoke.
953A Investigate gas.
954 Off the air at the scene of the fire.
955 Fire is under control.
956 Assignment not finished.
957 Delayed response of __ minutes.
980 Restrict calls to emergency only.
981 Resume normal traffic.
1000 Plane crash
3000 Road block

Other Codes
Code 1 Do so at your convenience.
Code 2 Urgent.
Code 3 Emergency/lights and siren.
Code 4 No further assistance is needed.
Code 5 Stakeout.
Code 6 Responding from a long distance.
Code 7 Mealtime.
Code 8 Request cover/backup.
Code 9 Set up a roadblock.
Code 10 Bomb threat
Code 12 Notify news media
Code 20 Officer needs assistance
Code 22 Restricted radio traffic
Code 30 Officer needs HELP - EMERGENCY!
Code 33 Mobile emergency - clear this radio channel.
Code 43 TAC forces committed.
AID Public Safety Assistance

Phonetic Alphabet

A Adam        N Nora
B Boy           O Ocean
C Charles      P Paul
D David        Q Queen
E Edward      R Robert
F Frank         S Sam
G George      T Tom
H Henry        U Union
I Ida               V Victor
J John            W William
K King           X X-ray
L Lincoln      Y Yellow
M Mary         Z Zebra


 

 

MOST FREQUENTLY USED CALIFORNIA PENAL CODES
32 Accessory to a felony
67 Offer a bribe to executive officer
69 Deter/resist executive officer (other than peace officer) by threat/force/violence
71 Threaten injury to school officer or employee
102 Take or destroy property in custody of officer
118 Perjury
136.1(a) Intimidation of witness or victim from attending/testifying at any trial
136.1(b1) Intimidation of witness or victim from reporting crime to police/other authorities
136.1(C1) Intimidation of witness or victim by force/threat of violence
137(a) Offer bribe to influence testimony
146a Impersonating a peace officer
148 Interfering with an officer
148.1 False report of a bomb
148.5 False report of a crime
150 Refuse to aid an officer
151(a1) Advocate killing/injuring officer
187 Murder
192.1 Voluntary manslaughter
192.2 Involuntary manslaughter
192.3 Vehicular manslaughter
203 Mayhem
207 Kidnap
209a Kidnaping for ransom/extortion
209b Kidnaping for robbery
211 Robbery
220 Assault with intent to mayhem/rape/sodomy/oral copulation
236 False imprisonment
240 *Assault
240-242 *Assault and Battery
241 Assault on peace officer/EMT/firefighter
242 *Battery
243a Battery against a citizen
243b Battery against a peace officer
244 Throwing acid with intent to disfigure or burn
245 Assault with a deadly weapon
245b Assault with a deadly weapon against a peace officer
246 Shooting at an inhabited dwelling or vehicle
261 Rape
261.5 Rape - under 18 years of age
262 Rape of spouse
266h Pimping
266i Pandering
270 Child neglect/failing to pay the support payments
271 Child abandonment - under 14
272 Contributing to the delinquency of a minor
273.5a Corporal injury to spouse/cohabitant
273d Corporal injury upon child
278 Child abduction from parent or guardian
285 Incest
286 Sodomy
288 Sex crimes against children
288a Oral copulation
290 Sex registration
311.2a Possession of obscene matter
311.2b Possessing obscene matter depicting a minor
314 Indecent exposure
330 Gambling
373 Public nuisance misdemeanors (spitting in public
places, etc.)
374b Garbage dumping
402b Abandoned refrigerator
415 Disturbing the peace (be specific)
417 Brandishing a weapon
451 Arson
459 Burglary
470 Forgery
476a Insufficient funds (checks)
484e Theft of a credit card
484f Forged credit card
484g Illegal use of a credit card
487 Grand Theft ($400+)
488 Petty theft (<$400)
496 Receiving stolen property
499b Joyriding
503 Embezzlement
537 Nonpayment of a bill (Restaurants, etc.)
537e Article with serial number removed
555 Posted trespass
594 Vandalism
597 Killing or abusing animals
602L Trespass
603 Trespass with damage
647b Prostitution
647f Drunk in public
647g Disorderly conduct - loitering on private property at night
647h Disorderly conduct - peeking into an inhabited building
647a Annoy/molest child
653m Harassment by phone (obscene call)
4532 Escape (also 32 PC)
12020 Possession of a deadly weapon
12025 Possession of a concealed firearm
12031 Possession of a loaded firearm

MOST FREQUENTLY USED CALIFORNIA VEHICLE CODES
10851 Auto theft
10852 Malicious mischief to a vehicle
22500e Vehicle blocking a driveway
23109 Exhibition of speed
23110 Throwing articles at a vehicle
4601 Suspended or revoked license
20001 Hit and run - injury or death
20002 Hit and run - property damage
21111 Throwing article
22348 Maximum speed law - 55 MPH
23112 Throwing garbage on highway
22350 Basic speed law - unsafe speed
23152 Drunk driving

MOST FREQUENTLY USED CALIFORNIA HEALTH AND SAFETY CODES
(Relating to heroin, cocaine, peyote, mescaline, and THC)

11350 Possession
11351 Possession for sales
11352 Sale/transportation


(Relating to marijuana)

11357a Possession of hashish
11357b Possession of less than 1 ounce
11357c Possession of more than 1 ounce
11358 Cultivation
11359 Possession for sales
11360a Sale/transportation

(Relating to barbiturates, amphetamines and LSD)

11377 Possession
11378 Possession for sale

MISCELLANEOUS HEALTH AND SAFETY CODES
5150 Mental/emotional
5170 Unable to care for self
11364 Paraphernalia
11368 Forged prescription
11550 Under influence of a controlled substance
12677 Fireworks
```

# Full Sources

http://www.bugoutbagbuilder.com/learning-tutorials/baofeng-uv-5r-basic-setup-emergency-frequencies

https://www.fcc.gov/wireless/bureau-divisions/mobility-division/family-radio-service-frs

https://www.fcc.gov/wireless/bureau-divisions/mobility-division/multi-use-radio-service-murs

https://en.wikipedia.org/wiki/Multi-Use_Radio_Service

https://www.fcc.gov/general-mobile-radio-service-gmrs

https://en.wikipedia.org/wiki/General_Mobile_Radio_Service

https://en.wikipedia.org/wiki/NOAA_Weather_Radio