let hrs = document.querySelector(".hrs");
let mins = document.querySelector(".min");
let sec = document.querySelector(".sec");
let ampm = document.querySelector(".ampm");

// function addzero(time)
// {
// return time.toSring().padStart(2,"0");
// }


function set(hrs){
   return hrs>= 12? "PM": "AM";
}
function addzero(time) {
    return time.toString().padStart(2, "0");
  }


setInterval(() =>
{
   let  d = new Date();
    let htime = d.getHours();
    let  mtime = d.getMinutes();
    let stime = d.getSeconds();

    hrs.textContent = addzero(htime);
    mins.textContent = addzero(mtime); 
    sec.textContent = addzero(stime);
    ampm.textContent = set(htime);
},1000);




