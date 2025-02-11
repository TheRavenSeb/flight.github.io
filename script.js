// for use in index.html 

// get info from the form

function getInfo(){
   const session = document.getElementById("session").value;
   const callsign = document.getElementById("callsign").value;
   const aircraft = document.getElementById("aircraft-type").value;
   const departure = document.getElementById("departure").value;
   const arrival = document.getElementById("destination").value;
   const route = document.getElementById("route").value;
   const speed = document.getElementById("speed").value;
   const altitude = document.getElementById("altitude").value;
   const tramsferFrequency = document.getElementById("transfer-freq").value;

   // send info to the server 
   sendInfo(session, callsign, aircraft, departure, arrival, route, speed, altitude, tramsferFrequency);

   
}

// send info to the server
function sendInfo(session, callsign, aircraft, departure, arrival, route, speed, altitude, tramsferFrequency){
   
  
}