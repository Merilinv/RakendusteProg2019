console.log("Hello World!");

//task1
 function simpleArraySum (xs) {
  let sum = 0;
  
  xs.forEach((i)=>{
    sum = sum + i;

  })
  return sum;
}
//task2
function reverseString (word) {
  let split = word.split("");
  let reverse = split.reverse();
  let join = reverse.join("");

  return join;
} 
//task3

// utility function, use it
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function generateRandomString(){
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  let result = '';
   for(var i=0; i<5 ;i++) {
    result += characters.charAt(getRandomIntInclusive(0, charactersLength));
   }
  return result;
}

function generateRandomItemList () {
    let items = [];
    for(var i=0; i<3; i++){
      item = {
        name: 'toode_' + generateRandomString(),
        cost: getRandomIntInclusive(0,1000),
      };
      items.push(item);
    }

console.log(items);

      /*
      item = {
        for(i=0, i<5 , i++) {
          name += characters.charAt(getRandomIntInclusive(0, charactersLength));
         }
        cost = getRandomIntInclusive(0,1000);
        items.push(item);
      };
    }
    

    /*for(var i=0; i<n, i++){
         for ( var i = 0; i < 5; i++ ) {
            var name += characters.charAt(getRandomIntInclusive(0, charactersLength));
        }
        var cost = getRandomIntInclusive(0, 100);
    }
    

    return items;*/

}
//task4
function findMostExpensiveItem (items){

  return items.sort((a,b) => b.cost - a.cost)[0]
  /*items.sort(a, b); 
  console.log(items);
  return items[items.length-1]; */
  /*var largest = -1;
  for(var i=0; i<items.length; i++){
    if(largest < items[i]){
      largest = items[i];
    }
  }
  return largest;*/
}
//task5
function findCheapestItem (items){

}


//Test
let a = simpleArraySum([1, 3, 101]);
console.log(a); 
let b = reverseString("Hallo kosmos!");
console.log(b);
let c = generateRandomItemList();
let d = findMostExpensiveItem([72,5,6,50000, 0, -2, 0374])
console.log(d);

