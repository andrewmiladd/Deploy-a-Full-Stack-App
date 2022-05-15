"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("./config/config");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    username: config_1.config.username,
    password: config_1.config.password,
    database: config_1.config.database,
    host: config_1.config.host,
    port: config_1.config.dbPort,
    dialect: "postgres",
    storage: ":memory:",
});
//  export const sequelize2 = new Sequelize ( "postgres://postgres:12345678@database-1.cmela7pjnovs.us-east-1.rds.amazonaws.com:5432/postgres"
//  )
// deploy:
//     artifact: www/Archive.zip
//# sourceMappingURL=sequelize.js.map