//when we create property of an object whose value comes from a variable with same name as property then we use shorthand syntax
const name='Andrew'
const userAge=27
const user={
    name,userAge,location:'Ghaziabad'
}
console.log(user)

//object destructuring
//goal of destructuring is to access individual properties and their value into individual variables
//earlair we were accessing like this const label=product.label
const product={
    label:'Red copy',
    price:3,
    stock:201,
    salePrice:undefined
}
//in destructuring we write all properties that we want to access in {} and respective variables are created
//const {label,stock}=product
//we can even access those properties that are not defined in object exp rating, in that case those variables will have undefined

//if we want to access property of object but we want to give different name to the variable than the name of the property 
//exp. we want to store label in productLabel variable-

//we can also pass a default value for a variable if the object does not have that property,exp rating=5
//default values are only used if the object does not have any value for that variable
const {label:productLabel,stock,rating=5}=product
console.log(productLabel)
console.log(stock) 
console.log(rating)
//in transaction we pass 2nd value as an object and for this product object also we need only some properties
const transaction=(type,{label,stock})=>{
    console.log(type,label,stock)
}
transaction('order',product)