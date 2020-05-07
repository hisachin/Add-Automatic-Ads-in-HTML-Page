(function () {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3010/api/ads", true);
  xhttp.send();
  xhttp.onreadystatechange = renderImg;

  function renderImg() {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        const resData = JSON.parse(xhttp.responseText);
        document.getElementById("doceree-ad-1").innerHTML =
        '<img src="http://localhost:3010/public/images/' +
        resData.data +
        '" />';
      } else {
        alert("There was a problem with the request.");
      }
    }
  }
})();
