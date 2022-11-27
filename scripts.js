// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const flightStatus=document.getElementById("flightStatus");
    const backgroundShuttle=document.getElementById("shuttleBackground");
    const spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
    const upshuttle=document.getElementById("up");
    const downshuttle=document.getElementById("down");
    const leftshuttle=document.getElementById("left");
    const rightshuttle=document.getElementById("right");
    const rocket =document.getElementById("rocket")
    let posX=0;
    let posY=0;
    let altitude=0;

    takeoffButton.addEventListener("click", function(event){
        let liftoffConfirm = window.confirm("Shuttle is ready for takeoff.")
        if (liftoffConfirm){
            flightStatus.innerHTML = "Shuttle in flight."
            backgroundShuttle.style.backgroundColor="blue";
            spaceShuttleHeight.innerHTML="10000";
        }
    });
    landingButton.addEventListener("click", function(event){
        let liftoffConfirm = window.confirm("The shuttle is landing. Landing gear engaged.")
        if (liftoffConfirm){
            flightStatus.innerHTML = "The Shuttle has landed."
            backgroundShuttle.style.backgroundColor="green";
            spaceShuttleHeight.innerHTML="0";
            rocket.margin
        }
    });
    abortButton.addEventListener("click", function(event){  
        let liftoffConfirm = window.confirm("Confirm that you want to abort the mission.")
        if (liftoffConfirm){
            flightStatus.innerHTML = "Mission Aborted"
            backgroundShuttle.style.backgroundColor="green";
            spaceShuttleHeight.innerHTML="0";
        }
    });
   this.document.addEventListener("click",function(event){
      let boxwidth=parseInt(window.getComputedStyle(backgroundShuttle).getPropertyValue('width'));
      let boxheight=parseInt(window.getComputedStyle(backgroundShuttle).getPropertyValue('height'));

      if(event.target.id === "left"&& posX > -(boxwidth /2 )) {     
        posX -=10  
        console.log(boxwidth)
       rocket.style.marginLeft=posX + 'px';
      }
    
     if(event.target.id === "right") {     
        posX +=10  
       rocket.style.marginLeft=posX + 'px';
      }
      if(event.target.id === "up" && posY<=(boxheight-84)){     
        console.log("Hello");
        posY +=10  
        rocket.style.marginBottom=posY + 'px';
        altitude +=10000
        spaceShuttleHeight.innerHTML=altitude;
        
      }
      if(event.target.id === "down" && altitude>0) {     
        posY -=10  
       rocket.style.marginBottom=posY + 'px';
       altitude -=10000
       spaceShuttleHeight.innerHTML=altitude;
      }

         });


});
