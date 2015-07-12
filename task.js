var Builder = require('jspm').Builder;

var builder = new Builder();

builder.config({
  separateCSS: true
});

builder.build('b + a.css!', 'out.js', { minify: false }).then(function() {
  console.log('built');
})
.catch(function(e) {
  console.error(e);
});