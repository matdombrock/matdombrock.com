<steelsky>
{
  "title":"Frequency & Wavelength",
  "description":"A short guide on dealing with frequency and wavelength.",
  "tags":"#radio #waves #electronics #hacking",
  "type":"post",
  "date":"2021-04-01"
}
</steelsky>
# Frequency & Wavelength

We normally think of waves as having a frequency. Something like 120 Hz could describe a sound wave and something 5 GHz could describe a WiFi signal. When we say that a wave has a frequency of 127 Hz we are saying that the wave "repeats" or "cycles" 120 times per second. This is concept is sometimes described as CPS or Cycles Per Second. 

Sometimes it can also be useful to think of waves as having a specific length. The length of a wave can be measured as the distance from one peak to the next. For instance, we could say that the length of a 157 MHz radio wave is about 1.9 meters. 

One common use case for knowing the length of the wave is in designing and building antenna systems. Another use case would be trying to troubleshoot why a cellphone signal is not getting into some parts of your house. These examples represent entire fields unto themselves but both rely on an intuitive understanding of waves and how they work. 

Thinking of waves in terms of length instead of frequency can be very useful for conceptualizing the true nature and scale of waves. For instance consider this:

* A radio wave oscillating at 1 Hz will have a wavelength of ~299792 kilometers. 
* A WiFi signal at 5 GHz will have a wavelength of ~6 centimeters.
* A photon oscillating at 600 THz (6x10<sup>14</sup> Hz) will have a wavelength of only ~500 nanometers. 

## Calculating Wavelength

Calculating the length of a wave if fairly simple if we know the both the frequency of the wave as well as what kind of medium the wave is traveling through. 

If we are dealing with **radio or light waves**, we know that they both more at the speed of light. We can call this `C`. The value of `C`can be expressed as **299,792,458 m/s**. 

If we are dealing with a **sound wave** we are not dealing with a true constant anymore because the speed of sound is dependent on the air temperature, humidity ect. Either way we will also call this value `C`. Typically we are safe to assume that the speed of sound is about **343 m/s**, which is true if you are in a temperate climate at about 20c. 

The value we give to `f` (frequency) should be expressed in hertz. 

**Variables and Constants:**

```
λ = Wavelength in meters

C = Speed of Light [Can be subbed for speed of sound]

f = Frequency
```

**Formula:**

```
λ = C/f
```

**Example:**

So if we have a frequency of 157Mhz (157 million hertz) we can calculate the wavelength like this:

```
λ = C/157Mhz
```

Expanded this could be said as:

```
λ = 299792458/157000000
```

Which gives us a wavelength of:

```
~1.909506101910828 meters
```



