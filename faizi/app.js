// QUSTION NO 1

// var itemarray = [
//     {name : "juice" , price : "50" , quantity : "3"},
//     {name : "cookie" , price : "30" , quantity : "9"},
//     {name : "shirt" , price : "880" , quantity : "1"},
//     {name : "pen" , price : "100" , quantity : "2"},
// ] 
// var totalAmount;
// for(i = 0 ; i<itemarray.length ; i++){
//      totalAmount =  itemarray[i].price *  itemarray[i].quantity

//     console.log("product of " + itemarray[i].name + " ; "+  totalAmount)

// }


// QUSTION NO 2

// var obj ={

//     name:"faizi",
//     email:"ddfg@gmial.com",
//     password:"dssvd",
//     age:18,
//     gender:"male",
//     city:"karachi",
//     country:"pakistan"
//     };

//     if(!obj['age'] === false){
//         console.log("age is defind")
//     }else{
//         console.log("age is undefind")
//     }

//     if(!obj['country'] === false){
//         console.log("country is defind")
//     }else{
//         console.log("country is undefind")
//     }  

//      if(!obj['firstName'] === false){
//         console.log("firstName is defind")
//     }else{
//         console.log("firstName is undefind")
//     }

//     if(!obj['lastName'] === false){
//         console.log("lastName is defind")
//     }else{
//         console.log("lastName is undefind")
//     }  

// QUSTION NO 3

// function Teacher(name , age , qualificatrion , batch){
//     this.name=name
//     this.age=age
//     this.qualificatrion=qualificatrion
//     this.batch=batch
// }   

// var person1 =new Teacher ("Ishaq bhojani" , 25 , "BSCS" , "07")
// var person2 =new Teacher ("Arshad" , 30 , "BSCS" , "10")
// var person3 =new Teacher ("Hamza" , 28 , "BSCS" , "06")

// console.log(person1)
// console.log(person2)
// console.log(person3)


// QUSTION NO 4


function Population(name,gender,address,education,profession){

    this.name=name;
    this.gender=gender;
    this.address=address;
    this.education=education;
    this.profession=profession;
    
    
    }
    
    
    function faizan(){
    
    var nam= document.getElementById('name').value;
    
    var gen= document.getElementById('gen').value;
    
    var add= document.getElementById('address').value;
    
    var edu= document.getElementById('education').value;
    
    var pro= document.getElementById('profession').value;
    
    var obj = new Population(nam,gen,add,edu,pro);
    
    document.write(obj.name + ' ' + obj.gender + ' ' + obj.address + ' ' + obj.education + ' ' + obj.profession);
    
    }




