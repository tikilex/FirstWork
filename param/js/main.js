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
    
    blue.onclick = function() {
      if (blue.style.background === "rgba(0, 38, 137, 0.69)") {
        reset();
        blue.style.background = "#0047ff"
        colorText.innerText = "blue";
        colorText.style.color = "#0047ff";
      }
      else {
        blue.style.background = "rgba(0, 38, 137, 0.69)";
        colorText.innerText = "white";
        colorText.style.color = "#ffffff";
      }
      
    }

    red.onclick = function() {
      if (red.style.background === "rgba(92, 0, 0, 0.69)") {
      reset();
      red.style.background = "rgb(255, 0, 0)";
      colorText.innerText = "red"
      colorText.style.color = "rgb(255, 0, 0)";
    }
      else {
        red.style.background = "rgba(92, 0, 0, 0.69)"
        colorText.innerText = "white";
        colorText.style.color = "#ffffff";
      }
    }

    purple.onclick = function() {
      if (purple.style.background === "rgba(86, 0, 197, 0.69)") {
        reset();
        purple.style.background = "rgb(111, 0, 255)";
        colorText.innerText = "purple"
        colorText.style.color = "rgb(111, 0, 255)";
      }
      else {
        purple.style.background = "rgba(86, 0, 197, 0.69)"
        colorText.innerText = "white";
        colorText.style.color = "#ffffff";
      }
    }

    green.onclick = function() {
      if (green.style.background === "rgba(0, 92, 9, 0.69)") {
        reset();
        green.style.background = "#03ff1c";
        colorText.innerText = "green"
        colorText.style.color = "#03ff1c";
      }
      else {
        green.style.background = "rgba(0, 92, 9, 0.69)"
        colorText.innerText = "white";
        colorText.style.color = "#ffffff";
      }
    }

    pink.onclick = function() {
      if (pink.style.background === "rgba(153, 0, 92, 0.69)") {
        reset();
        pink.style.background = "#ff049b";
        colorText.innerText = "pink"
        colorText.style.color = "#ff049b";
      }
      else {
        pink.style.background = "rgba(153, 0, 92, 0.69)"
        colorText.innerText = "white";
        colorText.style.color = "#ffffff";
      }
    }

    yellow.onclick = function() {
      if (yellow.style.background === "rgba(255, 226, 74, 0.69)") {
        reset();
        yellow.style.background = "rgb(255, 225, 74)";
        colorText.innerText = "yellow"
        colorText.style.color = "rgb(255, 225, 74)";
      }
      else {
        yellow.style.background = "rgba(255, 226, 74, 0.69)"
        colorText.innerText = "white";
        colorText.style.color = "#ffffff";
      }
    }
    function reset(){
      yellow.style.background = "rgba(255, 226, 74, 0.69)";
      blue.style.background = "rgba(0, 38, 137, 0.69)";
      red.style.background = "rgba(92, 0, 0, 0.69)";
      purple.style.background = "rgba(86, 0, 197, 0.69)"
      green.style.background = "rgba(0, 92, 9, 0.69)"
      pink.style.background = "rgba(153, 0, 92, 0.69)"
    }