function genQR() {
    var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myimg = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value;
    var mysize = document.getElementById("size").value;
  
    if (mytext !== "") {
      switch (mysize) {
        case "100":
          myimg.src = gapi + "100x100" + "&chl=" + mytext;
          break;
        case "150":
          myimg.src = gapi + "150x150" + "&chl=" + mytext;
          break;
        case "200":
          myimg.src = gapi + "200x200" + "&chl=" + mytext;
          break;
        case "250":
          myimg.src = gapi + "250x250" + "&chl=" + mytext;
          break;
        case "300":
          myimg.src = gapi + "300x300" + "&chl=" + mytext;
          break;
        default:
          alert("Looks like no text there :)");
      }
    }
  }
  