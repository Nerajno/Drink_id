
function checkAge(drnkEligibilty, remainder) {
  if (drnkEligibilty >= remainder) {
    $("html, body").animate({
      scrollTop: $("#three").offset().top
    }, 2000);
    console.log("drink please");
  } else if (drnkEligibilty < remainder) {
    $("html, body").animate({
      scrollTop: $("#two").offset().top
    }, 2000);
    console.log("no");
  } else {
    console.log("this is broken");
  }
}


let myFunction = function() {
 
  let today = new Date();  // Current date
  //Current Year
  let year = today.getFullYear();
  // The age you must be older than to drink
  let remainder = 21;
  //Your age as an input value
  let age = $("#currentAge").val();
  //This returned value tells which year you were born
  let yourBrthYr = year - age;
  //This is the difference between year and yourBrthYr..... it should be => remainder
  let drnkEligibilty = year - yourBrthYr;
  // console.log(drnkEligibilty);
  
  checkAge(drnkEligibilty, remainder);
};


//$("#move").click(myFunction);

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
