 let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
let month= ["January","February","March","April","May","June","July","August","September","October","November","December"];

set();
function set(){
    let zero = "0";
   

    let d = new Date();
    let hr = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();

   
   
    
    

    if(secs < 10){
        secs = "0"  + secs
    }
    if(mins < 10){
        mins = "0"  + mins
    }
    


    
    document.getElementById("day").innerText=days[d.getDay()];
    document.getElementById("month").innerText=month[d.getMonth()];
    document.getElementById("year").innerText=d.getFullYear();
    document.getElementById("date").innerText=d.getDate();
    document.getElementById("hours").innerText= hr;
    document.getElementById("minutes").innerText= mins;
    document.getElementById("seconds").innerText= secs;
   

    setInterval(set,1000)
    
}