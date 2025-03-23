const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin =require('gulp-imagemin');



function styles(){
    return gulp.src('./src/styles/*.scss')
   
    .pipe(sass({ outputStyle:'compressed'}))
    
    .pipe(gulp.dest('./dist/css'));

}

function comprimeImagens(){
    return gulp.src('./src/imagens/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/imagens'));
}

exports .default = gulp.series( styles, comprimeImagens);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false},  gulp.series( styles));
    gulp.watch('./src/imagens/*', {ignoreInitial: false},  gulp.series(comprimeImagens));
    
};