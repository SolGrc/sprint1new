// Variables para el estado del modo oscuro y del idioma
var darkModeEnabled = false;
var spanishLanguage = true;

// Referencias a elementos
var accessButton = document.getElementById("access-button");
var languageButton = document.getElementById("languageButton");
var darkModeButton = document.getElementById("darkModeButton");
var aceptoCheckbox = document.getElementById("acepto");
var loginContainer = document.getElementById("login-container");
var registerButton = document.getElementById("register-button");
var forgotPasswordLink = document.getElementById("forgot-password-link");
var loginForm = document.getElementById("login-form");
var documentNumberInput = document.getElementById("document-number");

// Función para alternar el modo oscuro
function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;
    document.body.classList.toggle("dark-mode", darkModeEnabled);
}

// Función para alternar el idioma
function toggleLanguage() {
    spanishLanguage = !spanishLanguage;
    var languageButtonText = spanishLanguage ? "Language" : "Cambiar Idioma";
    languageButton.textContent = languageButtonText;
}

// Función para cambiar el idioma
function changeLanguage() {
    var selectedLanguage = languageButton.value;
    if (selectedLanguage === "ES") {
        spanishLanguage = true;
    } else if (selectedLanguage === "ENG") {
        spanishLanguage = false;
    }
    toggleLanguage(); // Actualizar el texto del botón de idioma
}

// Función para redirigir a la página de inicio de sesión
function redirectToLogin() {
    window.location.href = "/inicio.html"; // BOTON ACCESO
}







// Evento para el botón de ingresar
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Aquí puedes realizar la validación de los campos si es necesario
    var dniInput = document.getElementById("dni");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    
    if (dniInput.value === "" || usernameInput.value === "" || passwordInput.value === "") {
        alert("Todos los campos son requeridos.");
        return;
    }
    
    // Redirigir al archivo "inicio.html" en el mismo directorio
    window.location.href = "inicio.html";
});








var aceptarButton = document.getElementById("aceptar-button");
var inicioButton = document.getElementById("inicio");

aceptarButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var dniInput = document.getElementById("dni");
    var emailInput = document.getElementById("email");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var aceptoCheckbox = document.getElementById("acepto");
    
    if (dniInput.value === "" || emailInput.value === "" || usernameInput.value === "" || passwordInput.value === "" || !aceptoCheckbox.checked) {
        alert("Por favor, completa todos los campos y acepta los términos y condiciones.");
        return;
    }
    
    // Redirigir al HTML "inicio-de-sesión.html"
    window.location.href = "inicio-de-sesión.html";
});

inicioButton.addEventListener("click", function(event) {
    // Redirigir al archivo "inicio.html"
    window.location.href = "inicio.html";
});





































// Función para cambiar entre formularios
function switchForm(formToShow) {
    loginForm.classList.add("hidden");
    registerForm.classList.add("hidden");
    forgotPasswordForm.classList.add("hidden");
    formToShow.classList.remove("hidden");
}

// Agregar eventos a los elementos
darkModeButton.addEventListener("click", toggleDarkMode);
languageButton.addEventListener("click", toggleLanguage);
accessButton.addEventListener("click", redirectToLogin);
registerButton.addEventListener("click", redirectToRegister);
forgotPasswordLink.addEventListener("click", () => switchForm(forgotPasswordForm));

// Función para habilitar/deshabilitar el botón de registro según el checkbox
function toggleSubmitButton() {
    var aceptarButton = document.querySelector("button[type='submit']");
    aceptarButton.disabled = !aceptoCheckbox.checked;
}

// Función para simular acción al hacer clic en el label
function simulateAction() {
    window.location.href = "/términos-condiciones.html";
}

// Función para validar el formulario de registro
function validarFormulario() {
    var dniInput = document.getElementById("dni");
    var emailInput = document.getElementById("email");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    if (dniInput.value === "" || emailInput.value === "" || usernameInput.value === "" || passwordInput.value === "") {
        alert("Todos los campos son requeridos.");
        return false;
    }

    if (!aceptoCheckbox.checked) {
        alert("Debes aceptar los términos y condiciones.");
        return false;
    }
}

// Función para limpiar el número de documento
function clearDocumentNumber() {
    documentNumberInput.value = "";
}

// Función para mostrar el contenedor de inicio de sesión
function showLoginContainer() {
    window.scrollTo({
        top: loginContainer.offsetTop,
        behavior: "smooth"
    });
    loginContainer.style.display = "block";
}

// Función para mostrar mensajes de éxito
function showSuccessMessage(message) {
    alert(message);
}

// Agregar eventos a los elementos
// ...

// Eventos para los formularios y acciones
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Lógica de validación y inicio de sesión
    showSuccessMessage("¡Inicio de sesión exitoso!");
});

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Lógica de registro
    showSuccessMessage("¡Registro exitoso!");
});

forgotPasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Lógica de recuperación de contraseña
    showSuccessMessage("¡Correo de recuperación enviado!");
});



















