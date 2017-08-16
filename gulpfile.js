const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const jade = require('gulp-jade');


/*

--TOP LEVEL FUNCTIONS--
gulp.task - define tasks
gulp.src - Point to files to use
gulp.dest - Points to folder to output
gulp.watch - watch files and folders for changes

*/


//Logs Message

gulp.task('message', function() {
	return console.log('Gulp is running');
});

//Copy all HTML files
gulp.task('copyHTML', function() {
	gulp.src('src/*.html').pipe(gulp.dest('public'));
})

//optimize images
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
);

// Complie Sass
gulp.task('sass', function() {
	gulp.src('src/sass/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('public/css'));
})

//scripts
gulp.task('scripts', function() {
	gulp.src('src/js/*.js').pipe(concat('main.js')).pipe(uglify()).pipe(gulp.dest('public/js'));
})

gulp.task('default', ['message', 'copyHTML', 'imageMin', 'sass', 'scripts']);

gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/images/*', ['imageMin']);
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('src/*.html', ['copyHTML']);
})