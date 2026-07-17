const db = require("./init");

module.exports = {

    create(data) {

        return db.prepare(`
        INSERT INTO prisoners
        (guild_id,user_id,officer_id,reason,sentence)
        VALUES (?,?,?,?,?)
        `).run(
            data.guild_id,
            data.user_id,
            data.officer_id,
            data.reason,
            data.sentence
        );

    },

    get(userId) {

        return db.prepare(
            "SELECT * FROM prisoners WHERE user_id = ? AND status='jailed'"
        ).get(userId);

    },

    release(userId) {

        return db.prepare(`
        UPDATE prisoners
        SET status='released',
        released_at=CURRENT_TIMESTAMP
        WHERE user_id=?
        `).run(userId);

    }

};