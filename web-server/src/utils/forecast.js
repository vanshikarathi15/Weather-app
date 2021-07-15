const request=require('request')
const forecast=(latitude,longitude,callback) =>{
    const url='http://api.weatherstack.com/current?access_key=87d33fbd4fc195dc8a97de0b7a68a77a&query='+ latitude +',' +longitude+'&units=f'
    request({url ,json:true},(error,{body}) => {
        if(error){
            callback('Unable to connect to weather services!',undefined)
        }
        else if(body.error){
            callback('Unable to find the location',undefined)
        }
        else{
            callback(undefined,body.current.weather_descriptions[0] +' It is currently '+body.current.temperature +' degrees out here.But it feels like '+body.current.feelslike +' degrees' )
        }
    })
}
module.exports=forecast