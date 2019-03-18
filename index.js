var fs = require('fs');
var folder = "../17.7-File_System/"; 
fs.readdir(folder, function(err, files) {
    if (err) throw err;
    var files = files;
    console.log(files)
    fs.writeFile('files.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano!')
    });
});