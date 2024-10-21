const fs = require('fs');
const events = require('events');
const util = require('util');

function Watcher(watchDir, processedDir) {
    this.watchDir = watchDir;
    this.processedDir = processedDir;
}
util.inherits(Watcher, events.EventEmitter);

Watcher.prototype.watch = function() {
    const watcher = this;
    fs.readdir(this.watchDir, function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            watcher.emit('process', file);
        });
    });
};

Watcher.prototype.start = function() {
    const watcher = this;
    fs.watch(this.watchDir, function(eventType, filename) {
        if (eventType === 'rename' && filename) {
            watcher.watch();
        }
    });
};

const watcher = new Watcher('./watch', './done');

watcher.on('process', function(file) {
    const watchFile = `${this.watchDir}/${file}`;
    const processedFile = `${this.processedDir}/${file.toLowerCase()}`;

    fs.rename(watchFile, processedFile, function(err) {
        if (err) {
            console.error(`Error processing file ${file}: ${err.message}`);
        } else {
            console.log(`Processed file: ${file}`);
        }
    });
});

watcher.start();
