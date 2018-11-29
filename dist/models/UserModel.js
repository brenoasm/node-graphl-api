"use strict";
exports.__esModule = true;
var bcryptjs_1 = require("bcryptjs");
exports["default"] = (function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        photo: {
            type: DataTypes.BLOB({
                length: 'long'
            }),
            allowNull: true,
            defaultValue: null
        }
    }, {
        tableName: 'users',
        hooks: {
            beforeCreate: function (user, options) {
                var salt = bcryptjs_1.genSaltSync();
                user.password = bcryptjs_1.hashSync(user.password, salt);
            }
        }
    });
    User.associate = function (models) { };
    User.prototype.isPassword = function (encodedPassword, password) {
        return bcryptjs_1.compareSync(password, encodedPassword);
    };
    return User;
});
