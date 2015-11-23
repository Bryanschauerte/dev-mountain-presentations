# Functional List Comprehension in JavaScript

*Doing More with Less*

## Introduction

This presentation and pre-course work will introduce you to the basics of _list comprehension_, a set of tools and patterns for filtering, transforming, and manipulating _collections_ (objects and arrays).

As a career programmer, prepare yourself to spend... a lot – a lot! – of time slinging objects and arrays around. Learning to manipulate collections will boost your productivity in ways few other habits can. As development fads come and go in the software world, one thing never changes: the need to move data around. That's where this presentation comes in.

To prepare, you'll be opening your very own [bidness](http://www.urbandictionary.com/define.php?term=Bidness): *an online dating service*. Don't worry, a customer list is provided! Follow the exercises below, taking each one in order.

### First, the rules:

#### Plain Ole JavaScript Only – No Libraries!

JavaScript's ES5 (ECMAScript 5.x) specification, also known as "plain ole JavaScript", does not natively support "list comprehension". In other words, to effectively manipulate lists of data, you have to augment the langauge with a library (or upgrade to ES6) to access the most powerful tools. Fortunately, those libraries exist; they're lightweight (small footprint in KBs), loosely coupled (are used in a wide variety of settings), and most of all, powerful (can solve lots of problems).

That's nice an' all... But, before learning the good stuff – *which we will do in class* – it's helpful to _first gain an appreciation of real-world problems related to manipulating lists_. So, just to start, we'll be playing left-handed.

#### Don't Get Stuck

The exercises below should be fun. Do your best and be creative, but don't stay up all night counting dating candidates – we'll talk about each problem in details in class, demonstrating short, concise solutions.

#### REPL

For these problems, you might consider finding a JavaScript [REPL](https://nodejs.org/api/repl.html) to practice. Remember, don't get lost in setting up tools – you'll waste time – focus on the problems and potential solutions. A simple REPL for JavaScript is your Google Developer Tools (the Console) in Chrome (Cmd-Opt-I on a Mac). You can also just create a an HTML file, link your JavaScript to it, and print your answers to console, via `console.log`. Or not, whatever...

#### Share

If you have the courage, please post your solutions to a public forum like [Github](http://github.com) where can review them in class. No pressure. Everyone's answers will be different, and it's helpful to contrast the trade-offs of different solutions.

## LARPLove.com

Here we go: You want to start a business, but of course – like most people – you don't know what to make! Driving home from work, however, you notice a friendly-looking group of young people [LARPing](https://en.wikipedia.org/wiki/Live_action_role-playing_game) in the city park. Cool! Now, there's a group who could use a website: online dating for LARPs!

Now that your website's all set up, larplove.com, and having distributed flyers in to nearby parks, you've acquired your first list of customers:

[Click here to view the customer list.](./larplove/customers.js)
 
Kind of a slow start. But it's something!

### Problem 1: Count Your Customers

Throughout the lifecycle of your business, it's important to track your growth: to count customers. Working with lists, you'll almost always be dealing with the `Array` object in JavaScript. Fortunately, there's the `Array.length` property, readily available. But, you're feeling adventurous: Can you count the number of items in an `Array` without a counting function?

*Task:* Create a function, `count`, that counts the length of the `customers` var using a standard loop (e.g. without using `size()` or `length`).

Keep your answer as concise as possible.

### Problem 2: Men vs. Women

Okay, it is indeed possible to count without `length`. Going forward, feel free to use your new `count` function. Or, if you couldn't complete it, just use `length`.

Now, being the owner of a dating service, you've heard that men sign up more than women. You might want to check that. In fact, it might even be nice to see two lists, one for men, and one for women.

*Task:* Create a function `getCustomersByGender`, with two arguments, `(customers, gender)`. Pass it your customer list and a value for the sex, "M" for men and "F" for women. Calling the function with a gender of "M" should return a list of all the men.

### Problem 3: Anonymous Women

An old college buddy called. He's now a graduate student at the university completing his disertation in psychology. He heard about your dating service and wonders if he can buy some data, specifically data on the women on your website. You agree, on one condition – you will withhold first and last names. Fine, he says.

*Task:* Use the `getCustomersByGender` function to first pull a list of women. Then, write a new function, `anonymizeCustomers`, receiving one argument, `customers`, the results of the `getCustomersByGender` function. The `anonymizeCustomers` function should loop through each item in `customers`, removing the `first_name` and `last_name` properties. The return value from the function will be an "anyonymized" list of data.

You delivered the goods, but wait... you forgot, without names your friend will have no way to identify each record individually. You better provide a unique ID in place of each name.

*Task:* Edit the `anonymizeCustomers` function so that it attaches a unique identifier to each item called `id`. Let the id be sequential, beginning with the number `1`, `2`, and so on (well, 1 and 2 is where it will stop).

### Problem 4: We Love Weapons

LARPers identify with their characters, their super powers, and... their weapons. In the weeks following your website's launch, your customers' most frequently requested feature addition is the ability to sort potential mates by preferences. Rather than guessing at the categories, your program should auto-generate a list of weapons from the customer list.

*Task:* Create a function, `generateCategoryList`, with two arguments, `customers` and `preference`. The first argument receives your customer list, the second receives a field name representing one of the potential customer preferences (e.g. `weapon_of_choice`, `epoch`, etc.). Your function should return a _distinct_ list of options given the preference type. For example, calling `generateCategoryList(customers, "Protection")`, should return `["Round Shield", "Potions", "Pipe Wrench"]`.

### Problem 5: Lead Generation

Recently you've been in discussions with a competitor LARP dating service. New customer signups have been slow – for both of you – so, you've come to an unusual agreement: you want to share new leads. Given the limitations of your programs, the two of you decide to forward each other new leads once a week in batches.

Today, you received your first batch of leads from your competitor-friend:

```javascript
var newCustomers = [
  {
    "FirstName": "Weston",
    "LastName": "Kutch",
    Age: 21,
    Choices: [
      {type: "weapon", "Dagger"},
      {type: "protection", "More daggers"}
    ]
  },
  {
    "FirstName": "Demetris",
    "LastName": "Botsford",
    Age: 47,
    Choices: [
      {type: "weapon", "Mace"},
      {type: "protection", "Spiked armor"}
    ]
  }
];
```

Unsurprisingly, she collects similiar data in a different format.

*Task:* Create a function, `transformCustomers`, accepting one argument, `list`, that takes a collection like `newCustomers` and transforms the data into a format compatible with your existing data structure.

## Before Class...

If you failed to complete each problem, don't worry! The point of the exercise is to get acquainted with some of the challenges accompanying working with sets of data, small or large. In class, we'll review the problems again, examining some of your solutions, and then presenting code using list comprehensions that are both shorter and simpler to reason about.

See you then!
