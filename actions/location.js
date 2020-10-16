import axios from 'axios';





export function get_cities(){

return dispatch=>{

    return  [
        'Lagos','Abuja',
        'Kano'
    ]
    
}

}




export function get_current_address(){

    return get_cities()
}




export function address(){

    return dispatch => "lagos"
}



var obj={};

function getLocation(enableHighAccuracy){
    if(navigator.geolocation){
  console.log('geolocation working')
        navigator.geolocation.getCurrentPosition(callbackSuccess,callbackError,{enableHighAccuracy})
        




    }
}



function callbackSuccess(position){

            obj.accuracy = position.coords.accuracy
            obj.latitude = position.coords.latitude
            obj.longitude = position.coords.longitude

            console.log('latitude: '+obj.latitude)


            try{
        
        var latlng = position.coords.latitude+','+position.coords.longitude;
        var apikey='AIzaSyChCakJaZpFE8236wlXFBdvDraYQJsdFA4'

                axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng + "&sensor=true&key="+apikey).then(data=>{

                        if(data.status = 'OK'){

                            var strt = data.formatted_address

                           
                        }


        return strt;
                    })

            }
            catch(error){
                console.warn(error)

            }

        }


function callbackError(error){

console.warn(error);
return "lagos"
}