const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();
        
        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('A Music Bot made with love by Gyan \n  Its and open source bot \n Github code will be uploaded soon');
        embed.addField(`Enabled - ${commands.size} commands,  type each command with prefix(~) , to know how its used.`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Music comes first - Made with heart by Gyan', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};