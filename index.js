
function lowerCaseDrivers(drivers) {
  return drivers.map(d=>d.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(x=> {
    let z= x.split(" ");
    return {
      firstName : z[0],
      lastName : z[1]
    };
  })

}


// let nameToAttributes=(firstName, lastName) =>(firstName+" "+lastName);


function attributesToPhrase(drivers) {
  drivers.map(function(x) {
    return drivers.firstName" is from "drivers.hometown;
});
}

/*
//add 2
function add(x,y){
  return x+y;
}

//subtract 2
function sub(x,y){
  return x-y;
}

//multiply 2
function mult(x,y) {
  return x*y;
}

let names = ["Steph Phillips", "Bob Marley", "Anita Livingston"];

//splitstr
function splitstr(names) {
    let x= names.split(" ");
    return {
      firstName : x[0],
      lastName : x[1]
    }; 
}



//joinstr
function myFunction() {
    let choc = ["Mars", "Twix", "Bounty"];
    return choc.join();
}


//hello
function hello(name){
  return "Hello "+ name + " !";
}
*/