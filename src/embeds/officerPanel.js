const { EmbedBuilder } = require("discord.js");

module.exports = () => {

    return new EmbedBuilder()
        .setColor("#0099ff")
        .setTitle("👮 لوحة الضباط")
        .setDescription(
            [
                "مرحبًا بك في نظام الضباط.",
                "",
                "اختر العملية من القائمة بالأسفل."
            ].join("\n")
        )
        .setFooter({
            text: "Government System"
        })
        .setTimestamp();

};