var ulEl = document.getElementsByTagName("ul");
var local = JSON.parse(localStorage.getItem("list")) || [];
for (var i = 0; i < local.length; i++) {
  var element = local[i];
  var liEl = document.createElement("li");
  liEl.textContent = element;
  ulEl[0].appendChild(liEl);
}

var clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
})