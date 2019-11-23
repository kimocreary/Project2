# Project2

## Technologies Used

### HTML

- PUG

### CSS

- SASS
- Bootstrap 4 - css framework

### Javascript & Node.js

#### Task runner

- Gulp - automates tasks in the command line

  - gulp-pug - complies PUG into HTML
  - gulp-sass - complies SASS into CSS
  - gulp-rename - renames files and folder. Used to remove pugs' directory names.
  - gulp-watch - adds watch mode. compiles files every time there is a change
  - gulp-nodemon - adds nodemon to watch server changes

- cross-env

#### Database

- Mysql.js - handles database
- Sequelize

#### Routing

- Express.js - handles routing

#### Linter

- eslint
  - eslint-config-prettier
- prettier

#### Security

- keys.js - stores keys
- dotenv - hides keys

### Testing

- Travis CI
- chai
  - chai-http
- mocha

### Hosting

- Heroku
