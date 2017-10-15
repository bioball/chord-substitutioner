const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('default', () => {
  return gulp.src([
    "node_modules/midi/inc/shim/Base64.js",
    "node_modules/midi/inc/shim/Base64binary.js",
    "node_modules/midi/inc/shim/WebAudioAPI.js",
    "node_modules/midi/inc/shim/WebMIDIAPI.js",

    "node_modules/midi/js/midi/audioDetect.js",
    "node_modules/midi/js/midi/gm.js",
    "node_modules/midi/js/midi/loader.js",
    "node_modules/midi/js/midi/player.js",
    "node_modules/midi/js/midi/plugin.audiotag.js",
    "node_modules/midi/js/midi/plugin.webaudio.js",
    "node_modules/midi/js/midi/plugin.webmidi.js",
    
    "node_modules/midi/js/util/dom_request_xhr.js",
    "node_modules/midi/js/util/dom_request_script.js"
  ])
    .pipe(concat('midi.js'))
    .pipe(gulp.dest('./public/vendor'))
});

gulp.task('watch', () => {
  return watch('node_modules/{midi,midi-js-soundfonts}')
    
})