const fs=require('fs')
const { parse } = require('path/posix')
//we have creted a book variable whose value is a object and object has 2 properties
const book={
    title:'Zero to one',
    author:'Peter theil'
}
//Stringify is a JavaScript method that takes in an object or an array or any value at matter,
//and it returns the Jason String representation.
const a=JSON.stringify(book)
//since a is a string a.title will not print the title, we get undefined
console.log(a)
console.log(a.title)

//we also have access to Jason.parse, which
//takes in the JSON string and gives us back the object.

const parsedData=JSON.parse(a)
console.log(parsedData)

//fs.writeFileSync('1-json.json',a)
//we read the file
//node.js readfilesync method reads the file in its own way by converting them into binary data ,printing the readfilesync thus gives us buffer data and not our file content in string format. so we use toString method to convert buffer data to string and then parse it to access object's properties

const dataBuffer=fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString()
const data=JSON.parse(dataJSON)
console.log(data.title)





