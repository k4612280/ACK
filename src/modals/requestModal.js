const {
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle
} = require("discord.js");

module.exports = () => {

    const modal = new ModalBuilder()
        .setCustomId("request_modal")
        .setTitle("طلب سجين");

    const request = new TextInputBuilder()
        .setCustomId("request")
        .setLabel("اكتب الطلب")
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);

    modal.addComponents(
        new ActionRowBuilder().addComponents(request)
    );

    return modal;

};