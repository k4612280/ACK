const {
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle
} = require("discord.js");

module.exports = () => {

    const modal = new ModalBuilder()
        .setCustomId("violation_modal")
        .setTitle("تسجيل مخالفة");

    const user = new TextInputBuilder()
        .setCustomId("user")
        .setLabel("آيدي أو منشن الشخص")
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

    const reason = new TextInputBuilder()
        .setCustomId("reason")
        .setLabel("سبب المخالفة")
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);

    modal.addComponents(
        new ActionRowBuilder().addComponents(user),
        new ActionRowBuilder().addComponents(reason)
    );

    return modal;

};