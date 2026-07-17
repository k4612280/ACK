const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const dataFolder = path.join(__dirname, "../../data");

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
}

const db = new Database(path.join(dataFolder, "government.db"));

db.pragma("journal_mode = WAL");

db.exec(`
CREATE TABLE IF NOT EXISTS settings (
    guild_id TEXT PRIMARY KEY,
    prison_role_id TEXT,
    officer_role_id TEXT,
    media_role_id TEXT,
    admin_role_id TEXT,
    logs_channel_id TEXT,
    prison_channel_id TEXT,
    media_channel_id TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS prisoners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    guild_id TEXT,
    user_id TEXT,
    officer_id TEXT,
    reason TEXT,
    sentence INTEGER,
    status TEXT DEFAULT 'jailed',
    jailed_at TEXT DEFAULT CURRENT_TIMESTAMP,
    released_at TEXT
);

CREATE TABLE IF NOT EXISTS officers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    guild_id TEXT,
    user_id TEXT,
    fingerprint TEXT,
    rank_name TEXT,
    joined_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    guild_id TEXT,
    author_id TEXT,
    title TEXT,
    content TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS violations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    guild_id TEXT,
    user_id TEXT,
    officer_id TEXT,
    reason TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    guild_id TEXT,
    action TEXT,
    user_id TEXT,
    executor_id TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`);

module.exports = db;