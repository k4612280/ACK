const Database = require("better-sqlite3");
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(process.cwd(), "data");

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
}

const db = new Database(
    path.join(dataFolder, "database.db")
);

db.pragma("journal_mode = WAL");

db.exec(`

CREATE TABLE IF NOT EXISTS settings (

guild_id TEXT PRIMARY KEY,

prison_admin_role_id TEXT,
police_team_role_id TEXT,
prisoner_role_id TEXT,
top_admin_role_id TEXT,
call_prisoner_role_id TEXT,

prison_room_id TEXT,
prison_news_room_id TEXT,
police_manage_room_id TEXT,
prison_logs_room_id TEXT,
prisoner_requests_room_id TEXT,
police_call_room_id TEXT,

prison_category_id TEXT,
media_category_id TEXT,

violations_before_solitary INTEGER DEFAULT 3,
default_solitary_duration INTEGER DEFAULT 600,

prison_embed_color TEXT DEFAULT '#0099ff',
media_embed_color TEXT DEFAULT '#00ff66',

send_dm_on_prison INTEGER DEFAULT 1,
auto_delete_solitary_room INTEGER DEFAULT 1,
auto_restore_roles INTEGER DEFAULT 1,
auto_create_solitary INTEGER DEFAULT 1,

backup_interval INTEGER DEFAULT 300,
log_level TEXT DEFAULT 'normal',

created_at DATETIME DEFAULT CURRENT_TIMESTAMP

);

`);
db.exec(`

CREATE TABLE IF NOT EXISTS prisoners (

id INTEGER PRIMARY KEY AUTOINCREMENT,

guild_id TEXT NOT NULL,

user_id TEXT NOT NULL,

username TEXT,

prison_id TEXT UNIQUE,

previous_roles TEXT,

nickname TEXT,

reason TEXT,

case_number TEXT UNIQUE,

officer_id TEXT,

officer_name TEXT,

entry_time INTEGER,

release_time INTEGER,

prison_duration INTEGER,

violations_count INTEGER DEFAULT 0,

solitary_count INTEGER DEFAULT 0,

status TEXT DEFAULT 'imprisoned',

card_message_id TEXT,

solitary_room_id TEXT

);

`);

db.exec(`

CREATE TABLE IF NOT EXISTS violations (

id INTEGER PRIMARY KEY AUTOINCREMENT,

prisoner_id INTEGER,

guild_id TEXT,

reason TEXT,

officer_id TEXT,

officer_name TEXT,

created_at DATETIME DEFAULT CURRENT_TIMESTAMP

);

`);

db.exec(`

CREATE TABLE IF NOT EXISTS fingerprints (

id INTEGER PRIMARY KEY AUTOINCREMENT,

guild_id TEXT,

officer_id TEXT,

officer_name TEXT,

type TEXT,

created_at DATETIME DEFAULT CURRENT_TIMESTAMP

);

`);

module.exports = db;