var gulp = require('gulp'); // Task runner.
var pug = require('gulp-pug'); // allows gulp to work with pug files
var sass = require('gulp-sass'); // allows gulp to work with sass files
var rename = require('gulp-rename'); // allows gulp to rename files and folders
var watch = require('gulp-watch'); // allows gulp to be on watch mode

// sets task to convert pug into html
gulp.task('pug', function() {
	return gulp
		.src('./**/template.pug') // file location of the pug file
		.pipe(
			pug({
				doctype: 'html', // file type to be converted to
				pretty: true, // formats the file after conversion
			})
		)
		.pipe(rename({ basename: 'index', dirname: '' })) // renames file and directory
		.pipe(gulp.dest('./public')); // location of where html will be sent after task is done
});

// sets task to convert sass into css
gulp.task('sass', function() {
	return gulp
		.src('./**/burger_style.sass')
		.pipe(
			sass({
				doctype: 'css',
				pretty: true,
			})
		)
		.pipe(rename({ dirname: '' }))
		.pipe(gulp.dest('./public/assets/css/'));
});

// runs several tasks at once
gulp.task('start', gulp.parallel('pug', 'sass'));

// start our server and listen for changes
gulp.task('server', function() {
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'server.js',
        // this listens to changes in any of these files/routes and restarts the application
        watch: ["server.js", "routes/", 'public/*', 'public/*/**'],
        ext: 'js'
        // Below i'm using es6 arrow functions but you can remove the arrow and have it a normal .on('restart', function() { // then place your stuff in here }
    }).on('restart', () => {
    gulp.src('server.js')
      // I've added notify, which displays a message on restart. Was more for me to test so you can remove this
      .pipe(notify('Running the start tasks and stuff'));
  });
});

// gulp.task('watch', function() {
//   return watch('./**/*.pug', { ignoreInitial: false }).pipe(
//     gulp.dest('./public')
//   );
// });

// gulp.task('watch', function() {
// 	watch('./**/*.pug', ['pug']).pipe(gulp.dest('./public'));
// 	watch('./**/*.sass', ['styles']).pipe(gulp.dest('./public/assets/css/'));
// });
