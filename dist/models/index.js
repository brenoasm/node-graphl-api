"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(path.resolve(__dirname + "./../config/config.json"))[env];
var db = null;
if (!db) {
    db = {};
    var operatorAliases = false;
    var sequelize_1 = new Sequelize(config.database, config.username, config.password, config);
    config = Object.assign({ operatorAliases: operatorAliases }, config);
    fs.readdirSync(__dirname)
        .filter(function (file) {
        return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
    })
        .forEach(function (file) {
        var model = sequelize_1["import"](path.join(__dirname, file));
        db[model['name']] = model;
    });
    Object.keys(db).forEach(function (modelName) {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
    db['sequelize'] = sequelize_1;
}
exports["default"] = db;
