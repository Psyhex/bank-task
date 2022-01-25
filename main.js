var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("errorDiv").style.display = "none"; 

  } else {
    document.getElementById("prevBtn").style.display = "inline-block";
     
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
    
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  document.getElementById("errorDiv").style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, z,  valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  z = x[currentTab].getElementsByTagName("select");
  
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      document.getElementById("errorDiv").style.display = "block";
      // and set the current valid status to false
      valid = false;
    }
  }
 for (i = 0; i < z.length; i++){
   if(z[i].value == ""){
     z[i].className += " invalid";
     document.getElementById("errorDiv").style.display = "block";
     valid = false;
   }
 }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}



function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}
var slider = document.getElementById("sliderId");
var sliderText = document.getElementById("sliderText");
sliderText.value = slider.value;

slider.oninput = function(){
  sliderText.value = this.value;
  document.getElementById("firstQA").innerHTML = "Credit Limit "+sliderText.value+"Eur" +" day of payment " + document.getElementById("daySelectId").value;
}
sliderText.oninput = function(){
  sliderText.value = this.value;
  slider.value = this.value;
  document.getElementById("firstQA").innerHTML = "Credit Limit "+sliderText.value+"Eur" +" day of payment " + document.getElementById("daySelectId").value;
}
function checkSlider(){
  if(sliderText.value < 300){
    sliderText.value = 300;
    slider.value = 300;
  }
  if(sliderText.value > 3000){
    sliderText.value = 3000;
    slider.value = 3000;
  }
}

function displayRadioValue() {
  var radio = document.getElementsByName('radio');
    
  for(i = 0; i < radio.length; i++) {
      if(radio[i].checked)
      document.getElementById("fourthQA").innerHTML 
      = "Yes No Question? " + radio[i].value.toUpperCase();
      
  }
}
var cardsId = document.getElementById("cardsId");
cardsId.oninput = function(){
  document.getElementById("creditCardType").innerHTML = "Credit Card " + cardsId.value;
}
var firstQ = document.getElementById("daySelectId");
firstQ.oninput = function(){
  document.getElementById("firstQA").innerHTML = "Credit Limit "+sliderText.value+"Eur" +" day of payment " + document.getElementById("daySelectId").value;
}
var secondQname = document.getElementById("name");
var secondQsurname = document.getElementById("surname");

secondQname.oninput = function(){
  document.getElementById("secondQA").innerHTML = "Name " + document.getElementById("name").value.toUpperCase() + " " + document.getElementById("surname").value.toUpperCase();
}
secondQsurname.oninput = function(){
  document.getElementById("secondQA").innerHTML = "Name " + document.getElementById("name").value.toUpperCase() + " " + document.getElementById("surname").value.toUpperCase();
}
var salary = document.getElementById("salary");
var other = document.getElementById("other");

salary.oninput = function(){
  document.getElementById("thirdQA").innerHTML = "Salary after tax " + document.getElementById("salary").value + " other expenses  " + document.getElementById("other").value;
}
other.oninput = function(){
  document.getElementById("thirdQA").innerHTML = "Salary after tax " + document.getElementById("salary").value + " other expenses  " + document.getElementById("other").value;
}
//document.getElementById("creditCardType").innerHTML = "Credit Card " + document.getElementById("cardsId").value;
//document.getElementById("firstQA").innerHTML = "Credit Limit "+sliderText.value+"Eur" +" day of payment " + document.getElementById("daySelectId").value;
//document.getElementById("secondQA").innerHTML = "Name " + document.getElementById("name").value.toUpperCase() + " " + document.getElementById("surname").value.toUpperCase();
//document.getElementById("thirdQA").innerHTML = "Salary after tax " + document.getElementById("salary").value + " other expenses  " + document.getElementById("other").value;
displayRadioValue();

function checkBoxF(){
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("fifthQA");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}