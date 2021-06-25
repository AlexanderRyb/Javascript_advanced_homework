const gulp = require('gulp');
var cssnano = require('gulp-cssnano'); 
var sass = require('gulp-sass'); 
const imagemin = require('gulp-imagemin')

gulp.task('sass', function(){    
    return gulp.src('src/styles.scss')       
        .pipe(sass())       
        .pipe(cssnano())       
        .pipe(gulp.dest('dist/css')); 
});

exports.default = () => (
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
)
function imgSquash(){
    return  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))

}
gulp.task("imgSquash", imgSquash);