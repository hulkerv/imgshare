const {Schema, model} =  require('mongoose');
const path = require('path');

const ImageSchema = new Schema({
    title: {type: String},
    description: {type: String},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    created_at: {type: Date, default: Date.now}
});

ImageSchema.virtual('uniqueId')
    .get(function(){
            return this.filename.replace(path.extname(this.filename), '')
});

module.exports = model('Image', ImageSchema);