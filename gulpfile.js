var gulp = require("gulp"); // Task runner.
var pug = require("gulp-pug"); // allows gulp to work with pug files
var sass = require("gulp-sass"); // allows gulp to work with sass files
var rename = require("gulp-rename"); // allows gulp to rename files and folders
// var message = require("gulp-message");
var nodemon = require("gulp-nodemon");
var eslint = require("gulp-eslint");
// var gulpIf = require("gulp-if");
// var file = require("vinyl");

// sets task to convert pug into html
gulp.task("pug", function() {
  return gulp
    .src("./views/*.pug") // file location of the pug file
    .pipe(
      pug({
        doctype: "html", // file type to be converted to
        pretty: true // formats the file after conversion
      })
    )
    .pipe(rename({ dirname: "" })) // renames file and directory
    .pipe(gulp.dest("./public")); // location of where html will be sent after task is done
});

// sets task to convert sass into css
gulp.task("sass", function() {
  return gulp
    .src("./public/assets/sass/*.sass")
    .pipe(
      sass({
        doctype: "css",
        pretty: true
      })
    )
    .pipe(rename({ dirname: "" }))
    .pipe(gulp.dest("./public/assets/css"));
});

// function isFixed(file) {
//   return file.eslint !== null && file.eslint.fixed;
// }

// gulp.task("lint", function() {
//   return (
//     gulp
//       .src(["./**/*.js", "!./bundle.js"])

//       .pipe(eslint({ fix: true }))
//       .pipe(eslint.format())
//       // .pipe(eslint({ useEslintrc: true }))
//       // .pipe(gulpIf(isFixed, gulp.dest("./**/*.js")))
//       .pipe(eslint.failAfterError())
//   );
// });
gulp.task("lint", function() {
  return (
    gulp
      .src(["*.js", "!./bundle.js"])
      // eslint() attaches the lint output to the "eslint" property
      // of the file object so it can be used by other modules.
      .pipe(eslint({ fix: true }))
      .pipe(eslint({ useEslintrc: true }))
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.formatEach())
      // To have the process exit with an error code (1) on
      // lint error, return the stream and pipe to failAfterError last.
      .pipe(eslint.failAfterError())
  );
});
gulp.task("server", function() {
  nodemon({
    script: "server.js",
    watch: ["server.js", "./routes/*", "/public/*", "public/*/**"],
    ext: "js"
  }).on("restart", function() {
    gulp.src("server.js");
  });
});

// runs several tasks at once
gulp.task("start", gulp.series("pug", "sass", "lint"));
