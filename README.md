# Music-bot

A complete code to download for a music bot 🎧

Looking for a code for a music bot ? This fully open source code is made for your project !

If you need help with this project, to get support faster you can join our [Discord Server](https://discord.gg/vWuSbMkR).

*If you don't have any development knowledge, it is recommended to join the Discord support server to get help.*

### ⚡ Configuration

Open the configuration file located in the main folder `config.js`.

```js
module.exports = {
    app: {
        px: 'XXX',
        token: 'XXX',
        playing: 'by Gyan ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'XXX',
            commands: []
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {}
    }
};
```

Basic configuration

- `app/px`, the command prefix which will be set to use the bot.
- `app/token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section
- `app/playing`, the activity of the bot

DJ mode configuration

- `opt/DJ/commands`, the list of commands limited to members with the DJ role

Advanced configuration

- `opt/maxVol`, the maximum volume that users can define
- `opt/loopMessage`, if the message that a music is played should be sent when it is looped
- `opt/discordPlayer`, options used by discord-player



