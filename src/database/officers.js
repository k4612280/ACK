const db = require("./init");

module.exports = {

    create(data) {

        return db.prepare(`
        INSERT INTO officers
        (guild_id,user_id,fingerprint,rank_name)
        VALUES (?,?,?,?)
        `).run(
            data.guild_id,
            data.user_id,
            data.fingerprint,
            data.rank_name
        );

    },

    get(userId) {

        return db.prepare(
            "SELECT * FROM officers WHERE user_id=?"
        ).get(userId);

    }

};