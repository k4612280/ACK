const {
ActionRowBuilder,
ModalBuilder,
TextInputBuilder,
TextInputStyle
} = require("discord.js");

module.exports = () => {

const modal = new ModalBuilder()
.setCustomId("prison_modal")
.setTitle("سجن لاعب");

const user = new TextInputBuilder()
.setCustomId("user")
.setLabel("آيدي أو منشن السجين")
.setStyle(TextInputStyle.Short)
.setRequired(true);

const reason = new TextInputBuilder()
.setCustomId("reason")
.setLabel("سبب السجن")
.setStyle(TextInputStyle.Paragraph)
.setRequired(true);

const time = new TextInputBuilder()
.setCustomId("time")
.setLabel("مدة السجن (بالدقائق)")
.setStyle(TextInputStyle.Short)
.setRequired(true);

const caseNumber = new TextInputBuilder()
.setCustomId("case")
.setLabel("رقم القضية")
.setStyle(TextInputStyle.Short)
.setRequired(true);

modal.addComponents(
new ActionRowBuilder().addComponents(user),
new ActionRowBuilder().addComponents(reason),
new ActionRowBuilder().addComponents(time),
new ActionRowBuilder().addComponents(caseNumber)
);

return modal;

};