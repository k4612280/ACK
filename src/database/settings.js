const db = require("./init");

module.exports = {

    get(guildId) {

        return db.prepare("SELECT * FROM settings WHERE guild_id = ?").get(guildId);

    },

    create(guildId) {

        return db.prepare("INSERT OR IGNORE INTO settings (guild_id) VALUES (?)").run(guildId);

    },

    update(column, value, guildId) {

        return db.prepare(`UPDATE settings SET ${column} = ? WHERE guild_id = ?`).run(value, guildId);

    }

};