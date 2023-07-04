document
  .getElementById("eye-password-sw")
  .addEventListener("click", toggleShowingPassword);
document
  .getElementById("to-forgot-sw")
  .addEventListener("click", toggleLoginForgot);
document
  .getElementById("to-login-sw")
  .addEventListener("click", toggleLoginForgot);

document
  .getElementById("sendcode")
  .addEventListener("click", toggleLoginForgotCode);

function toggleShowingPassword() {
  var eye_btn = document.getElementById("pass-eye-icon").classList;
  if (eye_btn.contains("fa-eye")) {
    document.getElementById("user-pass").setAttribute("type", "text");

    eye_btn.remove("fa-eye");
    eye_btn.add("fa-eye-slash");
  } else {
    document.getElementById("user-pass").setAttribute("type", "password");

    eye_btn.add("fa-eye");
    eye_btn.remove("fa-eye-slash");
  }
}

function toggleLoginForgot() {
  var login = document.getElementById("login").classList;

  if (login.contains("forgot")) {
    login.remove("forgot");
  } else {
    login.add("forgot");
  }
}

function toggleLoginForgotCode() {
  Swal.fire({
    icon: 'success',
    title: 'Código de recuperación',
    text: 'Se le ha enviado su nueva contraseña a correo electrónico asociado, no olvide cambiarla una vez ingrese.',
  })
}

$("#btn-login").click(function () {
  let username = $('#username').val();
  let password = $('#password').val();
  console.log(username, password);
  if (username == '' || password == '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops... Datos invalidos',
      text: 'Debe ingresar su nombre de usuario y contraseña.',
    })
  }

  if (username == 'admin' && password == '12345') {
    location.href = "admin/index.html";
  } else if (username == 'tecnico' && password == '12345') {
    location.href = "technical/index.html";
  } else if (username == 'salud' && password == '12345') {
    location.href = "health-center/index.html";
  } else if (username == 'medico' && password == '12345') {
    location.href = "doctor/index.html";
  }


})