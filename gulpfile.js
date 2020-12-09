var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss    = require('gulp-concat-css');

 
// Выполняет синхронизация с браузером
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'src'
    },
    notify: false
  });
});
 
// компилируем sass в css и обновляем страницу
gulp.task('sass', function() {
  return gulp.src('src/sass/*.sass')//находим файлы в папке
  .pipe(sass({outputStyle: 'compressed'}))//компилируем их
  .pipe(autoprefixer({cascade: false}))//ставим автопрефиксы
  //.pipe(concatCss("bundle.css"))//собираем файлы css в один файл, название ему даём сами
  .pipe(gulp.dest('src/css'))//кладём их в папку css
  .pipe(browserSync.reload({stream:true}));//обновляем браузер
});

// Watch for all file changes
gulp.task('watch', function () {
  //отслеживание изменения в файлах sass, если они есть запускает задачу sass 
  gulp.watch('src/sass/*.sass', gulp.parallel('sass'));
  //отслеживает изменение в файлах html, когда видит изменение перезагружает страницу
  gulp.watch('src/*.html').on('change', browserSync.reload);
});
 
// Следим за всеми изменениями файлов во время работы
gulp.task('default', gulp.parallel('sass','browser-sync', 'watch'));