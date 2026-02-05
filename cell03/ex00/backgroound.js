document.getElementById('btn').addEventListener('click', function () {
  var hex = '#';
  var chars = '0123456789ABCDEF';
  for (var i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = hex;
});