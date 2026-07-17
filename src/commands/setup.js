const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    EmbedBuilder
} = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription("إعداد نظام الحكومة بالكامل")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle("🏛 Government System")
            .setDescription(
                [
                    "مرحبًا بك في نظام الحكومة.",
                    "",
                    "هذه هي النسخة الأولية.",
                    "سيتم لاحقًا إنشاء:",
                    "• نظام السجن",
                    "• لوحة الضباط",
                    "• لوحة السجين",
                    "• وزارة الإعلام",
                    "• البصمة",
                    "• النسخ الاحتياطية",
                    "• الإحصائيات",
                    "• السجلات",
                    "• الإعدادات"
                ].join("\n")
            )
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        });

    }

};