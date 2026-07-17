const db = require("./init");

module.exports = {

    create(data) {

        return db.prepare(`
            INSERT INTO violations (

                prisoner_id,
                guild_id,
                reason,
                officer_id,
                officer_name

            )

            VALUES (

                @prisoner_id,
                @guild_id,
                @reason,
                @officer_id,
                @officer_name

            )
        `).run(data);

    },

    get(prisonerId) {

        return db.prepare(`
            SELECT *
            FROM violations
            WHERE prisoner_id = ?
            ORDER BY id DESC
        `).all(prisonerId);

    },

    delete(id) {

        return db.prepare(`
            DELETE FROM violations
            WHERE id = ?
        `).run(id);

    },

    all() {

        return db.prepare(`
            SELECT *
            FROM violations
            ORDER BY id DESC
        `).all();

    }

};