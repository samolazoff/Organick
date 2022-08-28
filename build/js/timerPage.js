window.addEventListener('DOMContentLoaded',()=>{
    const deadLine='2022-12-31';
    
    function getTimeRemaining(endtime){
        const t=Date.parse(endtime) - Date.parse(new Date()),
              days=Math.floor(t/(1000*60*60*24)),
              hours=Math.floor((t-days*1000*60*60*24)/(60*60*1000)),
              minutes=Math.floor((t-days*1000*60*60*24-hours*1000*60*60)/(60*1000)),
              seconds=Math.floor((t-days*1000*60*60*24-hours*1000*60*60-minutes*60*1000)/1000);
        
        return {
            'total': t,
            'days':days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    console.log(getTimeRemaining(deadLine));

    function setClock(selector, endtime){
        const timer=document.querySelector(selector),
              days=timer.querySelector('#days'),
              hours=timer.querySelector('#hours'),
              minutes=timer.querySelector('#minutes'),
              seconds=timer.querySelector('#seconds'),
              timeInterval=setInterval(updateClock,1000);

        function updateClock(){
            const t=getTimeRemaining(endtime);
                days.innerHTML=t.days;
                hours.innerHTML=t.hours;
                minutes.innerHTML=t.minutes;
                seconds.innerHTML=t.seconds;
            
            if(t.total<=0){
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadLine);

})