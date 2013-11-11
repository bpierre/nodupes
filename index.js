const OPTIONS = {
  names: {},
  suffixFirst: false,
  separator: '-'
};

module.exports = function(opts) {
  var names = {};
  if (!opts) opts = {};
  for (var i in OPTIONS) {
    if (opts[i] === undefined) opts[i] = OPTIONS[i];
  }
  return function nodupes(name) {
    if (!names[name]) names[name] = 0;
    var count = names[name] = names[name] + 1;
    if (count > 1 || opts.suffixFirst) {
      name += opts.separator + count;
    }
    return name;
  };
};
