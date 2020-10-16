console.log('hi')
const from=document.querySelector('form');
const search=document.querySelector('input')
const message1=document.querySelector('#mes1')
const message2=document.querySelector('#mes2')
from.addEventListener('submit' ,(e)=>{
  e.preventDefault();
  const location=search.value;
  mes1.textContent="Loading..........."
  fetch('/weather?address='+location).then((res)=>{
      res.json().then((data)=>{
        if(data.error){
            console.log(data.error)
            mes1.innerHTML=data.error

        }
        else{   
            console.log(data.location)
            console.log(data.forecast)

            mes1.innerHTML=data.location
            mes2.innerHTML=data.forecast

        }
      })
  })

})