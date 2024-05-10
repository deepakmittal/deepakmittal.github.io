/*    
FBInstant.initializeAsync()
  .then(function(){
          
          FBInstant.startGameAsync()
          .then(function() {
          // Retrieving context and player information can only be done
          // once startGameAsync() resolves
          var contextId = FBInstant.context.getID();
          var contextType = FBInstant.context.getType();

          var playerName = FBInstant.player.getName();
          var playerPic = FBInstant.player.getPhoto();
          var playerId = FBInstant.player.getID();

          // Once startGameAsync() resolves it also means the loading view has 
          // been removed and the user can see the game viewport
          setup();
        });

  });
    
;

*/
    function addCityAngle(degrees,id,name){
        var html='<div id="direction_'+degrees+'" style="display:none;"><div id="arrow_'+degrees+'" style="width: 320px;position: absolute;z-index: -2;" ><img src="img/arrow.png" width="160px" style="float:right;opacity: 0.7"/></div>\
            <div id="lebal_'+degrees+'" style="width:100px; position: absolute;text-shadow: 0px 0px 2px #ffffff;" >'+ "" +'</div></div>';
        if(!$("#direction_"+degrees).length){
            $("#wrapper").append(html);
            $('#lebal_' +degrees).text(name);
        }else{
            var currentLabel =$('#lebal_' +degrees).text() ;
            $('#lebal_' +degrees).text(currentLabel + ", "+ name);
        }
        
        setTimeout(function(){
        var baseX = 172;
        var baseY = 65;
        var x = 150 * Math.cos(degrees*(Math.PI / 180));    4           
        var y = 150 * Math.sin(degrees*(Math.PI / 180));
        console.log(x);
        console.log(y);
        length = $('#lebal_' +degrees).text().length*8;
        height =  parseInt(length / 160);
        //length = length > 100? 100: length;
        length = 100;
        x = x< -50 ? x-(length) : x+10;
        if(x < -170 || x+(length) > 180){
            x = x < -170 ? -170 : 180 - length;
            y = y > 0 ?  y+=10 : y -=10;
        }
        console.log(length + ":x:"+ x + ":y:"+ y);
        //var yAdjust = Math.abs(x) < 95 ? 0.05 * (y/Math.abs(y))* Math.pow(Math.abs(y),1.3) : 0;
        yAdjust = 0;
        y = y<0 ? y-10 : y+10;
        y = y < -120?-120:y;
        x = y < -110 && x > -30  && x < 50 ? x - 50 : x;
        y = y > 110?110:y;
        x = baseX + x;
        y = y > 100 ? y + (height*10) : y;
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
        var keys = Object.keys(PLACES_NOT_VISITED);
        var key = keys[Math.floor(Math.random() * keys.length)];
        var place = LEVEL_PLACES[key];
        delete PLACES_NOT_VISITED[key]
        return place;
    }
    
    function getAngle(city1,city2){
        var c1 = PLACES[city1];
        var c2 = PLACES[city2];
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
        var cRef = PLACES[refCity];
        var c = PLACES[city];
        var angle = getAngle(refCity, city);
        //angle = angle + RAND_ANGLE;
        //angle = angle % 360;
	console.log(angle);
        //angle = angle > 180 ? angle = -1 * (180-angle) : angle;
        addCityAngle(angle,c.code,c.city);
    }
    function setup(){
        setupBoard();
        setupSelect();
        startPlay();
    }
    function initialize(){
        $("#new-button").click(function(){
            setup();
        });
        $(".start-game").click(function(){
            $('.modal').modal('hide');
            setup();            
        });
        $("#new-game-button").click(function(){
            $('#game-end-modal').modal('hide');
            nextGame();
        });
        $("#help-button").click(function(){
            help();
        });
	help();
    }
    function setupBoard(){
        var level = LEVELS[LEVEL-1];
        $("#level").text(LEVEL);
        $("#game").text(GAME + " of " + level["games"]);
        $("#question").text(level['question']);
        $("#levels-dropdown").html('');
        for(var i in LEVELS){
            var l = LEVELS[i];
            var html = '<li><a href="#" class="level-option" value="'+ (parseInt(i)+1) +'""> '+l['label']+' </a></li>';
            $("#levels-dropdown").append(html);
        }
        $('.level-option').click(function () {           
            LEVEL = parseInt($(this).attr("value"));
            GAME = 1;
            levelStart();
        });
    }
    function setupSelect(){
        var first = true;
        $("#zone-tabs").html('');
        $("#zone-tabs-content").html('');
        var zones = {};
        var level = LEVELS[LEVEL-1];
        for(var i in level["options"]){
            var code = level["options"][i];
            var place = PLACES[code];
            zones[place['continent']] = ZONES[place['continent']];
        }
        
        for(var zoneKey in zones){
            var zone = zones[zoneKey];
            zone["cities"] = [];
            var html1 = '<li ' + (first? 'class="active"' : '') + '><a data-toggle="tab" href="#'+zoneKey+'">'+zone['label']+'</a></li>';
            var html2 = '<div id="'+zoneKey+'" class="tab-pane fade'+ (first?' in active': '')+'"><div id="tab-content-'+zoneKey+'" class="checkbox"></div></div>';
            $("#zone-tabs").append(html1);    
            $("#zone-tabs-content").append(html2);
            first = false;
        }
        LEVEL_PLACES={};
        PLACES_NOT_VISITED = {};
        for(var i in level["options"]){
            var code = level["options"][i];
            var place = PLACES[code];
            LEVEL_PLACES[code] = place;
            PLACES_NOT_VISITED[code] = place;
            //console.log(code);
            //console.log(place);
            var html = '<label id="city-label-'+place.code+'" style="width: 160px"><input id="city-check-'+place.code+'" class="city-check" type="checkbox" value="'+place.code+'">'+place.city+'</label>'
            $("#tab-content-"+place.continent).append(html);
        }
        $(".city-check").change(function(){
            $(this).attr("disabled", true);
            guess($(this).val());
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
        var level = LEVELS[LEVEL-1];
        if(place == 0 || GUESSED_PLACES.indexOf(place)!== -1){
            return;
        }
        GUESS_COUNT++;
        if(place == UNKNOWN_PLACE.code){
            //message("Correct","green");
            $(".city-check").attr("disabled", true);
            win();
            return;
        }
        var triesLeft = level["max_attempt"] - GUESS_COUNT;
        $("#tries").text( triesLeft <= 1 ? "last try!" : (triesLeft+ " tries remaining."));
        addPlace(place);
        if(GUESS_COUNT >= level['max_attempt']){
            $(".city-check").attr("disabled", true);
            loose();
        }
    }

    function gameEnd(title, content){
        $("#game-end-title").text(title);
        $("#game-end-content").html(content);
        $("#game-end-modal").modal('show');
    }
    
    function win(){
        gameEnd(
            "Found! The place is "+ UNKNOWN_PLACE.city +".",
                (GUESS_COUNT < 2 ? "Strike! You found the place in first try!" : "You took " +GUESS_COUNT+ " tries.")+" <h5>Did you know?</h5>" + UNKNOWN_PLACE["do-you-know"]
            );
    }
    function nextGame(){
        var level = LEVELS[LEVEL-1];
        if(GAME < level["games"]){
            console.log("GAME++");
            GAME++;
            setup();
        }else{
            GAME = 1;
            if(LEVEL == LEVELS.length){
                levelStart();//@TODO add game end message.
            }else{
                LEVEL++;
                levelStart();
            }
        }

    }
    function loose(){
        $("#lost-content").html("The place is "+ UNKNOWN_PLACE.city + ".");
        $("#lost-modal").modal('show');
    }
    function levelStart(){
        var level = LEVELS[LEVEL-1];
        $("#level-title").text("New Level");
        $("#level-content").html(level["intro"]);
        $("#level-modal").modal('show');
    }
    function help(){
        $("#help-modal").modal('show');
    }
    function startPlay(){
        var level = LEVELS[LEVEL-1];
        $("#wrapper").html("");
        GUESS_COUNT = 0;
        GUESSED_PLACES = new Array();
        UNKNOWN_PLACE = getRandomPlace();
        //UNKNOWN_PLACE = PLACES[43]; // comment this
        GUESSED_PLACES.push(UNKNOWN_PLACE.code);
        RAND_ANGLE = parseInt(Math.random() * 360);
        for(var i=0;i<level["preselect"];i++){
             place = getRandomPlace();
             place = place.code;
             addPlace(place);
        }
        $("#tries").text(level["max_attempt"] + " tries remaining.");
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
    var GUESS_COUNT;
    var RAND_ANGLE;
    var LEVEL= 1;
    var GAME= 1;
    var LEVEL_PLACES = {};
    var PLACES_NOT_VISITED = {};

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
    if(window.innerHeight > 830){
        $("#inputBox").css({"margin-top":"180px"});
    }
    if(window.innerHeight < 800){
        //$("#bottom-menu").css({"position":"absolute"});
        //document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=1.5");

    }

    var places = {};
    for(var i in PLACES){
        places[PLACES[i]["code"]] = PLACES[i];
    }
    PLACES = places;
    initialize();
    setup();
