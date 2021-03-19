var timerId = null; // variavel que armazena a chamada da função timeout

function gameBegin(){

    var url = window.location.search;

    var game_level = url.replace("?", "");

    var time_secs = 0;

    if (game_level == 1){ // 1 - Easy - 120 secs
        time_secs = 120;
    }

    if (game_level == 2){ // 2 - Normal - 60 secs
        time_secs = 60;
    }

    if (game_level == 3){ // 3 - Hard - 30 secs
        time_secs = 30;
    }

    // inserting the time game in the cronometer

    document.getElementById('cronometer').innerHTML = time_secs; // innerHTML insert the element in the idTag

    // balloons quantity

    var qt_balloons = 10;
    var qt_ballons_splash = 0;

    create_ballons(qt_balloons);

    // print full balloons

    document.getElementById('full_balloons').innerHTML = qt_balloons;

    document.getElementById('splash_balloons').innerHTML = qt_ballons_splash;

    time_count(time_secs + 1)

}

function time_count(time_secs){

    time_secs = time_secs -1; // decrease time

    if (time_secs == -1){
        clearTimeout(timerId); // stop the execution of the function setTimeout when the time is negative
        game_over()
        return false
    }

    document.getElementById("cronometer").innerHTML = time_secs;

    timerId = setTimeout("time_count("+time_secs+")", 1000); //jquery function - The function time_count will be called for every 1000 ms

}

function game_over(){
    alert('End of the game');
}

function create_ballons(qt_balloons){

    for (var i = 1; i<= qt_balloons; i++){

        var balloon = document.createElement("img"); // with create element, you can create tags in your document HTML
        balloon.src = 'img/balao_azul_pequeno.png';
        balloon.style.margin = "10px"; // you can change the style of the balloon, because, he is a tag html now (img)
        balloon.id = 'b'+i; // create a id in the ballons
        balloon.onclick = function(){splash(this);}; // Association of the event on click with the splash balloon

        document.getElementById('scene').appendChild(balloon); // with append Child, he will add the img tag with the ballons 

    }

}

function splash(e){

    var id_balloon = e.id;

    document.getElementById(id_balloon).src = 'img/balao_azul_pequeno_estourado.png';

    score(-1);
}

function score(action){

    var full_balloons = document.getElementById('full_balloons').innerHTML;

    var splash_balloons = document.getElementById('splash_balloons').innerHTML;

    full_balloons = parseInt(full_balloons);

    splash_balloons = parseInt(splash_balloons);

    full_balloons = full_balloons + action; // the value of action is -1 see function splash(e)

    splash_balloons = splash_balloons - action; // the value of action is -1 function splash(e)

    document.getElementById('full_balloons').innerHTML = full_balloons; // value actualization in id

    document.getElementById('splash_balloons').innerHTML = splash_balloons; // value actualization in id

    game_finish(full_balloons)

}

function game_finish(full_balloons){
    if(full_balloons == 0){
        alert('Congratulations, you splashed all the balloons');
        stop_game();
    }
}

function stop_game(){
    clearTimeout(timerId);
}