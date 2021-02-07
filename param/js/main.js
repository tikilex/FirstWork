    const blue = document.getElementById('blue');
    const red = document.getElementById('red');
    const purple = document.getElementById('purple');
    const green = document.getElementById('green');
    const pink = document.getElementById('pink');
    const yellow = document.getElementById('yellow');
    const colorText = document.getElementById('color-text')
    const mainPicture = document.getElementById('mp')
    const firstPicture = document.getElementById('fp')
    const secondPicture = document.getElementById('sp')
    const thirdPicture = document.getElementById('tp')

    blue.style.background = "rgba(0, 38, 137, 0.69)";
    red.style.background = "rgba(92, 0, 0, 0.69)";
    purple.style.background = "rgba(86, 0, 197, 0.69)";
    green.style.background = "rgba(0, 92, 9, 0.69)";
    pink.style.background = "rgba(153, 0, 92, 0.69)";
    yellow.style.background = "rgba(255, 226, 74, 0.69)";
    mainPicture.style.backgroundImage = "url('param/img/fp.png')"; 
    
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
  
    function swithImg() {
      const imgName = mainPicture.style.backgroundImage

      if (imgName === 'url("param/img/fp.png")') {
        setSecondImg();
      }

      if (imgName === 'url("param/img/sp.jpg")') {
        setThirdImg();
      }

      if (imgName === 'url("param/img/tp.jpg")') {
        setFirstImg();
      }
    }
    let timer = setInterval(swithImg, 5000)

    firstPicture.onclick = function() {
      clearInterval(timer);
      setFirstImg();
      setTimeout(() => { 
        timer = setInterval(swithImg, 5000)},10000)
    }

    secondPicture.onclick = function() {
      clearInterval(timer);
      setSecondImg();
      setTimeout(() => { 
        timer = setInterval(swithImg, 5000)},10000)
    }

    thirdPicture.onclick = function() {
      clearInterval(timer);
      setThirdImg();
      setTimeout(() => { 
        timer = setInterval(swithImg, 5000)},10000)
    }
   
    function setFirstImg() {
      mainPicture.style.backgroundImage = "url('param/img/fp.png')"
    }

    function setSecondImg() {
      mainPicture.style.backgroundImage = "url('param/img/sp.jpg')"
    }

    function setThirdImg() {
      mainPicture.style.backgroundImage = "url('param/img/tp.jpg')"
    }