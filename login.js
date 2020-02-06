       
    var myInput = document.getElementById("psw");
    var confirmMyInput = document.getElementById("user");
    var low_lets = false;
    var up_lets = false;
    var nums = false;
    var input_length = false;



	// When the user starts to type something inside the password field
	myInput.onkeyup = function() {
        
        /* grep*/
        var lowerCaseLetters = /[a-z]+/g; // : Fill in the regular experssion for lowerCaseLetters
        var upperCaseLetters = /[A-Z]+/g; // : Fill in the regular experssion for upperCaseLetters
        var numbers = /[0-9]+/g; // : Fill in the regular experssion for digits
        var minLength = 8; // : minimum length

        // Validate lowercase letters
        if(myInput.value.match(lowerCaseLetters)) {

        low_lets= true;          

        } 
        // Validate capital letters        
        if(myInput.value.match(upperCaseLetters)) { 

            up_lets = true;

        } 
        // Validate numbers        
        if(myInput.value.match(numbers)) { 
            
            nums = true;
        } 

        // Validate length
        if(myInput.value.length >= minLength) {

            input_length= true;
        } 
            enableButton();
    }


function enableButton() {
      
    var button = document.getElementById('my_submit_button');
    if(input_length == true) {       
            button.disabled = false;           

            alert("thats enough keys, feel free to keep going and have this pop up on every press");
            changeColor();
            
        }        
    }    
function onClickFunction() {
    alert("You're all logged in!")
}

function changeColor(){
    document.getElementById("body").backgroundColor = "green";
}