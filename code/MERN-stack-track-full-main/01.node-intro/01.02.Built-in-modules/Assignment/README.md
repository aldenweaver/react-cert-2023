# Assignment 01.02. OS, FS, path
***

## Goals

- Check OS
- Check free memory
- Create a file

***
![HACKERMAN](https://i.imgur.com/7E4xaEi.jpg)

The local programming group "Linux Elite" heard you're learning to code, and are looking for new members to recruit! In order to get in this club of elite hackers, they're putting your skills to the test and won't initiate anyone in who can't pass it. Here's the task:

- Create a module called `linuxOnly.js`
- On that module, write a function called `isLinuxGang()` that will generate an object with the following properties:
- - `isLinuxGang`: Check the operating system the file runs on. If it's Windows or Mac, the value is `false`. If it's Linux, it's `true`
- - `availableMem`: Check the free memory of the system this file runs on. This should be that value
- Then, create a file called `payload.json` where the text on this file is the object you created (Use `JSON.stringify()` to turn the object into a string)
- Don't forget to export this function

***

```
M̴͎̘͑́̊W̴̗̳̦̠̉̆A̸̘͇͛͌̊H̶͔̒̉̇A̸͙͎͚͗H̷̘̼͍̩̄̈́̾̃Ȧ̸̝̈́H̷͔̀̊̓̃A̴̛͙̝̲͑H̵͕̔̋A̴̢̺͊H̴̯̾͛̚Ả̵͖̉͘H̴̦͂̕̕͜Ḁ̸͍̭̓̚H̸̛͔̞̙̬͂͐̀A̶͉̗͚̿H̵̢̲̭̑̍́͘ G̵̡͉̝̅̾O̷̡͓̠͚͒̔́Ọ̴͙̝̆͑͜Ḍ̶̓̔̕̚ ̸̧̨͔͘L̷͈̆Ũ̴̻̺̮̕͝C̴̪͎̗̬̽K̷͉̃͊ ̷̹̃̒̃̍H̸̬̜́́̋̕A̵̛͉͐̋̎C̸̦͗̈́Ḳ̵̮͙͗́́E̶̡̬̮̭̚̚R̸͖̣̀͋̅
```