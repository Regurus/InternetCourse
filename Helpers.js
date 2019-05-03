function show(item){
    var divToManipulate = document.getElementById(item);
    divToManipulate.style.display = "block";

}
function hide(item){
    var divToManipulate = document.getElementById(item);
    divToManipulate.style.display = "none";
}

function hideAlllExcept(one){
        if(one!="game"){
            game.pause();
        }
        var divToManipulate =document.getElementsByClassName('screens')
        for(i=0;i<divToManipulate.length;i++){
            divToManipulate[i].style.display = "none";
        }
        var divToManipulate = document.getElementById(one);
        divToManipulate.style.display = "block";
    }

function writeWhatPressed(e){
    if(window.event)
    {
        clearTheText(e);
        e.srcElement.value = e.key;
    }                   
    else if(e.which)  
    {
        clearTheText(e);               
        document.name = e.which;
    } 
}
function clearTheText(e){
    if (e.srcElement.value != "")
        e.srcElement.value = "";
}
        
        
function test(){
    alert("TESTING!");
}


function clickColor(hex, seltop, selleft, html5, idName) {
    if (html5 && html5 == 5)  {
        c = document.getElementById(idName).value;
    } 
    else {
        if (hex == 0)  {
            c = document.getElementById("entercolor").value;
        } else {
            c = hex;
        }
    }
    switch(idName){
        case "html5colorpicker5":
            gameSettings[5] = c;
            break;
        case "html5colorpicker15":
            gameSettings[6] = c;
            break;
        case "html5colorpicker25":
            gameSettings[7] = c;
            break;
    }
    
}
function startGame(){
    if(!gameRunning){
        gameRunning = true;
        game.start();
    }
    else{
        removeStartGameListener();
    }
}
function removeStartGameListener(){
    mainCanvas.removeEventListener('click', startGame);
    mainCanvas.addEventListener('click', game.pause);

}
function saveAllSettings(e){
    e.preventDefault();
}
$( function() {
    var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
  } );
