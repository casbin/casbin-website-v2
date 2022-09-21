(function() {
  localStorage.setItem("mainland", "false");
  const request = new XMLHttpRequest();
  request.open("GET", "https://oa.casbin.com/api/is-mainland-ip", false);
  request.send();
  const response = request.responseText;
  if (response === "true") {
    localStorage.setItem("mainland", "true");
  }
})();
