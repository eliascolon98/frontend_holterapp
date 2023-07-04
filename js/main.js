document.getElementById("menu-sw").addEventListener("click", toggleSidebarMenu);
document.getElementById("holter-user-sw").addEventListener("click", toggleUserMenu);

function toggleSidebarMenu() {
  var bodyElement = document.getElementsByTagName("BODY")[0];

  if (bodyElement.classList.contains("body--sidebar-open")) {
    bodyElement.classList.remove("body--sidebar-open");
  } else {
    bodyElement.classList.add("body--sidebar-open");
  }
}


function toggleUserMenu() {
  var user = document.getElementById("holter-user");

  if (user.classList.contains("hide")) {
    user.classList.remove("hide");
  } else {
    user.classList.add("hide");
  }
}

function fadeTransition(nww, oldw) {
  var newWindow = document.getElementById(nww);
  var oldWindow = document.getElementById(oldw);

  oldWindow.classList.add("fade-hide-animation");
  setTimeout(function () {
    oldWindow.classList.add("hide");
    newWindow.classList.remove("hide");
    newWindow.classList.remove("fade-hide-animation");
  }, 400);
}

// Input files 
let fileInput = document.getElementById("file-upload-input");
let fileSelect = document.getElementsByClassName("file-upload-select")[0];
fileSelect.onclick = function () {
  fileInput.click();
}
fileInput.onchange = function () {
  let filename = fileInput.files[0].name;
  let selectName = document.getElementsByClassName("file-select-name")[0];
  selectName.innerText = filename;
}


$("#dete_data").click(function () {
  Swal.fire({
    title: '¿Quieres eliminar esta solicitud?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar',
    denyButtonText: `Cancelar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Solicitud Eliminada!', '', 'success')
    }
  })
})
$("#save-request").click(function () {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Solicitud Guardada',
    showConfirmButton: false,
    timer: 1500
  })
})