var _ = require("./underscore");
var customers = require("./customers");
 
//
// Problem 1: Count Your Customers */
// 
function _count(list) {
  return _.reduce(list, function(total) {
    return total + 1;
  });
}

// _count([1, 2, 3])
//  
// Advantages:
//  
// 1. No scoped variables.
// 2. No variable tracking.
// 3. No conditionals.
// 4. Shorter (meh, a little bit)
// 
// Disadvantages:
//
// `reduce` is at first a difficult concept to grasp.

//
// Problem 2a: Men vs. Women
//
function _getCustomersByGender(list, gender) {
  return _.filter(list, function(customer) {
    return customer.sex == gender;
  });
}

// _getCustomersByGender(customers, "M")
//
// Advantages
//
// 1. Same as #1
// 2. Much shorter, far less going on.
// 3. No need to balance two lists.

// Disadvantages

function benchmarkFilter() {
  console.time("without-underscore");
  for (var i = 0; i < 100000; i++) {
    getCustomersByGender(customers, "M");
  }
  console.timeEnd("without-underscore");
  console.time("with-underscore");
  for (var i = 0; i < 100000; i++) {
    _getCustomersByGender(customers, "M");
  }
  console.timeEnd("with-underscore");
}

//
// Problem 2b: Men vs. Women
//
function _getCustomersByGenderB(list, gender) {
  return _.where(list, {sex: gender});
}
 
// _getCustomersByGenderB(customers, "M")
//
// Advantages
//
// 1. Duh

//
// Problem 3: Anonymize Customers
//
function _anonymizeCustomer(customer, id) {
  return _.omit(_.extend(customer, {id: id}), ["first_name", "last_name"]);
}

function _anonymizeCustomers(list) {
  return _.map(list, function(customer, i) {
    return _anonymizeCustomer(customer, i + 1);
  });
}

// _anonymizeCustomers(_getCustomersByGender(customers, "F"))

//
// Problem 4: We Love Weapons
//
function _generateCategoryList(list, preference) {
  return _.uniq(_.map(list, function(item) {
    return item.preferences[preference];
  }));
}

// _generateCategoryList(customers, "protection")

//
// Problem 5: Lead Generation
//
function _transformCustomers(list) {
  // Write together
}
