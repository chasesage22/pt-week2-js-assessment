//create an array called family which has your family members in order of their age
var family = ["chase", "clark", "madi", "lauren", "hannah"];




//Remove the oldest member of your family

family.shift();


//Add a new family member as the youngest member

family.push("steveo");


//LOOP over your array to see if you have a family member named 'Tyler'
// If you do, alert ('I have a Tyler'), if you do not, alert ('I have no Tylers')

if (family === 'Tyler'){
	alert('I have a Tyler');
}


// Remove the second oldest member of your family





//Write a function called 'reverse' that takes in a string and returns that string in reverse order

var reverse = function(str){
	return str.split('').reverse().join('');
}

reverse("stevo");