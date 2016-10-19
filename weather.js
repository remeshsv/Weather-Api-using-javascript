// Student Name:  Sreemoolam Venkitachalam, Remesh
// Programming Assignment 1
// A Weather Web Application


    // Put your Last.fm API key here
/*var api_key = "";

function sendRequest () {
    var xhr = new XMLHttpRequest();
    var method = "artist.getinfo";
    var artist = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?method="+method+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
            document.getElementById("output").innerHTML = "<pre>" + str + "</pre>";
        }
    };
    xhr.send(null);
}*/


var api_key = "e58e4d6e36cfa6ba6b448e1708813d17"; //API Access Key 

function sendRequest () {
    var xhr = new XMLHttpRequest();
   // var method = "artist.getinfo";
    var city = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?q="+city+"&appid="+api_key+"&format=json &units=metric", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
            var backToDate = new Date(json.dt*1000);
            var date= backToDate.toString();
            var rise = new Date(json.sys.sunrise*1000);
            var set =new Date(json.sys.sunset*1000);
            var srise = rise.toString();
            var sset = set.toString();
            date = date.substr(0,15);
            srise = srise.substr(16);
            sset = sset.substr(16);
            //var set = new Date(parseInt(sset.substr(15));
            //var newDate = new Date(parseInt(date.substr(6)));
  
            var msg;
            var vis;
            var image;

            if(json.weather[0].main=="Rain")
                {msg="Carry an Umbrella!";
                //image="C:\xampp\htdocs\myexercises\Exercise 1\park.jpg";
                
                //var b = document.getElementsByTagName("body"); 
        
                }
            else if(json.weather[0].main=="Clear")
                msg="Clear Blue Sky!";
            else if(json.weather[0].main=="Clouds")
                msg="Grim clouds above.";
            else if(json.weather[0].main=="Snow")
                msg="Winter Jackets absolutely necessary!";

            if(json.clouds.all>50){
                vis="Heavy Clouds. Less visibility.";
            }
            else if(json.clouds.all>25){
                vis="Cloudy, but medium visibility.";
            }else if(json.clouds.all>5){
                vis="Bright colorful day. Good visibility";
            }else{
                vis="Enjoy the cloudless sky. High visibility.";
            }


            document.getElementById("result").style.visibility = "visible";

            document.getElementById("city").innerHTML = "<pre>" + json.name + "</pre>";
            document.getElementById("long").innerHTML = "<pre>" + json.coord.lon + "</pre>";
            document.getElementById("lat").innerHTML = "<pre>" + json.coord.lat + "</pre>";
            document.getElementById("weather").innerHTML = "<pre>" + json.weather[0].main + "</pre>";
            document.getElementById("desc").innerHTML = "<pre>" + json.weather[0].description + "</pre>";
            document.getElementById("temp").innerHTML = "<pre>" + json.main.temp  + " celcius</pre>";
            document.getElementById("hum").innerHTML = "<pre>" + json.main.humidity + " %</pre>";
            document.getElementById("pres").innerHTML = "<pre>" + json.main.pressure + " hPa</pre>";
            document.getElementById("max").innerHTML = "<pre>" + json.main.temp_max + " celcius</pre>";
            document.getElementById("min").innerHTML = "<pre>" + json.main.temp_min + " celcius</pre>";
            document.getElementById("cloudr").innerHTML = "<pre>" + json.clouds.all + " %</pre>";
            document.getElementById("rise").innerHTML = "<pre>" + srise + "</pre>";
            document.getElementById("set").innerHTML = "<pre>" + sset + "</pre>";
            document.getElementById("today").innerHTML = "<pre>" + date + "</pre>";

        
            document.getElementById("output").innerHTML = "<pre>" + msg + "</pre></br><pre>" + vis + "</pre>";



            //document.getElementById("output").innerHTML = "<pre> City: " + json.name + "</pre></br>Longitude: " + json.coord.lon 
            //+ "</pre></br> Latitude:"+ json.coord.lat + "</pre></br>Sunrise: "
            //+ srise + "</pre></br>Sunset :"+ sset 
            //+ "</pre></br> Weather : "+ json.weather[0].main  + "</pre><img src=www.openweathermap.org/img/w/10d.png alt=clouds></img></br> Description :"
            //+ json.weather[0].description + "</br></pre> Temperature :"+ json.main.temp 
            //+ "c</br></pre> Humidity: "+ json.main.humidity + "%</br></pre> Pressure : "+ json.main.pressure + "hPa</br></pre>Max temp :"
            //+ json.main.temp_max + "c</br></pre> Min Temp :"+ json.main.temp_min + "c</br></pre> Clouds : "+ json.clouds.all 
            //+ "%</br></pre> Wind speed : "+ json.wind.speed + "m/s</pre></br> Date :"+ date + "</pre></br></br>" + msg + "</pre>";
            //document.getElementById("output").innerHTML = "<pre>" + str + "</pre>";
            
        }

    };
    xhr.send(null);
}
