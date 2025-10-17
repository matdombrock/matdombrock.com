<steelsky>
{
    "title":"Gnome + Wayland Touchpad Scroll Fix",
    "description":"Fix the touchpad scrolling speed on Gnome + Wayland",
    "tags":"#linux",
    "type":"post",
    "date":"2025-10-01"
}
</steelsky>

# Gnome + Wayland Touchpad Scroll Fix

## Overview
At the time of writing, Gnome has no support for changing the trackpad / touchpad scroll speed. 

This is a bit of a hack but it works. 

Note:
> This hack will soon be deprecated when libinput's own Lua plugin system is out.

Tested on Framework 13 with Fedora Linux 41 (Workstation Edition).

## Build and install libinput-config

[Libinput-config Repo](https://gitlab.com/warningnonpotablewater/libinput-config)

[Arch Wiki](https://wiki.archlinux.org/title/Libinput)

The `libinput-config` package may be available in your distro's repositories. If not you will need to build and install it something like this:
```Shell
sudo dnf install systemd-devel
sudo dnf install -y gcc libinput-devel meson
git clone https://gitlab.com/warningnonpotablewater/libinput-config.git
cd libinput-config
meson build
ninja -C build
mkdir -p ~/.local/lib64
cp build/libinput-config.so ~/.local/lib64

mkdir -p ~/.config/systemd/user/org.gnome.Shell@wayland.service.d/
cat <<EOF >> ~/.config/systemd/user/org.gnome.Shell@wayland.service.d/libinput-config.conf
[Service]
Environment="LD_PRELOAD=%h/.local/lib64/libinput-config.so"
EOF
```

## Configure
Edit the config file:
```sh
sudo nvim /etc/libinput.conf`
```
Add:
```
scroll-factor=0.15
scroll-factor-x=0.15
scroll-factor-y=0.15
```

[Option Docs](https://gitlab.com/warningnonpotablewater/libinput-config#how-to-use)

## Apply
To apply the change simply logout or reboot.

## Firefox
You may still have issues scrolling in Firefox. Navigate to [about:config](about:config) and enter:
```
mousewheel.default.delta_multiplier_y
```

Experiement with this value to fix Firefox specific scroll speed issues. 

---

Thanks to [Jack Wilsdon](https://jackwilsdon.me/libinput-config-silverblue/) for original instructions.
