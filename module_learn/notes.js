const fs= require('fs')
const chalk=require('chalk')
const parse  = require('path')


const addNote=(title,body)=>{
    const notes=loadNotes()
    //we have entered a feature that duplicate titles are not taken 
    //the function below uses filter function inside which it checks if our current title matches any previous title 
    //if it returns true..then duplicatenotes array is created otherwise not created
    //filter function craetes an array with all elements that pass a test
    //but we dont need to traverse the rest of the array if even 1 duplicate title is found so we use  find() function which stops if a duplicate is found
    //const duplicateNotes=notes.filter((note) => note.title===title)
    const duplicateNote=notes.find((note) =>note.title===title)
    debugger
    //if duplicateNote is empty that is it does not get any duplicate then we add new note
    if (!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.blue.inverse("New note added!"))
    }
    else{
        console.log(chalk.blueBright.inverse("Note title taken!"))
    }
    
}

const removeNote=(title) =>{
    const notes=loadNotes()
    const notesToKeep=notes.filter((note) =>
         note.title!==title
    )
    
    
    if(notes.length>notesToKeep.length){
        
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
    }
    else{
    console.log(chalk.red.inverse("No note found!"))
    }
}

const saveNotes=(notes) => {
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}




//we have to load notes many times for exp. in case of add and delete
//so loadNotes is created as a reusable functon

const loadNotes=() =>{
    //we write our code in try block bcoz if there is no file created yet then we have to handle that separately
    try{
        const dataBuffer=fs.readFileSync('notes.json') 
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
        //we return an empty array which can add first item to that array and later be 
    }
}

const listNotes=() =>{
    const notes=loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach((note) =>{
        console.log(note.title)
    
    })
}

const readNote=(title) =>{
    const notes=loadNotes()
    const note =notes.find((note) =>note.title===title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('Note not found!'))
    }


}

//we have to export more than one thing so we create an 
//object and we define our funtions as its properties
module.exports = {
    //left ones are object and right ones are function names
    
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote

}