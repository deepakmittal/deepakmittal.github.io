    setupSelect();
    setTimeout(function(){
        $("#placeSelect").customselect();},10);
    jQuery.fn.rotate = function(degrees) {
        degrees = 360 - degrees;
        $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
        return $(this);
    };
    $("#guess").click(function(){
        guess();
    });
    function addCityAngle(degrees,id,name){
        var html='<div id="direction_'+id+'" style="display:none;"><div id="arrow_'+id+'" style="width: 300px;position: absolute;" ><img src="img/arrow.png" width="150px" style="float:right"/></div>\
            <div id="lebal_'+id+'" style="position: absolute;" >'+name+'</div></div>';
        $("#wrapper").append(html);
        setTimeout(function(){
        var baseX = 152;
        var baseY = 65;
        var x = 150 * Math.cos(degrees*(Math.PI / 180));
        var y = 150 * Math.sin(degrees*(Math.PI / 180));
        console.log(x);
        console.log(y);
        x = x<0 ? x-50 : x+10;
        y = y<0 ? y-10 : y+10;
        x = baseX + x;
        y = baseY - y;    
        $("#arrow_"+id).rotate(degrees);
        $("#lebal_"+id).css({ 
                            marginLeft : x +"px", 
                            marginTop : y +"px"
                        });
        $("#direction_"+id).show();                
        },10);
        
        
    }
    
    function getRandomPlace(){
        return PLACES[Math.floor(Math.random() * PLACES.length)];
    }
    function getPlace(id){
        for(i=0;i<PLACES.length; i++){
            var place = PLACES[i];
            if(place['code']==id){
                return place;
            }
        }
        return null;
    }
    function getAngle(city1,city2){
        var c1 = getPlace(city1);
        var c2 = getPlace(city2);
        var y = c2.latitude - c1.latitude;
        y = y > 180 ? y-360 : y;
        var x=c1.lognitude - c2.lognitude;
        x = x > 180 ? x - 360: x;
        console.log(y);
        console.log(x);
        angle = Math.atan(Math.abs(y/x))*180/Math.PI;
        if( x >=0 && y>=0 )
            return angle;
        if( x>=0 && y < 0)
            return 0 - angle;
        if( x < 0 && y >= 0)
            return 180 - angle;
        if( x < 0 && y < 0)
            return -180 + angle;
    }
    function addCity(refCity, city){
        var cRef = getPlace(refCity);
        var c = getPlace(city);
        var angle = getAngle(refCity, city);
        addCityAngle(angle,c.code,c.city);
    }
    function setupSelect(){
        for(var i=0; i<PLACES.length;i++){
            var place = PLACES[i];
            var html = '<option value="'+ place.code +'">'+ place.country + " > " + place.city +'</option>';
            $("#placeSelect").append(html);
        
        }
    }
    function message(msg, color){
        $("#message").html(msg);
        $("#message").css({"color": color });
        $("#message").show();
        if(color !=="green"){
            setTimeout(function(){
                $("#message").hide();
            },2000);
        }
    }
    
    function guess(){
        var place = $("#placeSelect").val();
        if(place == 0 || GUESSED_PLACES.indexOf(place)!== -1){
            return;
        }
        if(place == UNKNOWN_PLACE.code){
            message("Correct","green");
            return;
        }
        GUESSED_PLACES.push(place);
        addCity(UNKNOWN_PLACE.code,place);
        message("Wrong","orange");
    }
    
    function startPlay(){
        UNKNOWN_PLACE = getRandomPlace();
        place = getRandomPlace();
        place = place.code;
        for(var i=0;i<3;i++){
            while(place == UNKNOWN_PLACE.code || GUESSED_PLACES.indexOf(place) !==-1){
                place = getRandomPlace();
                console.log(place);
                place = place.code;
            }
            GUESSED_PLACES.push(place);
            addCity(UNKNOWN_PLACE.code,place);
        }
    }
    var UNKNOWN_PLACE;
    var GUESSED_PLACES = new Array();
    startPlay();
    