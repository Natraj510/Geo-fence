const getLocation = () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            setInterval(()=>{
              fetch(`http://geofence.balaji.ml/receive_data`,{
                method:"POST",
                crossorigin: true,    
                mode: 'no-cors',  
                headers:{
                  'Content-Type':'application/json'
                },
                body:JSON.stringify({
                  "center-lat":  position.coords.latitude,
                  "center-lon": position.coords.longitude,
                  "lat":   position.coords.latitude,
                  "lon":  position.coords.longitude
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