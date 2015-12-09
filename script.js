function count( arr ){
  var count = 0;
  arr.forEach(function(){
    count+=1;
  });
  return count;
}

function getCustomersByGender( customers, gender ){
  list = [];
  customers.forEach(function( item ){
    if(item.sex == gender) {
      list.push(item);
    }
  })
return list;
};

function anonymizeCustomers( list ){
   list.map(function(item, index){
     delete item.first_name;
     delete item.last_name;
    item.id = index + 1;
  })
return list;
}

function generateCategoryList( customers, preference ){

  var list = customers.map( function( item ){
    return item.preferences[preference.toLowerCase()]
  })
return list;
}


function transformCustomers( list ){

  var newList =[];
  list.map(function(item){
    newList.push({
      last_name: item["LastName"],
      sex: "Unknown",
      eye_color: "Unknown",
      height: "Unknown",
      first_name: item["FirstName"],
      last_name: item["LastName"],
      age: item["Age"],
      preferences: {
        weapon_of_choice: item["Choices"][0]["value"],
        epoch: "Unknown",
        protection: item["Choices"][1]["value"],
        personal_description: "Unknown"
      }
        });

  })
  return newList;
}
