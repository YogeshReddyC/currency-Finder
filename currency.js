let input=document.querySelector("#con")
let submit=document.querySelector("#submit")
let value=document.querySelector('#value')

submit.addEventListener('click',function(e){
    e.preventDefault()
    
    if(input.value===''){
        alert('you should enter a value')
    }
    else{
        fun(input.value)
    }
})
async function fun(val){
    let response=await fetch('https://restcountries.com/v3.1/name/'+val)
    let res = await response.json()
    //console.log(Object.values(res[0].currencies)[0].name);
    value.innerHTML=Object.values(res[0].currencies)[0].name+' '+Object.values(res[0].currencies)[0].symbol
    
}