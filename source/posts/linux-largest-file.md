<steelsky>
{
  "title":"Listing The Largest Files On A Linux System",
  "description":"How to deal with full drives on linux.",
  "tags":"#linux #programming",
  "type":"post",
  "date":"2023-11-01"
}
</steelsky>
# Listing The Largest Files On A Linux System

## Introduction
I've struggled with managing my disk usage on Linux systems without a GUI for a while now. Jumping all over the system and checking for large files is basically a wild goose chase, but this command has helped a lot with quickly discovering the largest files on my system. This is something I should have been doing a long time ago.

## The Command
To scan a disk on a Linux system and return a list of it's largest files simply run this command:
```bash
sudo du -a -h / | sort -n -r | head -n 10
```

## Breakdown
```bash
sudo du -a -h <Directory_To_Scan> | sort -n -r | head -n <Results_To_Return>
```
### Disk Usage
```bash
sudo du -a -h / |
```
* `sudo` is saying that we want to run as root which is required to scan all of the files on the root of the system. However if you are only scanning files that are owned by you, then you should have no problems running with default access.
* `du` is saying we want to run the disk usage command.
* `-a` is saying we are interested in all files even if they are hidden.
* `-h`is saying that we want human readable output.
* `/` is specifying the directory that we want to scan. In this case '/' which would be the root of the file system. So this command will scan your entire system.
* `|` is a pipe character used to send the output of this command into the next one.

### Sort
```bash
sort -n -r |
```
* `sort` is saying we want to sort the data.
* `-n` is saying we want the data sorted in numerical order. This is short for `--numeric-sort`.
* `-r` is saying we want the data sorted in reverse order so that the biggest files are on top. This is short for `--reverse`.
* `|` is a pipe character used to send the output of this command into the next one.

### Head
```bash
head -n 10
```
* `head` is saying we want to user the 'head' command which is used to return the top of a file out output stream.
* `-n` is saying we want to specify the amount of lines returned from the top. This is short for `--lines`.
* `20` is saying we want to return the top 20 lines.

## Scanning Another Directory
To scan another directory simply replace the specified directory in the command with the one you want to scan:
```bash
sudo du -a -h /home/user/some_specific_directory | sort -n -r | head -n 10
```

## Return A Different Amount Of Results
You can return as few or as many results as you see fit. Just change the number at the end of the command:
```bash
sudo du -a -h /home/user/some_specific_directory | sort -n -r | head -n 25
```
