//standard function declaration
// const square=function(x){
//     return x*x
// }
//using arrow function-
const square=(x) =>{
    return x*x
}
//normal object creation-
//o/p- Guest list for Birthday Party
// const event={
//     name:'Birthday Party',
//     printGuestList:function(){
//         console.log('Guest list for' + this.name)
//     }
// }
//same object with func. using arrow function..it does not
//bind its own 'this' value, so o/p-Guest list for Undefined
// const event={
//     name:'Birthday Party',
//     printGuestList: () =>{
//         console.log('Guest list for' + this.name)
//     }
// }
//There's actually an ES6 method shorthand that allows us to use a shorter, more concise syntax while

//still having access to standard function features like a 'this' binding.
//The standard function have their own this binding but Arrow functions do not bind their own this value..
//they access the this value in the context in which they are created.
 //here we want this.name to print name of event..but this standard function has its own this binding which 
//does not allow the event name to be accessed so this.name prints undefined
//       
// const events={
//     name:'Birthday Party',
//     guestList:['Neha','Vanshika','Mahi','Poonam'],
//     printGuestList() {
//         console.log('Guest list for ' + this.name)
//          this.guestList.forEach(function(guest){
//             console.log(guest+ ' is attending ' + this.name)
//         })
//     }
// }
// events.printGuestList()
const events={
    name:'Birthday Party',
    guestList:['Neha','Vanshika','Mahi','Poonam'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest+ ' is attending ' + this.name)
        })
    }
}
events.printGuestList()