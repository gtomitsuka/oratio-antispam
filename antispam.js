var fs = require('fs');

module.exports = {};

module.exports.isSpamFile = function(filename) {
    return module.exports.isSpamString(fs.readFileSync(filename, {encoding:'utf8'}));
};

module.exports.isSpamString = function(str) {
    return false;
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

