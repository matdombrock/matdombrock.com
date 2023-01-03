<steelsky>
{
  "title":"Disable Oculus Quest Telemetry",
  "description":"adb commands for disabling facebook telemetry on the Oculus Quest and Quest 2.",
  "tags":"#hacking #electronics #guide"
}
</steelsky>
# Disable Oculus Quest Telemetry

<div class="archive-msg">ARCHIVED: This is for historical purposes only!</div>

```
adb shell pm disable-user --user 0 com.oculus.unifiedtelemetry
adb shell pm disable-user --user 0 com.oculus.gatekeeperservice
adb shell pm disable-user --user 0 com.oculus.notification_proxy
adb shell pm disable-user --user 0 com.oculus.bugreporter
adb shell pm disable-user --user 0 com.oculus.os.logcollector
adb shell pm disable-user --user 0 com.oculus.appsafety
```

Source:  https://www.reddit.com/r/QuestPiracy/comments/jfrbgd/disabling_telemetry_error_adb_command_sidequest/