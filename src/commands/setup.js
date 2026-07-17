const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    EmbedBuilder
} = require("discord.js");

const checkSetup = require("../setup/checkSetup");
const createRoles = require("../setup/createRoles");
const createCategories = require("../setup/createCategories");
const createChannels = require("../setup/createChannels");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription("إعداد النظام الحكومي")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {

        await interaction.deferReply({ ephemeral: true });

        const guild = interaction.guild;

        checkSetup(guild.id);

        const roles = await createRoles(guild);

        const categories = await createCategories(guild);

        const channels = await createChannels(guild, categories);

        const embed = new EmbedBuilder()
            .setColor("Green")
            .setTitle("✅ تم إعداد النظام الحكومي")
            .addFields(
                {
                    name: "📌 الرتب",
                    value: `${Object.keys(roles).length}`,
                    inline: true
                },
                {
                    name: "📂 التصنيفات",
                    value: `${Object.keys(categories).length}`,
                    inline: true
                },
                {
                    name: "💬 الرومات",
                    value: `${Object.keys(channels).length}`,
                    inline: true
                }
            )
            .setFooter({
                text: "Government System"
            })
            .setTimestamp();

        await interaction.editReply({
            embeds: [embed]
        });

    }

};