document.querySelector('.clock');

function time()
{
    var date =new Date();
    document.querySelector('.clock').innerHTML=date.toLocaleTimeString();
}

setInterval(time,1000)

// document.querySelector('.color');

// function color(){
//     document.querySelector('.color').innerHTML=
// }


// document.querySelector('.clock');

// function time(){
//     var date =new date();
//     document.querySelector('.clock').innerHTML=date.toLocaleTimeString();
// }

// setInterval(time,1000)