const request=require('request')

const geoCode=(address, callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2h3ZXRoYTEyMyIsImEiOiJja2ZpZjBlb2cwbHR6MnVwODI0bWQ2N2piIn0.kqBgY0bK2MyCwfb2eirhUA'
    request({url , json:true },(error, {body})=>{
    //    console.log(response.body);

             if(error){
                 callback('unable to connect', undefined)
             }
             else if(body.features.length===0){
                 callback('unable to connect the server', undefined)
             }
             else{
                 callback(undefined,{
                    latitude:body.features[0].center[0],
                    longitude:body.features[0].center[1],
                    location:body.features[0].place_name
                 })
                // console.log(response.body.features[0].place_name)
                // console.log(response.body.features[0].center[0]);
                // console.log(response.body.features[0].center[1]);
             }
               
    })
}
module.exports=geoCode
