const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars')
const morgan = require('morgan');
const multer = require('multer');
const {v4:uuidv4} = require('uuid');
const errorHandler = require('errorhandler');
const session = require('express-session');
const flash = require('connect-flash');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
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
    helpers: require('./helpers'),
    handlebars: allowInsecurePrototypeAccess(handlebars)
}));
app.set('view engine', '.hbs');

// Midlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname).toLowerCase());
    },
    
});
app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/uploads'),
    limits:{fileSize: 1000000},
}).single('image'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    
}));
app.use(flash());

// Global Variables
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/image.routes'));

// Static Files
app.use('/public',  express.static(path.join(__dirname, 'public')))

// Errorhandlers
if ('development' === app.get('env')){
    app.use(errorHandler);
}
module.exports = app;