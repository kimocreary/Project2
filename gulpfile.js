"use strict";
const gulp = require("gulp"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass"),
  uglify = require("gulp-uglify-es").default,
  rename = require("gulp-rename");
gulp.task("scripts", function() {
  return gulp
    .src(
      [
        "./config/**/*.js",
        "./models/**/*.js",
        "./public/assets/js/*.js",
        "./routes/**/*.js",
        "./gulpfile.js",
        "./server.js"
      ],
      { base: "./" }
    )
    .pipe(uglify())
    .pipe(gulp.dest("./"));
}),
  gulp.task("pug", function() {
    return gulp
      .src("./views/*.pug")
      .pipe(pug({ doctype: "html", pretty: !1 }))
      .pipe(rename({ dirname: "" }))
      .pipe(gulp.dest("./public"));
  }),
  gulp.task("sass", function() {
    return gulp
      .src("./public/assets/sass/*.sass")
      .pipe(sass({ doctype: "css", pretty: !1 }))
      .pipe(rename({ dirname: "" }))
      .pipe(gulp.dest("./public/assets/css"));
  }),
  gulp.task("start", gulp.parallel("pug", "sass", "scripts"));
