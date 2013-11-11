var nodupes = require('../');
var tape = require('tape');

tape('Simple', function(t) {
  t.plan(7);
  var nd = nodupes();
  t.equal(nd('test'), 'test');
  t.equal(nd('test'), 'test-2');
  t.equal(nd('another-name'), 'another-name');
  t.equal(nd('test'), 'test-3');
  t.equal(nd('another-name'), 'another-name-2');
  t.equal(nd('another-name-4'), 'another-name-4');
  t.equal(nd('another-name-4'), 'another-name-4-2');
});

tape('Suffix first', function(t) {
  t.plan(1);
  var nd = nodupes({ suffixFirst: true });
  t.equal(nd('test'), 'test-1');
});

tape('Separator', function(t) {
  t.plan(3);
  var nd = nodupes({ separator: '.' });
  t.equal(nd('test'), 'test');
  t.equal(nd('test'), 'test.2');
  t.equal(nd('test'), 'test.3');
});

tape('Load existing names', function(t) {
  t.plan(4);

  var nd = nodupes();
  nd('test');
  nd('test');
  nd('another-name');
  nd('test');
  t.deepEqual(nd.getNames(), {
    'test': 3,
    'another-name': 1
  });

  var nd2 = nodupes({ names: nd.getNames() });
  t.equal(nd2('test'), 'test-4');
  t.equal(nd2('another-name'), 'another-name-2');
  t.deepEqual(nd2.getNames(), {
    'test': 4,
    'another-name': 2
  });
});
