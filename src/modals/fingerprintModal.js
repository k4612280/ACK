const {
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle
} = require("discord.js");

module.exports = () => {

    const modal = new ModalBuilder()
        .setCustomId("fingerprint_modal")
        .setTitle("بصمة الضابط");

    const number = new TextInputBuilder()
        .setCustomId("fingerprint")
        .setLabel("رقم البصمة")
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

    modal.addComponents(
        new ActionRowBuilder().addComponents(number)
    );

    return modal;

};