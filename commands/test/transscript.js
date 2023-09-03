const { SlashCommandBuilder, Client} = require('discord.js');
const discordTranscripts = require('discord-html-transcripts');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('transcript')
		.setDescription('Get a transcript'),
	async execute(interaction) {

        const channel = interaction.channel; // or however you get your TextChannel
        //const sendToChannel = client.channels.fetch('1147936434330804334')

        // Must be awaited
        //const attachment = await discordTranscripts.createTranscript(channel);

        //client.channels.fetch('1147936434330804334').send({
        //files: [attachment],
        //});

        const uptime = Client.user;
		await interaction.reply(uptime);
    
	},
};