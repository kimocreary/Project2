require("dotenv").config();var express=require("express"),session=require("express-session"),passport=require("passport"),bodyParser=require("body-parser"),db=require("./models"),app=express(),PORT=process.env.PORT||3e3;app.use(express.urlencoded({extended:!1})),app.use(express.json()),app.use(express.static("public")),app.use(session({secret:"cats",resave:!1,saveUninitialized:!1})),app.use(bodyParser.urlencoded({extended:!1})),app.use(passport.initialize()),app.use(passport.session()),require("./routes/api-routes")(app),require("./routes/html-routes")(app);var syncOptions={force:!1};"test"===process.env.NODE_ENV&&(syncOptions.force=!0),db.sequelize.sync(syncOptions).then((function(){app.listen(PORT,(function(){console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",PORT,PORT)}))})),module.exports=app;