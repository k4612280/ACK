const settings = require("../database/settings");

module.exports = (guildId, data) => {

    for (const key in data) {

        settings.update(
            key,
            data[key],
            guildId
        );

    }

};