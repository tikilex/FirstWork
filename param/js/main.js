    const blue = document.getElementById('blue');
    const red = document.getElementById('red');
    const purple = document.getElementById('purple');
    const green = document.getElementById('green');
    const pink = document.getElementById('pink');
    const yellow = document.getElementById('yellow');
    const colorText = document.getElementById('color-text')

    blue.style.background = "rgba(0, 38, 137, 0.69)";
    red.style.background = "rgba(92, 0, 0, 0.69)";
    purple.style.background = "rgba(86, 0, 197, 0.69)";
    green.style.background = "rgba(0, 92, 9, 0.69)";
    pink.style.background = "rgba(153, 0, 92, 0.69)";
    yellow.style.background = "rgba(255, 226, 74, 0.69)";
    
    blue.onclick = function(e) {
      if (blue.style.background === "rgba(0, 38, 137, 0.69)") {
        blue.style.background = "#0047ff"
        red.style.background = "rgba(92, 0, 0, 0.69)";
        purple.style.background = "rgba(86, 0, 197, 0.69)";
        green.style.background = "rgba(0, 92, 9, 0.69)";
        pink.style.background = "rgba(153, 0, 92, 0.69)";
        yellow.style.background = "rgba(255, 226, 74, 0.69)";
      }
      else (blue.style.background = "rgba(0, 38, 137, 0.69)")
      colorText.innerText = "blue";
      colorText.style.color = "#0047ff";
    }

    red.onclick = function(e) {
      if (red.style.background === "rgba(92, 0, 0, 0.69)") {
      red.style.background = "rgb(255, 0, 0)";
      blue.style.background = "rgba(0, 38, 137, 0.69)";
      purple.style.background = "rgba(86, 0, 197, 0.69)";
      green.style.background = "rgba(0, 92, 9, 0.69)";
      pink.style.background = "rgba(153, 0, 92, 0.69)";
      yellow.style.background = "rgba(255, 226, 74, 0.69)";
    }
      else (red.style.background = "rgba(92, 0, 0, 0.69)")
      colorText.innerText = "red"
      colorText.style.color = "rgb(255, 0, 0)";
    }

    purple.onclick = function(e) {
      if (purple.style.background === "rgba(86, 0, 197, 0.69)") {
        purple.style.background = "rgb(111, 0, 255)";
        blue.style.background = "rgba(0, 38, 137, 0.69)";
        red.style.background = "rgba(92, 0, 0, 0.69)";
        green.style.background = "rgba(0, 92, 9, 0.69)";
        pink.style.background = "rgba(153, 0, 92, 0.69)";
        yellow.style.background = "rgba(255, 226, 74, 0.69)";
      }
      else (purple.style.background = "rgba(86, 0, 197, 0.69)")
      colorText.innerText = "purple"
      colorText.style.color = "rgb(111, 0, 255)";
    }

    green.onclick = function(e) {
      if (green.style.background === "rgba(0, 92, 9, 0.69)") {
        green.style.background = "#03ff1c";
        pink.style.background = "rgba(153, 0, 92, 0.69)";
        yellow.style.background = "rgba(255, 226, 74, 0.69)";
        blue.style.background = "rgba(0, 38, 137, 0.69)";
        red.style.background = "rgba(92, 0, 0, 0.69)";
        purple.style.background = "rgba(86, 0, 197, 0.69)";
      }
      else (green.style.background = "rgba(0, 92, 9, 0.69)")
      colorText.innerText = "green"
      colorText.style.color = "#03ff1c";
    }

    pink.onclick = function(e) {
      if (pink.style.background === "rgba(153, 0, 92, 0.69)") {
        pink.style.background = "#ff049b";
        yellow.style.background = "rgba(255, 226, 74, 0.69)";
        blue.style.background = "rgba(0, 38, 137, 0.69)";
        red.style.background = "rgba(92, 0, 0, 0.69)";
        purple.style.background = "rgba(86, 0, 197, 0.69)";
        green.style.background = "rgba(0, 92, 9, 0.69)";
      }
      else (pink.style.background = "rgba(153, 0, 92, 0.69)")
      colorText.innerText = "pink"
      colorText.style.color = "#ff049b";
    }

    yellow.onclick = function(e) {
      if (yellow.style.background === "rgba(255, 226, 74, 0.69)") {
        yellow.style.background = "rgb(255, 225, 74)";
        blue.style.background = "rgba(0, 38, 137, 0.69)";
        red.style.background = "rgba(92, 0, 0, 0.69)";
        purple.style.background = "rgba(86, 0, 197, 0.69)";
        green.style.background = "rgba(0, 92, 9, 0.69)";
        pink.style.background = "rgba(153, 0, 92, 0.69)";
      }
      else (yellow.style.background = "rgba(255, 226, 74, 0.69)")
      colorText.innerText = "yellow"
      colorText.style.color = "rgb(255, 225, 74)";
    }