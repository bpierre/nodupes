const OPTIONS = {
  suffixFirst: false,
  separator: '-'
};

module.exports = function(opts) {
  if (!opts) opts = {};
  var names = opts.names || {};
  for (var i in OPTIONS) {
    if (opts[i] === undefined) opts[i] = OPTIONS[i];
  }
  function nodupes(name) {
    if (!names[name]) names[name] = 0;
    var count = names[name] = names[name] + 1;
    if (count > 1 || opts.suffixFirst) {
      name += opts.separator + count;
    }
    return name;
  }
  nodupes.getNames = function() { return names };
  return nodupes;
};
