const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const streamqueue  = require('streamqueue');


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
gulp.task('copyHTMLViews', function() {
	gulp.src('src/views/*.html')
	.pipe(gulp.dest('public/views'));
});
//Copy entry file file
gulp.task('copyEntryHTML', function() {
	gulp.src('src/index.html')
	.pipe(gulp.dest('public'));
});
//optimize images
gulp.task('imageMin', () =>
    gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/assets/images'))
);
// Complie Sass
gulp.task('sass', function() {
	gulp.src('src/assets/stylesheets/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('public/assets/stylesheets'));
});
//copy css from local and vendor
gulp.task('css', function() {
	gulp.src([
		'src/assets/stylesheets/css/*.css',
		'src/vendor/stylesheets/*.css'
	])
	.pipe(gulp.dest('public/assets/stylesheets'));
});
//custom scripts
gulp.task('customScripts', function() {
	return streamqueue({ objectMode: true },
        gulp.src([
        	'src/assets/javascripts/*.js'
        ])
    )
	.pipe(babel({
        presets: ['env']
    }))
	.pipe(gulp.dest('public/assets/javascripts'));
});
//vendor scripts
gulp.task('vendorScripts', function() {
	return streamqueue({ objectMode: true },
        gulp.src([
        	'src/vendor/javascripts/*.js'
        ])
    )
	.pipe(babel({
        presets: ['env']
    }))
	.pipe(gulp.dest('public/vendor/javascripts'));
});
//partials scripts
gulp.task('partialScripts', function() {
	return streamqueue({ objectMode: true },
        gulp.src(['src/assets/javascripts/partials/*.js'])
    )
	.pipe(babel({
        presets: ['env']
    }))
	.pipe(gulp.dest('public/assets/javascripts/partials'));
});
gulp.task('default', ['message', 'copyHTMLViews', 'copyEntryHTML', 'imageMin', 'css', 'sass', 'customScripts', 'vendorScripts', 'partialScripts']);

gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['custom-scripts']);
	gulp.watch('src/js/*.js', ['vendor-scripts']);	
	gulp.watch('src/images/*', ['imageMin']);
	gulp.watch('src/assets/stylesheets/sass/*.scss', ['sass']);
	gulp.watch('src/assets/stylesheets/sass/partials/*.scss', ['sass']);
	gulp.watch('src/*.html', ['copyEntryHTML']);
	gulp.watch('src/views/*.html', ['copyHTMLViews']);
});