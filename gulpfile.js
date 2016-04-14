var gulp = require('gulp')
,   clean = require('gulp-clean')
,   htmlmin = require('gulp-htmlmin')
,   concat = require('gulp-concat')
,   uglify = require('gulp-uglify')
,   ngAnnotate = require('gulp-ng-annotate')
,   uglifyCss = require('gulp-uglifycss')
,   jshint = require('gulp-jshint')
,   nodemon = require('gulp-nodemon')
,   html = './app/**/*.html'
,   css = './assets/css/*.css'
,   js = ['./app/*.js', './app/**/*.js']
,   taskList = ['html', 'styles', 'lint', 'javascript'];

gulp.task('html', function(){
  return gulp.src(html)
    // .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public/template'));
});

gulp.task('styles', function(){
  return gulp.src(css)
    // .pipe(uglifyCss())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public'));
});

gulp.task('lint', function(){
  return gulp.src(js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('javascript', function(){
  return gulp.src(js)
    // .pipe(ngAnnotate())
    .pipe(concat('all.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./public'));
});

gulp.task('clean', function(){
  return gulp.src('./public', {read: false})
    .pipe(clean());
});

gulp.task('demon', function(){
  nodemon({
    script: 'server.js',
    ext: 'js html css',
    watch: ['app/*.js', 'app/**/*.js', 'app/styles/*.css', './app/**/*.html']
    })
  .on('start', taskList, function(){
    console.log('listening on ' + 8080);
    })
  .on('change', taskList, function(){
    console.log('listening on ' + 8080);
    })
  .on('restart', function(){
    console.log('restarted!');
    });
});

gulp.task('default', ['clean'], function(){
  gulp.start('demon');
});