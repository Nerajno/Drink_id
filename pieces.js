

var myFunction = function(event) {
  var today = new Date();
  console.log(today);
  var year = today.getFullYear();
  var remainder = 21;
  var urStuff = $("#birthYr").val();
  var ableToDrnk = year - urStuff;
  var other = year - ableToDrnk;


  // $("form").submit(myFunction());
  // if (other >= remainder) {
  //   console.log("high");
  //   $('body').animate({
  //     scrollTop: $("#three").offset().top
  //   }, 2000);
  //   // console.log("Leo");
  // } else {
  //   $('body').animate({
  //
  //     scrollTop: $("#two").offset().top
  //   }, 2000);
  //         console.log("low");
  //         console.log(other);
  // }
  // myFunction();
};
$("#move").click(myFunction);

// $("form").submit(myFunction);
// event.preventDefault();


//=> this is the code for the back to top button, found on W3Schools site.
//When the user scrools down from the top of the document, it shows the button.
window.onscroll = function() {
  scrollFunction();
};

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
topFunction();
