function updateClock(){
    const now=new Date();
    let hours=now.getHours();
    const minutes=now.getMinutes().toString().padStart(2,'0');
    const seconds=now.getSeconds().toString().padStart(2,'0');
    
    //Convert it 12 hours format and determine AM/PM
    const ampm=hours>=12? 'PM':'AM';
    hours= hours %12 || 12; //Convert hour "0" to "12" for 12 hour format


    //Format the time string
    const timeString=`${hours.toString().padStart(2,'0')}:${minutes}:${seconds} ${ampm}`
  
    //Update the DOM
    document.getElementById('clock').textContent=timeString;

}

//Call updateClock every second
setInterval(updateClock,1000);

//Initial call to display the time immediately on page load
updateClock();
