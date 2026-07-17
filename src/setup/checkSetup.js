const settings = require("../database/settings");

module.exports = (guildId) => {

    let data = settings.get(guildId);

    if (!data) {

        settings.create(guildId);

        data = settings.get(guildId);

    }

    return data;

};