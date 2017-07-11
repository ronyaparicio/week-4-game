$('document').ready(function() {
  var button1 = 0;
  var button2 = 0;
  var button3 = 0;
  var button4 = 0;
  var randomNumber =0;
  var wins = 0;
  //generate random number and values for buttons
  function startGame() {
    button1 = Math.floor((Math.random() * 12) + 1);
    button2 = Math.floor((Math.random() * 12) + 1);
    button3 = Math.floor((Math.random() * 12) + 1);
    button4 = Math.floor((Math.random() * 12) + 1);
    randomNumber = Math.floor((Math.random()*120)+19);
  }
  startGame();
  //assign values to html
  document.getElementById('button1') = button1;





});
