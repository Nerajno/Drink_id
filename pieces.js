console.log("hi");
var myFunction = function(){
 console.log("hello");
  var today = new Date();
  var year = today.getFullYear();

//This is the value/ age which will make someone able to drink... else they don't get to drink.
  var remainder = 21;

//This fetches the value of that was entered/input.
  var urStuff = $("#birthYr").val();

//This produces the birth year of the person
  var ableToDrnk = year - urStuff;
  var other = year - ableToDrnk;

 //Esterlin- helped
 // got help again - Kenaan ..... 4417

 if (other >= remainder){
 // example = $("")	
   $('body').animate({
        scrollTop: $("#three").offset().top
    }, 2000);
 console.log("Leo");
}else{
$('body').animate({
        scrollTop: $("#two").offset().top
    }, 2000);

 };

}
$("#move").click(myFunction);
//This is for testing

/*Notes/ Ideas
*onclick = take the input and minus it from today's date and if more than 21 give 1 message (yes,you can) else another message (you shall not pass) */
