const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const address=process.argv[2]
if(!address){
    console.log("Please provide an address!")
}else{
    geocode(address,(error,{latitude,longitude,location}={}) =>{
        if(error){
            return console.log(error)
        }
        
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}
//in the geocode function below-(error,data) is callback function
//callback function requires 2 arguments error and data




//const url='http://api.weatherstack.com/current?access_key=87d33fbd4fc195dc8a97de0b7a68a77a&query=37.8267,-122.4233&units=f'
//In the url- access_key is 1st query,lattitudes and longitudes are 2nd query and 3rd query is added to change the unit in which we want to get temp.
//the default the unit is celsius but we would change it to f(&units=f)
// request({url: url ,json:true},(error,response) => {
// if(error){
//     //if internet is not connected or any other error-
//     console.log('Unable to connect to weather service!')
// }
// else if(response.body.error){
//     console.log('Unable to find the location!')
// }
// else{
//     console.log(response.body.current.weather_descriptions[0] +' It is currently '+response.body.current.temperature +' degrees out here.But it feels like '+response.body.current.feelslike +' degrees' )
// }    
//Partly cloudy It is currently 59 degrees out here.But it feels like 57 degrees
//})
//we convert an address into a latitude and longitude pair

//const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmFuc2hpa2FyYXRoaSIsImEiOiJja3ByeTg0eTAwNTFoMndvMXJqejZsOXNmIn0.iwN42E00eXE512CmWibIHQ&limit=1'

//we print latitude and longitude

// request({url:geocodeURL,json:true},(error,response) =>{
//     if(error){
//         console.log('Unable to connect to location services!')
//     }
//     else if(response.body.features.length===0){
//         console.log('Unable to find location. Try another search.')
//     }
//     else{
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude,longitude)
//     } 
// })