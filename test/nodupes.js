var nodupes = require('../');
var tape = require('tape');

tape('Simple', function(t) {
  t.plan(7);
  var nd = nodupes();
  t.assert(nd('test'), 'test');
  t.assert(nd('test'), 'test-2');
  t.assert(nd('another-name'), 'another-name');
  t.assert(nd('test'), 'test-3');
  t.assert(nd('another-name'), 'another-name-2');
  t.assert(nd('another-name-4'), 'another-name-4');
  t.assert(nd('another-name-4'), 'another-name-4-2');
});

tape('Suffix first', function(t) {
  t.plan(1);
  var nd = nodupes({ suffixFirst: true });
  t.assert(nd('test'), 'test-1');
});

tape('Separator', function(t) {
  t.plan(3);
  var nd = nodupes({ separator: '.' });
  t.assert(nd('test'), 'test.1');
  t.assert(nd('test'), 'test.2');
  t.assert(nd('test'), 'test.3');
});
