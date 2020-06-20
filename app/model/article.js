var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Article', new Schema({
    title: String,
    content: String,
    createdAt: Date,
    lastModifiedAt: Date
}, { versionKey: false }));
