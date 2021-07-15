const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')

yargs.version('1.1.0')

//create a add command
//whenever user inputs add the following part executes
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        //builder is used to specify all options that add command takes
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Details of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
        //in the handler part we have to pass a function or create a function here itself
        //we pass argv which means the input in this function to access different parts of this input
        // console.log('Title:'+argv.title)
        // console.log('Body:'+argv.body)
        //addNote function is defined in notes.js and used here
        
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})
yargs.command({
    command:'list',
    describe:'List your notes',
    handler() {
        notes.listNotes()
    }
})
yargs.command(
    {
        command:'read',
        describe:'Read a note',
        builder:{
            title:{
                describe:'Note title',
                demandOption:true,
                type:'string'
            }
        },
        handler(argv){
            notes.readNote(argv.title)
            
        }
    }
)
yargs.parse()
//yargs.parse is important to run all the commands that we have added
// console.log(yargs.argv)