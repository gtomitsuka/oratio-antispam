var fs = require('fs');
var pg = require('pg');

module.exports = {};

module.exports.postgreConnStr = '';
module.exports.tableName = 'antispam';

function dbQuery(query, qParams, callback) {
    pg.connect(module.exports.postgreConnStr, function connectCallback(err, client, done) {
        if (err) {
            callback(err, null);
            return;
        }
        client.query(query, qParams, function queryCallback(err, result) {
            done();
            callback(err, result);
        });
    });
}

module.exports.isSpamFile = function(filename) {
    return module.exports.isSpamString(fs.readFileSync(filename, {encoding:'utf8'}));
};

module.exports.isSpamString = function(str) {
    return new Promise(function promiseFunc(fulfill, reject) {
        fulfill(false);
    });
};

module.exports.registerFileGood = function(filename) {
    return module.exports.registerStringGood(fs.readFileSync(filename, {encoding:'utf8'}));
};

module.exports.registerFileBad = function(filename) {
    return module.exports.registerStringBad(fs.readFileSync(filename, {encoding:'utf8'}));
};

module.exports.registerStringGood = function(str) {
};

module.exports.registerStringBad = function(str) {
};

module.exports.truncateKeyword = function(keyword) {
};

module.exports.endPostgres = function() {
    pg.end();
};

