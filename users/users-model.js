const db = require('../data/db-config.js');

function find() {
    return db('users');
}

function findById(id){
    return db('users')
        .where({ id })
        .first();
}

function findPostById(id) {
    return db('posts as p')
        .join('users as u', 'u.id', 'p.user_id')
        .select('p.id', 'u.username', 'p.contents')
        .where({user_id: id});
}

function createNewUser(data) {
    return db('users')
        .insert(data, 'id');
}

function updateUser(id, data) {
    return db('users')
        .where({ id })
        .update(data);
}

function deleteUser(id) {
    return db('users')
        .where({ id })
        .del();
}

module.exports = {
    find,
    findById,
    findPostById,
    createNewUser,
    updateUser,
    deleteUser
}