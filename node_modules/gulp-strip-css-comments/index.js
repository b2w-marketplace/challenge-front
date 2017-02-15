'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var stripCssComments = require('strip-css-comments');

module.exports = function (opts) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-strip-css-comments', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(stripCssComments(file.contents.toString(), opts));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-strip-css-comments', err, {fileName: file.path}));
		}

		cb();
	});
};
