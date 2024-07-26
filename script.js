let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

var form = document.querySelector("form");

// Menambahkan event listener untuk submit form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman form

  // Memeriksa apakah form masih kosong
  if (isFormEmpty()) {
    alert("Formulir tidak boleh kosong!");
  } else {
    // Jika form sudah diisi, tampilkan popup alert
    alert("Form submitted!");
    form.reset();
  }
});

// Fungsi untuk memeriksa apakah form masih kosong
function isFormEmpty() {
  var inputs = form.querySelectorAll(
    'input[type="text"], input[type="email"], textarea'
  );
  var isEmpty = false;

  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      isEmpty = true;
    }
  });

  return isEmpty;
}
