var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Article', new Schema({
    uri: String,
    createdAt: Date,
    lastModifiedAt: Date
}, { versionKey: false }));
