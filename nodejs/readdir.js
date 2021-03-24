var fs = require('fs');
var testfolder = '../data';

fs.readdir(testfolder, function(err, data){
    console.log(data);
})