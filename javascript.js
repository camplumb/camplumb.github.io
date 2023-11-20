// this code creates a randomly generated password for a specified length between 8-20 with a gaurented specail,upper, and lower charecter and a number.

document.getElementById("run").onclick = function(){
    do_things();
   // Starts the function after a press of the button
   }
   function do_things() {
     const word = [];
     // array to store/ add randomly generated charecters too
     let a;
     let result;
     let gen;
     let num = parseFloat(document.getElementById("leng").value);
     if ((num == "") || (num<8) || (num>20) ||(Number.isNaN(num))){
      console.log("your password needs to be between 8 and 20 digits");
   // checks if password length is withen parameters
     }
     else{
       let up = Math.floor(Math.random()*25)+65;
       let spec = Math.floor(Math.random()*14)+33;
       let low = Math.floor(Math.random()*25)+97;
       let number = Math.floor(Math.random()*10)+48;
       let upperchar = String.fromCharCode(up);
       let specchar = String.fromCharCode(spec);
       let lowchar = String.fromCharCode(low);
       let numberchar = String.fromCharCode(number);
   // this code gnerates 4 random numbers within the specific parameters of each requriment upper,lower,specail,number. it then takes this number and turns it into a charecter using the ascii index.
       
       for(let i = 4;i<num;i++){
   //   loops for the length of the length assiagned -4 due to the 4 randomly generated charecters
        a = Math.floor(Math.random()*89)+33;
   //   generates a random number within the scope of all numbers,letters, and certian symbols
        result = String.fromCharCode(a);
   //   turns number into a charecter using ascii index
        word.unshift(result);
   // puts letter into an array for storage
   
        }//ends loop
        gen = Math.floor(Math.random()*(num-5));
        word.splice(gen,0, upperchar);
        gen = Math.floor(Math.random()*(num-4));
        word.splice(gen,0, specchar);
        gen = Math.floor(Math.random()*(num-3));
        word.splice(gen,0, lowchar);
        gen = Math.floor(Math.random()*(num-2));
        word.splice(gen,0, numberchar);
   //  this code randomly generates  number between 0 and passowrd length -5 and then using the splice method adds one of the required charecters into the array, this is then repeated 3 more times
       
        password = word.join("");
   // turns array into string
   
        console.log(password);
   //  outputs password
        word.splice(0,num);
   //  resets array
     }// ends else
   } // ends function
   