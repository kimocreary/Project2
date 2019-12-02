"use strict";var fs=require("fs"),path=require("path"),Sequelize=require("sequelize"),basename=path.basename(module.filename),env=process.env.NODE_ENV||"development",config=require(__dirname+"/../config/config.json")[env],db={};if(config.use_env_variable)var sequelize=new Sequelize(process.env[config.use_env_variable]);else sequelize=new Sequelize(config.database,config.username,config.password,config);fs.readdirSync(__dirname).filter((function(e){return 0!==e.indexOf(".")&&e!==basename&&".js"===e.slice(-3)})).forEach((function(e){var i=sequelize.import(path.join(__dirname,e));db[i.name]=i})),Object.keys(db).forEach((function(e){db[e].associate&&db[e].associate(db)})),db.sequelize=sequelize,db.Sequelize=Sequelize,module.exports=db;