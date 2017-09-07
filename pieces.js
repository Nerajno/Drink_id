var myFunction = function(event) {
  event.preventDefault();
  var today = new Date();
  var year = today.getFullYear();

  //This is the value/ age which will make someone able to drink... else they don't get to drink.
  var remainder = 21;

  //This fetches the value of that was entered/input.
  var urStuff = $("#birthYr").val();

  //This produces the birth year of the person
  var ableToDrnk = year - urStuff;
  var other = year - ableToDrnk;

  /*=> this if else statement takes their information and scroll to the other sections of the page based  on the id of the page sections*/
  //Esterlin- helped and  got help again - Kenaan ..... 4417

  if (other >= remainder) {
    $('body').animate({
      scrollTop: $("#three").offset().top
    }, 2000);
    console.log("Leo");
  } else {
    $('body').animate({
      scrollTop: $("#two").offset().top
    }, 2000);

  };
}
//=> Running or rather calling the function.
$("form").submit(myFunction);


//=> this is the code for the back to top button, found on W3Schools site.
//When the user scrools down from the top of the document, it shows the button.
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}
