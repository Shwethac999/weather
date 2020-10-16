

const path=require('path');
const express=require('express');
const app=express();

// to connect to heroku
const port=process.env.PORT || 3000

//to use partial files
const hbs=require('hbs');
const partialPath=path.join(__dirname,'../templates/partial')
hbs.registerPartials(partialPath);

// to make css js and images to work
const publicpath=path.join(__dirname,'../public')
app.use(express.static(publicpath))

// to use dynamic hbs
const viewpath=path.join(__dirname,'../templates/views')

app.set('view engine' , 'hbs')
app.set('views',viewpath)
app.get('',(req,res)=>{
     res.render('index',{
         title:'Weather app',
         name:'shwetha'
     })
 })

 const geocode=require('./utils/geocode');
 const forecast=require('./utils/forecast');
 app.get('/weather',(req,res)=>{
     if(!req.query.address){
         res.send({
             error:'please provide an address'
         })
     }
     geocode(req.query.address, (error, {latitude,longitude,location})=>{
          if(error){
              return res.send({error})
          }rs
          
               
               forecast(latitude,longitude,(error, forecastData)=>{
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





 app.get('/about', (req,res)=>{
     res.render('about', {
         title:'about app',
         name:'Shwetha'
     })
 })
 
 
 app.get('/help', (req,res)=>{
    res.render('help', {
        title:'about app',
        name:'Shwetha'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'shwetha',
        error:'page error'
    })
})
 
app.listen(port,()=>{
     console.log('server is up on port '+ port );
})








/*
to run static html
const publicpath=path.join(__dirname,'../public')
app.use(express.static(publicpath))
console.log(__dirname)*/