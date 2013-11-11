# nodupes

Prevent duplicate names by appending an incremented prefix.

## Examples

### example/nodupes.js

```javascript
var nodupes = require('nodupes')();
var names = ['name', 'name', 'othername', 'name', 'othername'];
names.forEach(function(name) {
  console.log( nodupes(name) );
});
```

Output:

```shell
$ node example/nodupes.js
name
name-2
othername
name-3
othername-2
```

## Usage

```javascript
var nodupes = require('nodupes');
```

### var nd = nodupes(options)

Call `nodupes()` to get a new nodupes function, with its own index and options.

Options:

```javascript
var options = {
  names: {},           // Load a pre-existing names index.
  suffixFirst: false,  // Add a suffix on the first appearance of a name.
  separator: '-'       // Change the suffix separator.
};
```

### nd('name')

Returns the name with an appended suffix if needed.

## Installation

```shell
$ npm install nodupes
```

## License

[MIT](http://pierre.mit-license.org/)
