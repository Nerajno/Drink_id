// this is untidy as hell.

function myFunction() {
//Get the current year
  var today = new Date();
  var year = today.getFullYear();

//This is the value/ age which will make someone able to drink... else they don't get to drink.
  var remainder = 21;

//This fetches the value of that was entered/input.
  var urStuff = $("#birthYr").val();

//This produces the birth year of the person
  var ableToDrnk = year - urStuff;
  var other = year - ableToDrnk;

/*
need to put in variables for each id
var

*/


 //Esterlin- helped
 // got help again ..... 4417

 if (other >= remainder){
  document.getElementById('two');
 //console.log("hi");
}else{
 //console.log("bye");
 document.getElementById('three');
 };

//This is for testing
 console.log(other);
};
// was trying to figure this out another way
//Making progress

/*Notes/ Ideas
*onclick = take the input and minus it from today's date and if more than 21 give 1 message (yes,you can) else another message (you shall not pass) */
