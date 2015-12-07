var list = ["Killjoy", "Ewing", "Kramer", "Bob"];

_.filter(list, function(item) {
  return _.startsWith(item, "K");
});

// => ["Killjoy", "Kramer"]
