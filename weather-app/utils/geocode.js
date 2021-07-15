const request=require('request')
//Now we will make all our code using function 
//In place of writing the location(in url) of place whose details are required,we write encodeuricomponent so that we can add different places as per user
//in encodeuricomponent we pass the location 
const geocode=(address,callback) =>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoidmFuc2hpa2FyYXRoaSIsImEiOiJja3ByeTg0eTAwNTFoMndvMXJqejZsOXNmIn0.iwN42E00eXE512CmWibIHQ&limit=1'
    //request takes 2 parameter 1st is the options object which provides options required and second is the callback function
    request({url,json:true},(error, {body}) =>{
    if(error){
        callback('Unable to connect to location services!',undefined)
    }else if(body.features.length===0){
        callback('Unable to find location.Try another search.', undefined)
    }
    else{
        callback(undefined,{
            latitude:body.features[0].center[1],
            longitude:body.features[0].center[0],
            location:body.features[0].place_name
        })
    }
    })
}


module.exports=geocode