const {Schema, model} =  require('mongoose');
const path = require('path');

const ImageSchema = new Schema({
    title: {type: String},
    description: {type: String},
    filename: {type: String},
    user: {type:String},
    views: {type: Number, default: 0},
    likes: {type: Number, default: 0},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    created_at: {type: Date, default: Date.now}
});

module.exports = model('Image', ImageSchema);