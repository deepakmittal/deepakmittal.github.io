    



    function addCityAngle(degrees,id,name){
        var html='<div id="direction_'+degrees+'" style="display:none;"><div id="arrow_'+degrees+'" style="width: 320px;position: absolute;" ><img src="img/arrow.png" width="160px" style="float:right;opacity: 0.5"/></div>\
            <div id="lebal_'+degrees+'" style="width:150px; position: absolute;" >'+ "" +'</div></div>';
        if(!$("#direction_"+degrees).length){
            $("#wrapper").append(html);
            $('#lebal_' +degrees).text(name);
        }else{
            var currentLabel =$('#lebal_' +degrees).text() ;
            $('#lebal_' +degrees).text(currentLabel + ", "+ name);
        }
        
        setTimeout(function(){
        var baseX = 152;
        var baseY = 65;
        var x = 150 * Math.cos(degrees*(Math.PI / 180));
        var y = 150 * Math.sin(degrees*(Math.PI / 180));
        console.log(x);
        console.log(y);
        length = $('#lebal_' +degrees).text().length*8;
        height =  parseInt(length / 160);
        length = length > 160? 160: length;
        x = x< -50 ? x-(length) : x+10;
        if(x < -170 || x+(length) > 190){
            x = x < -170 ? -170 : 190 - length;
            y = y > 0 ?  y+=20 : y -=20;
        }
        console.log(length + ":x:"+ x + ":y:"+ y);
        //var yAdjust = Math.abs(x) < 95 ? 0.05 * (y/Math.abs(y))* Math.pow(Math.abs(y),1.3) : 0;
        yAdjust = 0;
        y = y<0 ? y-10 : y+10;
        y = y < -160?-160:y;
        y = y > 160?160:y;
        x = baseX + x;
        y = y > 130 ? y + (height*10) : y;
        y = baseY - y - yAdjust;    
        
        $("#arrow_"+degrees).rotate(degrees);
        $("#lebal_"+degrees).css({ 
                            marginLeft : x +"px", 
                            marginTop : y +"px"
                        });
        $("#direction_"+degrees).show(); 
        $("#direction_"+degrees).flash(600);
        $("#arrow_"+degrees).flash(600);
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
        var x =  c1.lognitude - c2.lognitude;
        
        if(x > 180){
            x = -1 * (360 - x);
        }else if(x < -180){
            x = 360 + x;
        }

        console.log(c1);
        console.log(c2);
        angle = Math.abs(Math.atan(y/x)*180/Math.PI);
        angle = Math.round(angle/45)*45;

        if(y >= 0 && x < 0){
            angle = 180 - angle;
        }
        if(y < 0 && x < 0){
            angle += 180;
        }
        if(y < 0 && x >= 0){
            angle = 360 - angle;
        }
        if(angle == 360){
            angle = 0;
        }

        console.log("y->"+y+" ,x->"+x + ", angle:"+angle);
        
        //angle = Math.atan(Math.abs(y/x))*180/Math.PI;
        return angle;
        
    }
    function addCity(refCity, city){
        var cRef = getPlace(refCity);
        var c = getPlace(city);
        var angle = getAngle(refCity, city);
        //angle = angle + RAND_ANGLE;
        //angle = angle % 360;
//console.log(angle);
        //angle = angle > 180 ? angle = -1 * (180-angle) : angle;
        addCityAngle(angle,c.code,c.city);
    }
    function setup(){
        setupSelect();
        startPlay();

    }
    function setupSelect(){
        var first = true;
        $("#zone-tabs").html('');
        $("#zone-tabs-content").html('');
        for(var zoneKey in ZONES){
            var zone = ZONES[zoneKey];
            zone["cities"] = [];
            var html1 = '<li ' + (first? 'class="active"' : '') + '><a data-toggle="tab" href="#'+zoneKey+'">'+zone['label']+'</a></li>';
            var html2 = '<div id="'+zoneKey+'" class="tab-pane fade'+ (first?' in active': '')+'"><div id="tab-content-'+zoneKey+'" class="checkbox"></div></div>';
            $("#zone-tabs").append(html1);    
            $("#zone-tabs-content").append(html2);
            first = false;
        }
        
        for(var i=0; i<PLACES.length;i++){
            var place = PLACES[i];
            var html = '<label id="city-label-'+place.code+'" style="width: 180px"><input id="city-check-'+place.code+'" class="city-check" type="checkbox" value="'+place.code+'">'+place.city+'</label>'
            $("#tab-content-"+place.continent).append(html);
        }
        $(".city-check").change(function(){
            $(this).attr("disabled", true);
            guess($(this).val());
        });
        $("#new-button").click(function(){
            setup();
        });
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
    
    function guess(place){
        if(place == 0 || GUESSED_PLACES.indexOf(place)!== -1){
            return;
        }
        if(place == UNKNOWN_PLACE.code){
            message("Correct","green");
            alert("Correct! The place is " + UNKNOWN_PLACE["city"] + " ("+  UNKNOWN_PLACE["country"] +")");
            return;
        }
        addPlace(place);
        message("Wrong","orange");
    }
    
    function startPlay(){
        $("#wrapper").html("");
        GUESSED_PLACES = new Array();
        UNKNOWN_PLACE = getRandomPlace();
        UNKNOWN_PLACE = PLACES[8];
        GUESSED_PLACES.push(UNKNOWN_PLACE.code);
        RAND_ANGLE = Math.random() * 360;
        place = getRandomPlace();
        place = place.code;
        for(var i=0;i<3;i++){
            while(place == UNKNOWN_PLACE.code || GUESSED_PLACES.indexOf(place) !==-1){
                place = getRandomPlace();
                console.log(place);
                place = place.code;
            }
            addPlace(place);
        }
        //$('#wrapper').rotatable({handleOffset: {left: 170, top:90}});
    }
    function addPlace(place){
        $("#city-check-"+place).attr("checked", true);
        $("#city-check-"+place).attr("disabled", true);
        GUESSED_PLACES.push(place);
        addCity(UNKNOWN_PLACE.code,place);
    }
    function initializeGlobe() {
        var earth = new WE.map('earth_div');
        WE.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: ''
        }).addTo(earth);
      }
      //initializeGlobe();
      setTimeout(function(){$(".cesium-credit-textContainer").hide();},10);
    var UNKNOWN_PLACE;
    var GUESSED_PLACES = new Array();
    var RAND_ANGLE;

    jQuery.fn.rotate = function(degrees) {
        degrees = 360 - degrees;
        $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
        return $(this);
    };
    jQuery.fn.flash = function(duration ){   
        var color = '52,155,235';
        var current = this.css( 'color' );
        this.animate( { color: 'rgb(' + color + ')' }, duration / 2 );
        this.animate( { color: current }, duration / 2 );
    }
    setup();
