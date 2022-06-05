module.exports = {
    name: 'bye',
    aliases: ['previous'],
    utilisation: '{prefix}bye',
    voiceChannel: true,

    async execute(client, message) {
       
        message.channel.send(`GoodBye, have a nice day buddy. 👋`);
    },
}
