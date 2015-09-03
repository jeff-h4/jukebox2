// promptAndPlay
//
// Prompts the user to enter a song.
// Plays the entered song.
// Repeats when the song is complete.
//
//
$(document).ready(function() {
  var promptAndPlay = function() {
    var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");
    var song = parseSong(songString);
    $("button").html("Playing...");
    $("button").attr("disabled",true);
    playSong(song, 500, function(){
      $("button").html("Play Song");
      $("button").attr("disabled",false);
    });
  };
  
  // Get things going.
  //promptAndPlay();
  $("button").on("click", function(){ 
    promptAndPlay();
  });
});
