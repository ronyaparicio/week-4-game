$('document').ready(function() {
  var button1 = 0;
  var button2 = 0;
  var button3 = 0;
  var button4 = 0;
  var randomNumber = 0;
  var wins = 0;
  var yourNumber;
  //generate random number and values for buttons
  function startGame() {
    button1 = Math.floor((Math.random() * 12) + 1);
    button2 = Math.floor((Math.random() * 12) + 1);
    button3 = Math.floor((Math.random() * 12) + 1);
    button4 = Math.floor((Math.random() * 12) + 1);
    randomNumber = Math.floor((Math.random()*120)+19);
    yourNumber = 0;

    $("#randomNumber").html(randomNumber);
    $("#yourNumber").html(yourNumber);
    $('#button1').attr('value', button1);
    $('#button2').attr('value', button2);
    $('#button3').attr('value', button3);
    $('#button4').attr('value', button4);
  }
  startGame();

  $(".buttons").on("click", function() {

    if (yourNumber === randomNumber) {
      wins++;
      startGame();

    }
    else if (yourNumber>randomNumber) {
      lose++;
      startGame();
    }
    else {
      yourNumber = parseInt(this.value) + parseInt(yourNumber);
      $("#yourNumber").html(yourNumber);
    }

  })











});
