//declare the variable globally
let iso_code2;
let iso_code3;
let capital = '';
let currency_symbol;
let population;
let currencyCode;
let countryCode;
let countryName = '';
let countryGeoJson = [];
let geoJsonLayer = [];
let lat;
let lng;
let mymap;
let flag;
let wikiData;

//style for geojson 
var geoJsonStyle = {
    "color": "black",
    "opacity": 0.6,
    "weight": 4,
}

var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton');
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver');
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora.');
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden.');
	london    = L.marker([51.50, 0.12]).bindPopup('This is London,Capital');
	delhi     = L.marker([28.70, 77.10]).bindPopup('This is Dehli,Capital');
	kabul     =  L.marker([34.28, 69.11]).bindPopup('This is Kabul,Capital');
	Tirane     =  L.marker([41.18, 19.49]).bindPopup('This is Tirane,Capital');
	algiers     =  L.marker([36.42, 3.8]).bindPopup('This is Algires,Capital');
	pago     =  L.marker([14.16, 170.43]).bindPopup('This is Pago Pago,Capital');
	androlla  =  L.marker([42.31, 1.32]).bindPopup('This is Androlla la Vella,Capital');
	luanda     =  L.marker([8.50, 13.15]).bindPopup('This is Luanda,Capital');
	west    =  L.marker([17.20, 61.48]).bindPopup('This is West Indies,Capital');
	Buens     =  L.marker([36.30, 60.00]).bindPopup('This is Buenos Aires,Capital');
	paris     =  L.marker([48.50, 2.20]).bindPopup('This is Paris,Capital');
	rome     =  L.marker([41.54, 12.29]).bindPopup('This is Rome,Capital');
    berlin    =  L.marker([52.30, 13.25]).bindPopup('This is Berlin,Capital');
    berlin    =  L.marker([52.30, 13.25]).bindPopup('This is Berlin,Capital');

    var cities = L.layerGroup([littleton, denver, aurora, golden,london,delhi,kabul,Tirane,algiers,pago,androlla,luanda,west,Buens,paris,rome,berlin]);

    var normal = 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {id: 'mapbox.streets', 
    tileSize: 512,
    zoomOffset: -1,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
     maxZoom:30}),

    france = 
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', 
    {id: 'mapbox.streets',
	maxZoom: 20,
	attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

     topomap  = 
     L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
     {id: 'mapbox.streets',
     tileSize: 512,
     zoomOffset: -1, 
     attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'});

     solid  = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}',
   {id: 'mapbox.streets',
   tileSize: 512, 
   zoomOffset: -1,
   attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'});

   Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', 
   {id: 'mapbox.streets',
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

    USGS_USTopo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 20,
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});

Stamen_Terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});

Thunderforest_MobileAtlas = L.tileLayer('https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: 'c4fde248cb9f4a17a4ec3bfe314dfbef',
	maxZoom: 22
});
   
   mini   = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
   {id: 'mapbox.streets', 
   tileSize: 512, 
   zoomOffset: -1, 
   attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});

   clouds   = L.tileLayer('http://{s}.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=718113fbd79c46718f62ab3d736dea80', 
   {id: 'mapbox.streets', 
   tileSize: 512,
   zoomOffset: -1, 
   attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>'});
   
   pressure   = L.tileLayer('http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png?appid=718113fbd79c46718f62ab3d736dea80',
   {id: 'mapbox.streets', 
   tileSize: 512, 
   zoomOffset: -1,
   attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>'});
   
    wind = L.tileLayer('http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png?appid=718113fbd79c46718f62ab3d736dea80',
	{id: 'mapbox.streets', 
	tileSize: 512,
	zoomOffset: -1,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>'});
	
	 temp = L.tileLayer('http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=718113fbd79c46718f62ab3d736dea80',
	{id: 'mapbox.streets', 
	tileSize: 512,
	zoomOffset: -1,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>'});

  precipitation = L.tileLayer('http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=718113fbd79c46718f62ab3d736dea80',
	{id: 'mapbox.streets', 
	tileSize: 512,
	zoomOffset: -1,
    attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>'});
    
    Stamen_TonerLines = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    });
   
  
    var baseMaps = {
        "Normal": normal,
        "Topomap": topomap,
        "Solid" : solid,
        "MiniMap":mini,
        "USGS_USTopo" : USGS_USTopo,
        "France" : france,
        "Thunderforest_MobileAtlas": Thunderforest_MobileAtlas,
        "Stadia_OSMBright": Stadia_OSMBright,
        "Stamen_Terrain": Stamen_Terrain
        
        //"Main":national,
    };
    var overlayMaps = {
	
        "Cities": cities,
        "Weather_Rainfall":precipitation,
        "Weather_clouds":clouds,
        "Weather_Pressure":pressure,
        "Weather_Wind":wind,
        "Weather_Temprature":temp,
        "Stamen Toner ":Stamen_TonerLines
        
    };

    
    


//create a function  for country List
function getCountryList(){
    $.ajax({
        url: 'libs/php/countryList.php',
        type:'POST',
        dataType:'JSON',
        success:(result) => {
            //console.log(result);
            selCountry = $('#selCountry')
            result['data'].forEach(country => {
                selCountry.append(`<option value = ${country['iso3']}>${country['countryName']}</option>`);

                
            });
        },error: function(jqXHR, textStatus, errorThrown){
            console.log('country not selected');
            $('#loading').hide();
        }
    })
}

//main function 
function mainFunction(){
    if(navigator.geolocation){
       // console.log("Geolocation is available");
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    $('#preloader').fadeOut(2000, function() { $(this).remove(); });
    }
    else{
        alert("Geolocation is not supported to your browser");
    }

}

//successFunction
function successFunction(position){
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    //console.log(lat,lng);
    mymap = L.map('map').setView([lat, lng],5);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18,
        attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
        id:'mapbox.streets',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidnJ1bmRhIiwiYSI6ImNrZ250M3gycjM4bW0ycnMxYnBraTc4Y2QifQ.lD2HxMLhU_b1j6IlR9_kWQ'
    }).addTo(mymap);
   // let layer = L.geoJson().addTo(mymap);
   // layer.addTo(mymap);
    L.control.layers( baseMaps,overlayMaps).addTo(mymap);

      //add easy button icon on map to show data
      L.easyButton('<i class="fas fa-info-circle fa-lg"style="color:blue"></i>',function(){
        $('#countryInfo').modal("show");
    },'Country Information').addTo(mymap );

    L.easyButton('<i class="fab fa-wikipedia-w" style="color:red"></i>',function(){
        $('#wikiInfo').modal("show");
    },'Wikipedia Information').addTo(mymap );

    L.easyButton('<i class="fas fa-cloud-sun-rain fa-lg" style="color:blue"></i>',function(){
    $('#weatherInfo').modal("show");
    },'Weather Information').addTo(mymap );

    L.easyButton('<i class=" fa fa-clock fa-lg" style="color:orangered"></i>',function(){
        $('#timeInfo').modal("show");
    },'TimeZone').addTo(mymap);

    L.easyButton('<i class="fas fa-coins fa-lg" style="color:green"></i>',function(){
        $('#curInfo').modal("show");
    },'Currency Information').addTo(mymap);

     //to get the current country name
     $.ajax({
        url:'libs/php/currentCountry.php',
        type:'POST',
        dataType:'json',
        data:{
            latitude: lat,
            longitude:lng
        },
        success: function(result){
            //console.log(result)
             iso_code3 = result['results'][0]['components']['ISO_3166-1_alpha-3'];
             //countryCode = result['results'][0]['components']['country_code'];
             $(`#selCountry option[value='`+iso_code3+`']`).prop('selected', true);
            countryInformation(iso_code3);
        //to set coutry borders with geojson Layer
        $.ajax({
            url:'libs/php/countryList.php',
            type:'POST',
            data:{iso_code3 :iso_code3 },
            dataType: 'JSON',
            success:(result) => {
               // console.log("-------------data for geoJson Layer-------")
               // console.log(result);
                countryGeoJson = result['geoJson'];
                createGeoJson(countryGeoJson);
               
            }

             })
        }
    })
}

//error function
function errorFunction(e){
    console.log(e.message);
    
}



//function for geoJson Layer for country Border
function  createGeoJson(geoJson){
    //console.log(geoJson);
    if(geoJsonLayer){
        mymap.removeLayer(geoJsonLayer)
    }
    geoJsonLayer = L.geoJson(geoJson, {
        style: geoJsonStyle
    }).addTo(mymap);
    mymap.fitBounds(geoJsonLayer.getBounds());

}

//get countryInformation
function countryInformation(iso_code3){
    $.ajax({
        url:'libs/php/countryInfo.php',
        type:'POST',
        dataType: 'json',
        data:{
            iso_code3 : iso_code3
        },
        success:function(result){
           // console.log(result);
            if(result.status.name == "ok"){
                capital = result['data'][0]['capital'];
                currencyCode = result['data'][0]['currencies'][0]['code'];
                countryCode = result['data'][0]['alpha2Code'];
                
               currency_symbol = result['data'][0]['currencies'][0]['symbol'];
             // population = result['data'][0]['population'];
                flag = result['data'][0]['flag'];

                //console.log("-------------------------get capital, currencyCode from country information--------------------");
                //console.log(capital,currencyCode, countryCode,countryName);

                //show the data inside model
              //  $('#flag').html(result['data'][0]['flag']);
                $('#flag').attr("src",result['data'][0]['flag']);
                $('#country_name').html(result['data'][0]['name']);
                $('#capital').html(result['data'][0]['capital']);
               population = `${result['data'][0]['population'].toLocaleString("en-US")}`;
              $('#population').html(`${population}`);
              let area = `${result['data'][0]['area'].toLocaleString("en-US")}`;
              $('#area').html(`${area}` + `km<sup>2</sup>`);
                //$('#area').html(result['data'][0]['area']);
                $('#language').html(result['data'][0]['languages'][0]['name']);
                $('#region').html(result['data'][0]['region']);
                $('#subregion').html(result['data'][0] ['subregion']);
                $('#language').html(result['data'][0] ['languages'][0]['name']);
                $('#Currencies').html(result['data'][0]['currencies'][0]['code']);
                $('#Currencies').html;
                $('#dialing_code').html("+" +result['data'][0]['callingCodes']);
                cur_symbol = result['data'][0]['currencies'][0]['symbol'];
                $("#country_code").html(result['data'][0]['region']);
                var t = result['data'][0]['timezones'][0];
                $("#timezone").html(t);
                $('#currencyName').html(result['data'][0]['currencies'][0]['name']);
                //console.log(cur_symbol);
                getWeather(capital);
                wikipediaData(capital);
                getExchangeRate(currencyCode);
                geoJsonLayer.bindTooltip(mapInfoDisplay()).toggleTooltip();
               
            }
        },
        error:function(jqXHR, textStatus, errorThrown){
           // console.log('Country data not found');
        }
    })

}

//get weather information
function getWeather(capital){
    $.ajax({
        url:'libs/php/getWeather.php',
        type:'POST',
        dataType:'json',
        data:{
            capitalCity : capital
        },
        success:function(result){
            //console.log("------------get weather data------------")
            //console.log(result);
            if(result.status.name == "ok"){
                   //show the data inside model
                   var iconcode = result.data.weather[0].icon;;
                   var src = "http://openweathermap.org/img/w/" + iconcode + ".png";
                  $('#wi').attr("src",src);
                  
                
                  $('#city').html(result['data']['name']);
                 // $('#feels').html(result['data']['main']['feels_like']);
                  $('#humidity').html(result['data']['main']['humidity'] + '%');
                 // $('#temp').html(result['data']['main']['temp']);
                  $('#description').html(result['data']['weather'][0]['description']);
                  $('#windspeed').html(result['data']['wind']['speed'] + " m/s");
                  $('#pressure').html(result['data']['main']['pressure'] + " hPa");

                  let temp = `${Math.round(result.data.main.temp)} F`;
                  $('#temp').html(`${temp}`);
                  let feelsLike = `${Math.round(result.data.main.feels_like)} F`;
                  $('#feels').html(`${feelsLike}`);

                        
                    w_lon = result['data']['coord']['lon'];
                    w_lat =result['data']['coord']['lat'];
                   // console.log("----------------weather lat ang long");
                   // console.log(w_lon,w_lat);
                    //call the function for time
                    getCurrentTime(w_lon,w_lat);
               
            }

        }
    })

}

//function to get currentTime from lat ang long from weather
function getCurrentTime(w_lon,w_lat){
    $.ajax({
        url:'libs/php/getTimezone.php',
        type:'POST',
        data:{lat:w_lat,
              lon: w_lon },
       dataType: 'JSON',
       success:(result)=> {
           //console.log('----------get data from timeZone api------')
           //console.log(result);
           let timezone = result.data.timezoneId;
          // console.log(timezone)
           $('#timezoneId').html(result['data']['timezoneId']);
           $('#sunrise').html(result['data']['sunrise']);
           $('#sunset').html(result['data']['sunset']);
           $('#time').html(result['data']['time']);
           //let DTime =result['data']['time'];
           //let CDTime = new Date(DTime)
           //let CDT =CDTime.toUTCString();
          // console.log(CDT)
           //$('#time').html(`${CDT}`);

       }
    })

}


//get wikiData information
function  wikipediaData(capital){
    $.ajax({
        url:'libs/php/wikipedia.php',
        type:'POST',
        dataType:'json',
        data:{
            capitalCity : capital
        },
        success:function(result){
            //console.log("----------------------wikipedia-------------------------");
            //console.log(result);
            //console.log(result['data']['geonames'][0]['countryCode'])
            if(result.status.name =="ok"){
                 //show the data inside model
                 wikiData = result['data']['geonames'];
                 //console.log('--------wikiData for map---------');
                // console.log(wikiData);
                $('#title1').html(result['data']['geonames'][0]['title']);
                $('#sum1').html(result['data']['geonames'][0]['summary']);
                $('#thumb1').attr("src",result['data']['geonames'][0]['thumbnailImg']);
                $('#thumb1').css("width","40%");
                $('#url1').html(`<p><a href=https://${result['data']['geonames'][0]['wikipediaUrl']} target="blank">Click link for more info... </a></p>`);

                $('#title2').html(result['data']['geonames'][1]['title']);
                $('#sum2').html(result['data']['geonames'][1]['summary']);
                $('#thumb2').attr("src",result['data']['geonames'][1]['thumbnailImg']);
                $('#thumb2').css("width","40%");
                $('#url2').html(`<p><a href=https://${result['data']['geonames'][1]['wikipediaUrl']} target="blank">Click link for more info... </a></p>`);

                $('#title3').html(result['data']['geonames'][2]['title']);
                $('#sum3').html(result['data']['geonames'][2]['summary']);
                $('#thumb3').attr("src",result['data']['geonames'][2]['thumbnailImg']);
                $('#thumb3').css("width","40%");
                $('#url3').html(`<p><a href=https://${result['data']['geonames'][2]['wikipediaUrl']} target="blank">Click link for more info... </a></p>`);
       
               
            }
           
        }
    })

}

//exchange Rate data
function getExchangeRate(currencyCode){
    $.ajax({
        url: 'libs/php/exchangeRate.php',
        type:'POST',
        data:{currencyCode:currencyCode},
        dataType:'json',
        success:function(result){
            //console.log('---------------------exchangeRate Data------------------------')
           // console.log(result);
            s = result.data.rates[currencyCode];
            $('#base').html(result['data']['base']);
            $('#date').html(result['data']['date']);
            $("#er").html(s);
            $("#cc").html(currencyCode);
            $("#cs").html(cur_symbol);   
        }

    })

}

//on  country select chage data
$('#selCountry').change(function(){
    var sel_iso3 =  $('#selCountry').find(':selected').val();
   

    countryInformation(sel_iso3);
        $.ajax({
            url:'libs/php/countryList.php',
            type:'POST',
            data : {"iso_code3":sel_iso3},
            dataType: 'JSON',
            success:(result) => {
               countryGeoJson = result['geoJson'];;
               createGeoJson(countryGeoJson);
               geoJsonLayer.bindTooltip(mapInfoDisplay()).toggleTooltip();
                    
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log('Country not found');
        }
      });

 });

 function mapInfoDisplay(){
    return `
    <table id="mapinfo">
        <tbody>
            <tr>
                <td id="imageCell"><img class="flagImage" src="${flag}"style="width:100px;"></td>
            </tr>
            <tr>
                <td class="key">Capital City:</td>
                <td class="value">${capital}</td>
            </tr>
            <tr>
                <td class="key">Currency Code:</td>
                <td class="value">${currencyCode}</td>
            </tr>
            <tr>
                <td class="key">Currency Symbol:</td>
                <td class="value">${currency_symbol}</td>
            </tr>
            <tr>
                <td class="key">Population:</td>
                <td class="value">${population}</td>
            </tr>
          
        </tbody>
    </table>
`
}

//when document ready call the function
$(document).ready(function(){
 mainFunction();
 getCountryList();
     
 })



