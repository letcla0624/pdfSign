"use strict";

// Message Modal
var messageTitle = document.querySelector(".messageTitle");
var messageText = document.querySelector(".messageText");

function messageShow(title, text) {
  var messageModal = new bootstrap.Modal(document.querySelector(".messageModal"), {
    keyboard: false
  });
  messageModal.show();
  messageTitle.textContent = title;
  messageText.textContent = text;
}

var submitBtn = document.querySelectorAll('button[type="submit"]');
submitBtn.forEach(function (item) {
  item.addEventListener("click", function (e) {
    return e.preventDefault();
  });
});
//# sourceMappingURL=all.js.map
