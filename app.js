const getLocation = () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            setInterval(()=>{
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
              fetch(`https://geofence.balaji.ml/receive_data`,{
                method:"POST",
                crossorigin: true,    
                mode: 'no-cors',  
                headers:{
                  'Content-Type':'application/json'
                },
                body:JSON.stringify({
                  "center-lat":  12.860930336692546,
                  "center-lon": 80.0686152373018,
                  "lat":   12.9454947903854,,
                  "lon":  80.1606000902524
              })
              })
              .then(res=>{
                console.log(res.status);
                console.log(res.headers);
              })
            },1000)


            
        })
    }
}   
