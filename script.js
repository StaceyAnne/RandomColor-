







  document.getElementById("yes").onclick = function() {

    var color = [];

    for (var i = 0; i < 6; i++) {
      var number = Math.floor(Math.random() * 15 + 1);
      switch(number) {
        case 10:
        number = "a";
        break;
        case 11:
        number = "b";
        break;
        case 12:
        number = "c";
        break;
        case 13:
        number = "d";
        break;
        case 14:
        number = "e";
        break;
        case 15:
        number = "f";
        break;
      }
      color.push(number);
      var final = "#" + color.join('');
      document.querySelector('body').style.background = final;
      document.querySelector('p').innerHTML = final;
    }


    };
