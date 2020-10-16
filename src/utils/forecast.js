const request=require('request');

const forecast=(latitude,longitude,callback)=>{
    const url='https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&exclude=hourly,daily&appid=4206a43c4bba07c93b19f447c8130868' ;

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('cant find the weather server',undefined)
        }
        else if(body.message){
            callback('unable to connect weather server',undefined)
        }
        else{
            callback(undefined, `It is currently ${body.current.temp} Degree out . There is ${body.current.clouds}% chance of raining and ${body.current.weather[0].description}`)
        }

    })
}




module.exports=forecast