const express=require('express')
const path=require('path')
//for using partials-that help in code reusability, we require hbs
const hbs=require('hbs')
const app=express()
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
//here we are linking our static 
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')
// to set up handlebars or hbs which is a template engine to render dynamic documents,
//hbs is nothing more than html with a couple of nice features for injecting dynamic values
app.set('view engine','hbs')
//when we set up hbs we could only save all hbs files in a sub directiry with the name views
//to customise the name we do the following=
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))
//our base route is app.com
//to set our server to send a response when someone tries to get something at a specific route
//this weather route sends back json object
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide an address!'
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            //we use destructuring to send back error
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address:req.query.address
            })
        })
    })
})
//we set up route for hbs file 
app.get('',(req,res)=>{
    //here instead of send we use render bcoz render allows us to access one of our views
    //and that is where our hbs file is located 
    //inside render we have to provide the name of the particular view that we wanna use
    //the 2nd value of render is the object that contains all the value that we want in our view
    res.render('index',{
        title:'Weather ',
        name:'Vanshika Rathi'
    })////if we want to inject a value in hbs file we use 2 curly braces
    //the name index must match with the hbs file named index.hbs
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Vanshika Rathi'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'This is some helpful text',
        name:'Vanshika Rathi',
        title:'Help'
    })
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Vanshika Rathi',
        errorMessage:'Help article not found'
    })
})
//this last app.get method handles all the improper routes that we havent set up..this always comes at last
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Vanshika Rathi',
        errorMessage:'Page not Found'
    })
})


//to start the server we use a function listen it takes 2 arguments port number 
//and 2nd argument is optional that is a function that runs when the server is up and running
app.listen(3000,()=> {
    console.log('Server is up and running on port 3000.')
})
//to stop the web server we do ctrl+C
