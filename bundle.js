var jspm = require('jspm');

jspm.bundleSFX("src/App.ts", "build/build.js", {sourceMaps:true, minify:true})
    .then(function() {
        console.log('Build complete, go to http://127.0.0.1:8080/index-bundle.html');
    })
    .catch(function(err) {
        console.log(err);
    });