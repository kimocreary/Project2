var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('pug', function() {
	return gulp
		.src('./**/template.pug')
		.pipe(
			pug({
				doctype: 'html',
				pretty: true,
      }),
		)
		.pipe(rename({ basename: 'index', dirname: '' }))
		.pipe(gulp.dest('./public'));
});

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

// gulp.task('watch', function() {
//   return watch('./**/*.pug', { ignoreInitial: false }).pipe(
//     gulp.dest('./public')
//   );
// });

gulp.task('watch', function() {
	watch('./**/*.pug', ['pug']).pipe(gulp.dest('./public'));
	watch('./**/*.sass', ['styles']).pipe(gulp.dest('./public/assets/css/'));
});
