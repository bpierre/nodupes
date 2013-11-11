var nodupes = require('nodupes')();
var names = ['name', 'name', 'othername', 'name', 'othername'];
names.forEach(function(name) {
  console.log( nodupes(name) );
});
