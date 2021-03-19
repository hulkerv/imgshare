const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const multer = require('multer');
const {v4:uuidv4} = require('uuid');
const errorHandler = require('errorhandler');

// Initializatios
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'), 'partials'),
    layautsDir: path.join(app.get('views'), 'layouts'),
    extname:'.hbs',
    helpers: require('./helpers')
}));
app.set('view engine', '.hbs');

// Midlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads/temp'),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname).toLowerCase());
    },
    
});
app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/uploads/temp'),
    limits:{fileSize: 1000000},
    fileFilter: (req, file, cb) =>{
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null, true);
        }
        cb("Error: El Archivo debe ser una imagen valida");
    }
}).single('image'));

// Global Variables


// Routes
app.use(require('./routes/index.routes'));

// Static Files
app.use('/public',  express.static(path.join(__dirname, 'public')))

// Errorhandlers
if ('development' === app.get('env')){
    app.use(errorHandler);
}
module.exports = app;