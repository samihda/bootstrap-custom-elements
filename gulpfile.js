'use strict';

var gulp = require('gulp'),
	del = require('del'),
	plugins = require('gulp-load-plugins')();

gulp.task('clean', function() {
	return del(['dist']); // to-do: clean each directory?
});

gulp.task('copy', function() {
	gulp.src('node_modules/webcomponents.js/webcomponents.js')
		.pipe(gulp.dest('dist/scripts/'));
});

gulp.task('style', function() {
	return gulp.src('app/styles/*.scss')
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass().on('error', plugins.sass.logError))
		.pipe(plugins.minifyCss())
		.pipe(plugins.sourcemaps.write('.maps/'))
		.pipe(gulp.dest('dist/styles/'))
		.pipe(plugins.connect.reload());
});

gulp.task('script', function() {
	return gulp.src('app/scripts/*.js')
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('default'))
		.pipe(plugins.uglify())
		//.pipe(plugins.concat('main.min.js', {newLine: '\r\n'}))
		.pipe(plugins.sourcemaps.write('.maps/'))
		.pipe(gulp.dest('dist/scripts/'))
		.pipe(plugins.connect.reload());
});

gulp.task('html', function() {
	return gulp.src('app/**/*.html')
		.pipe(gulp.dest('dist/'))
		.pipe(plugins.connect.reload());
});

gulp.task('connect', function() {
	plugins.connect.server({
		root: 'dist',
		livereload: true
	});
});

gulp.task('watch', function() {
	gulp.watch(['app/styles/*.scss'], ['style']);
	gulp.watch(['app/scripts/*.js'], ['script']);
	gulp.watch(['app/**/*.html'], ['html']);
});

gulp.task('build', ['html', 'script', 'style', 'copy']); // include clean?

gulp.task('serve', ['connect', 'watch']);

gulp.task('default', ['build', 'serve']);
