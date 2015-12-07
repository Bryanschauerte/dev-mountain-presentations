var customers = require("./customers");
//
// Problem 1: Count Your Customers
//
function count(list) {
  var i = 0;
  while (list[i] !== undefined) {
    i += 1;
  }
  return i;
}
 
// count(customers)

/* Problem 2: Men vs. Women */
function getCustomersByGender(list, gender) {
  var newList = [];
  for (var i = 0; i < list.length; i++) {
    var c = list[i];
    if (c.sex == gender) {
      newList.push(c);
    }
  }
  return newList;
}

// getCustomersByGender(customers, "M");

/* Problem 3: Anonymous Women  */
function anonymize(customer, id) {
  delete customer.first_name;
  delete customer.last_name;
  customer.id = id;
  return customer;
}

function anonymizeCustomers(list) {
  for (var i = 0; i < list.length; i++) {
    anonymize(list[i], i + 1);
  }
  return list;
}
 
// anonymizeCustomers(getCustomersByGender(customers, "F"))

/* Problem 4: We Love Weapons */
function generateCategoryList(customers, preference) {
  var categories = [];
  for (var i = 0; i < customers.length; i++) {
    var p = customers[i].preferences[preference];
    if (categories.indexOf(p) == -1) {
      categories.push(p);
    }
  }
  return categories;
}

console.log("Answer: " + generateCategoryList(customers, "protection"));
 
/* Problem 5: Lead Generation */
var newCustomers = [
  {
    "FirstName": "Weston",
    "LastName": "Kutch",
    "Age": 21,
    "Choices": [
      {type: "weapon", value: "Dagger"},
      {type: "protection", value: "More daggers"}
    ]
  },
  {
    "FirstName": "Demetris",
    "LastName": "Botsford",
    "Age": 47,
    "Choices": [
      {type: "weapon", value: "Mace"},
      {type: "protection", value: "Spiked armor"}
    ]
  }
];

function selectChoiceValue(choices, type) {
  for (var i = 0; i < choices.length; i++) {
    var choice = choices[i];
    if (choice.type == type) {
      return choice.value;
    }
  }
}

function transformCustomer(alien) {
  var choices = alien["Choices"];
  return {
    first_name: alien["FirstName"],
    last_name: alien["LastName"],
    age: alien["Age"],
    preference: {
      weapon_of_choice: selectChoiceValue(choices, "weapon"),
      protection: selectChoiceValue(choices, "protection")
    }
  };
}
 
function transformCustomers(list) {
  var newList = [];
  for (var i = 0; i < list.length; i++) {
    newList.push(transformCustomer(list[i]));
  }
  return newList;
}

// Demonstrate danger of non-lexically scoped vars:
// function transformCustomers(list) {
//   var newList = [];
//   for (i = 0; i < list.length; i++) {
//     newList.push(transformCustomer(list[i]));
//   }
//   return newList;
// }

console.log("Answer: " + transformCustomers(newCustomers));
