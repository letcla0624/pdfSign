// Message Modal
const messageTitle = document.querySelector(".messageTitle");
const messageText = document.querySelector(".messageText");

function messageShow(title, text) {
  const messageModal = new bootstrap.Modal(
    document.querySelector(".messageModal"),
    {
      keyboard: false,
    }
  );
  messageModal.show();
  messageTitle.textContent = title;
  messageText.textContent = text;
}

const submitBtn = document.querySelectorAll('button[type="submit"]');
submitBtn.forEach((item) => {
  item.addEventListener("click", (e) => e.preventDefault());
});
