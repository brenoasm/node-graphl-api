"use strict";
exports.__esModule = true;
exports.userResolvers = {
    User: {
        posts: function (user, _a, _b, info) {
            var _c = _a.first, first = _c === void 0 ? 10 : _c, _d = _a.offset, offset = _d === void 0 ? 0 : _d;
            var db = _b.db;
            return db.Post.findAll({
                // @ts-ignore
                where: { author: user.get('id') },
                limit: first,
                offset: offset
            });
        }
    },
    Query: {
        users: function (parent, _a, _b, info) {
            var _c = _a.first, first = _c === void 0 ? 10 : _c, _d = _a.offset, offset = _d === void 0 ? 0 : _d;
            var db = _b.db;
            return db.User.findAll({
                limit: first,
                offset: offset
            });
        },
        user: function (parent, _a, _b, info) {
            var id = _a.id;
            var db = _b.db;
            return db.User.findById(id).then(function (user) {
                if (!user) {
                    throw new Error("User with id " + id + " not found!");
                }
                return user;
            });
        }
    },
    Mutation: {
        createUser: function () { return function (parent, _a, _b, info) {
            var input = _a.input;
            var db = _b.db;
            return db.sequelize.transaction(function (t) {
                return db.User.create(input, {
                    transaction: t
                });
            });
        }; },
        updateUser: function () { return function (parent, _a, _b, info) {
            var id = _a.id, input = _a.input;
            var db = _b.db;
            id = parseInt(id);
            return db.sequelize.transaction(function (t) {
                return db.User.findById(id).then(function (user) {
                    if (!user) {
                        throw new Error("User with id " + id + " not found!");
                    }
                    return user.update(input, { transaction: t });
                });
            });
        }; },
        updateUserPassword: function () { return function (parent, _a, _b, info) {
            var id = _a.id, input = _a.input;
            var db = _b.db;
            id = parseInt(id);
            return db.sequelize.transaction(function (t) {
                return db.User.findById(id).then(function (user) {
                    if (!user) {
                        throw new Error("User with id " + id + " not found!");
                    }
                    return user
                        .update(input, { transaction: t })
                        .then(function (user) { return !!user; });
                });
            });
        }; },
        deleteUser: function () { return function (parent, _a, _b, info) {
            var id = _a.id;
            var db = _b.db;
            id = parseInt(id);
            return db.sequelize.transaction(function (t) {
                return db.User.findById(id).then(function (user) {
                    if (!user) {
                        throw new Error("User with id " + id + " not found!");
                    }
                    return user.destroy({ transaction: t })
                        // @ts-ignore
                        .then(function (user) { return !!user; });
                });
            });
        }; }
    }
};
