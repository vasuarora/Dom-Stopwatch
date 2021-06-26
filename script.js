 setInterval(function(){
    let today=new Date();

    let hrs=today.getHours();                 //current hour
    let mins=today.getMinutes();              //current minute
    let secs=today.getSeconds();             //current second
    let session="AM";

    let dd=today.getDate();                  //current date
    let mm=today.getMonth()+1;              //current minute
    let yyyy=today.getFullYear();           //current year

    if(hrs==0){
        hrs=12;                           
    }

    else if(hrs>12){                        //to convert 24hrs format to 12hrs
        hrs=hrs-12;
        session="PM";
    }

    if(hrs<10){                          
        hrs="0"+hrs;
    }

    if(mins<10){
        mins="0"+mins;
    }

    if(secs<10){
        secs="0"+secs;
    }

    if(dd<10){
        dd="0"+dd;
    }

    if(mm<10){
        mm="0"+mm;
    }    


    let date=dd+"-"+mm+"-"+yyyy;
    let time=hrs+":"+mins+":"+secs+" "+session;

    document.querySelector(".date").innerText=date;               //appending the current date in html
    document.querySelector(".clock").innerText=time;              //appending the current time in html
},1000)

let mins=0;
let seconds=0;
let millisec=0;

let start_btn=document.querySelector("#start");
let stop_btn=document.querySelector("#stop");
let reset_btn=document.querySelector("#reset");

let isStop = false;
start_btn.addEventListener("click",function(){
    isStop = false;
    let id=setInterval(function(){
        millisec++;

        if(millisec>99){                         //if millisecond is > 99 assign it 0 and increment second by 1
            seconds++;
            millisec=0;
        }

        else if(seconds>59){                    //if seconds is > 59 assign it 0 and increment minute by 1
            seconds=0;
            mins++;
        }
        
        else if(isStop){
            return clearInterval(id);
        }
        document.querySelector("#mins").innerText=mins<=9?"0"+mins:mins;                  
        document.querySelector("#ms").innerText=millisec<=9?"0"+millisec:millisec;
        document.querySelector("#seconds").innerText=seconds<=9?"0"+seconds:seconds;
    },10)
})

stop_btn.addEventListener("click",function(){                    //function to stop
    isStop = true;
})

reset_btn.addEventListener("click",function(){                    //function to reset the stopwatch
    isStop=true;
    mins=0;
    seconds=0;
    millisec=0;
    document.querySelector("#mins").innerText="0"+mins;
    document.querySelector("#ms").innerText=millisec="0"+millisec;
    document.querySelector("#seconds").innerText="0"+seconds;
})
