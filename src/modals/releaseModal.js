const {
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle
} = require("discord.js");

module.exports = () => {

    const modal = new ModalBuilder()
        .setCustomId("release_modal")
        .setTitle("إطلاق سراح سجين");

    const user = new TextInputBuilder()
        .setCustomId("user")
        .setLabel("آيدي أو منشن السجين")
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

    const reason = new TextInputBuilder()
        .setCustomId("reason")
        .setLabel("سبب إطلاق السراح")
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);

    modal.addComponents(
        new ActionRowBuilder().addComponents(user),
        new ActionRowBuilder().addComponents(reason)
    );

    return modal;

};