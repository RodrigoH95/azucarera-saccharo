const form = document.getElementById("contacto");



form.addEventListener("submit", (e) => {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("correo").value;
  const localidad = document.getElementById("localidad").value;
  const asunto = document.getElementById("asunto").value;
  const comentario = document.getElementById("comentario").value;

  const error = document.getElementById("error");

  const MENSAJES = [];
  error.innerText = "";
  if (!isValid(nombre)) {
    MENSAJES.push("*Por favor, introduzca un nombre válido");
  }

  if (!isValid(apellido)) {
    MENSAJES.push("*Por favor, introduzca un apellido válido");
  }

  if (!isValid(email)) {
    MENSAJES.push("*Por favor, introduzca su correo electrónico");
  }

  if (!email.includes("@")) {
    MENSAJES.push("*La dirección de correo electrónico debe contener @");
  }

  if (email.slice(-4) !== '.com' && email.slice(-3) !== '.ar') {
      MENSAJES.push("*La dirección de correo electrónico debe pertenecer a un dominio válido (.com, .ar)");
  };

  if (!isValid(localidad)) {
    MENSAJES.push("*Por favor incluya una localidad válida");
  }

  if(!isValid(asunto)) {
      MENSAJES.push("*Por favor seleccione un asunto");
  }

  if (!isValid(comentario) || comentario.length < 10) {
    MENSAJES.push("*Su mensaje debe contener al menos 10 caracteres");
  }

  if (MENSAJES.length > 0) {
    e.preventDefault();
    error.innerText = MENSAJES.join("\n");
  }
});


function isValid(element) {
    return element !== '' && element !== null;
}