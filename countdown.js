const daysel = document.getElementById("days");
const hoursel = document.getElementById("hour");
const minutesel = document.getElementById("minute");
const secondsel = document.getElementById("second");

const newyear = new Date("January 01 , 2021 00:00:00") ;
function countdown(){
    let currentDate = new Date() ;
    const newYearDate = new Date(newyear) ;
    const diffinsec = ((newYearDate - currentDate)/1000) ;
    const days = Math.floor(diffinsec/(24*3600))
    const hours = Math.floor((diffinsec%(24*3600))/3600) ;
    const minutes = (Math.floor(diffinsec / 60)%60);
    const seconds = (Math.floor(diffinsec%60))
    console.log(days , hours , minutes , seconds) ;

daysel.innerHTML = formattime(days) ;
hoursel.innerHTML = formattime(hours) ;
minutesel.innerHTML = formattime(minutes) ;
secondsel.innerHTML = formattime(seconds) ;
}

function formattime(time){
    if(time<10){
    return (`0${time}`) ;
    }
    else{
        return (time) ;
    }
}
setInterval(() => {
    countdown()
}, 1000);
