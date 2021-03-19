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

    create_ballons(qt_ballons);

}

function create_ballons(qt_ballons){

    for (var i = 1; i<= qt_ballons; i++){

        

    }

}