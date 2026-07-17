const db = require("./init");

module.exports = {

    create(action,userId,executorId,guildId){

        db.prepare(`
        INSERT INTO logs
        (guild_id,action,user_id,executor_id)
        VALUES(?,?,?,?)
        `).run(
            guildId,
            action,
            userId,
            executorId
        );

    }

};