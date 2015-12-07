var list = [1, 2, 3];

_.reduce(list, function(total, number) {
  return total + number;
}, 0);

// => 6
