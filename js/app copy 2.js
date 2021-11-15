
const nombreEl = document.querySelector("#inputNombre");
const apellidoEl = document.querySelector("#inputApellido");
const emailEl = document.querySelector("#inputEmail");
const dniEl = document.querySelector("#inputDni");
const direcciónEl = document.querySelector("#inputDirección");
const edadEl = document.querySelector("#inputEdad");
const teléfonoEl = document.querySelector("#inputTeléfono");
const parentForm = document.querySelector("#datosFormularioCliente");

const verificarNombre = () => {

  let valid = false;

  const min = 3,
      max = 25;

  const nombre = nombreEl.value.trim();

  if (!isRequired(nombre)) {
      showError(nombreEl, 'Ingresar nombre');
  } else if (!isBetween(nombre.length, min, max)) {
      showError(nombreEl, `Nombre debe tener entre ${min} y ${max} caracteres.`)
  } else {
      showSuccess(nombreEl);
      valid = true;
  }
  return valid;
};

const verificarApellido = () => {

  let valid = false;

  const min = 3,
      max = 25;

  const apellido = apellidoEl.value.trim();

  if (!isRequired(apellido)) {
      showError(apellidoEl, 'Ingresar apellido');
  } else if (!isBetween(apellido.length, min, max)) {
      showError(apellidoEl, `Apellido debe tener entre ${min} y ${max} caracteres.`)
  } else {
      showSuccess(apellidoEl);
      valid = true;
  }
  return valid;
};

const verificarEmail = () => {

  let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Ingresar email.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email inválido.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const verificarDni = () => {

  let valid = false;

  const min = 7,
      max = 10;

  const dni = dniEl.value.trim();

  if (!isRequired(dni)) {
      showError(dniEl, 'Ingresar dni');
  } else if (!isBetween(dni.length, min, max)) {
      showError(dniEl, `dni debe tener entre ${min} y ${max} caracteres.`)
  } else {
      showSuccess(dniEl);
      valid = true;
  }
  return valid;
};

const verificarDirección = () => {

  let valid = false;

  const min = 3,
      max = 25;

  const dirección = direcciónEl.value.trim();

  if (!isRequired(dirección)) {
      showError(direcciónEl, 'Ingresar dirección');
  } else if (!isBetween(dirección.length, min, max)) {
      showError(direcciónEl, `Dirección debe tener entre ${min} y ${max} caracteres.`)
  } else {
      showSuccess(direcciónEl);
      valid = true;
  }
  return valid;
};

const verificarEdad = () => {

  let valid = false;

  const min = 1,
      max = 3;

  const edad = edadEl.value.trim();

  if (!isRequired(edad)) {
      showError(edadEl, 'Ingresar edad');
  } else if (!isBetween(edad.length, min, max)) {
      showError(edadEl, `Edad debe tener entre ${min} y ${max} caracteres.`)
  } else {
      showSuccess(edadEl);
      valid = true;
  }
  return valid;
};

const verificarTeléfono = () => {

  let valid = false;

  const min = 3,
      max = 10;

  const teléfono = teléfonoEl.value.trim();

  if (!isRequired(teléfono)) {
      showError(teléfonoEl, 'Ingresar teléfono');
  } else if (!isBetween(teléfono.length, min, max)) {
      showError(teléfonoEl, `Teléfono debe tener entre ${min} y ${max} caracteres.`)
  } else {
      showSuccess(teléfonoEl);
      valid = true;
  }
  return valid;
};


const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isEmailValid = (email) => {
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  
  const textBox = input.parentElement;
  textBox.classList.remove('success');
  textBox.classList.add('error');
  const error = textBox.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  
  const textBox = input.parentElement;
  textBox.classList.remove('error');
  textBox.classList.add('success');
  const error = textBox.querySelector('small');
  error.textContent = '';
}
    
      parentForm.addEventListener("submit", function(evt){
        evt.preventDefault();

        let nombreValido = verificarNombre(),
            apellidoValido = verificarApellido(),
            emailValido = verificarEmail(),
            dniValido = verificarDni(),
            direcciónValido = verificarDirección(),
            edadValido = verificarEdad(),
            teléfonoValido = verificarTeléfono()
        ;
        
        
        let formularioValido = nombreValido &&
            apellidoValido&&
            emailValido&&
            dniValido&&
            direcciónValido&&
            edadValido&&
            teléfonoValido;
        
        if (formularioValido) {

        }
       
      

        let parentPase = document.querySelector("#botonesRadioPase")
        parentPase.addEventListener("click", elegirOpcionPase)

        function elegirOpcionPase(evt){

          
          if (evt.target !== evt.currentTarget) {
            let clickedItem = evt.target.id;
            console.log(clickedItem);
                  }
            evt.stopPropagation();
        
      };

      let parentClase = document.querySelector("#botonesRadioClase")
        parentClase.addEventListener("click", elegirOpcionClase)

        function elegirOpcionClase(evt){

          
          if (evt.target !== evt.currentTarget) {
            let clickedItem = evt.target.id;
            console.log(clickedItem);
                  }
            evt.stopPropagation();
        
      };

      let parentMétodo = document.querySelector("#botonesRadioMétodo")
      parentMétodo.addEventListener("click", elegirOpcionMétodo)

      function elegirOpcionMétodo(evt){

        
        if (evt.target !== evt.currentTarget) {
          let clickedItem = evt.target.id;
          console.log(clickedItem);
                }
          evt.stopPropagation();
      
      };



      const etiquetaForm = document.querySelector(".contenidoModal")
      let numeroSocio = document.createElement("p"); 
      let guardarDni = document.querySelector("#inputDni").value;
      numeroSocio.innerHTML = `<h5>Número de socio: ${guardarDni}</h5>`;

      popModal.appendChild(numeroSocio);
 
      });

      parentForm.addEventListener('input', function (e) {
        switch (e.target.id) {
            case 'inputNombre':
                verificarNombre();
                break;
            case 'inputApellido':
                verificarApellido();
                break;
            case 'inputEmail':
                verificarEmail();
                break;
            case 'inputDni':
                verificarDni();
                break;
            case 'inputDirección':
                verificarDirección();
                break;
            case 'inputEdad':
                verificarEdad();
                  break;
            case 'inputTeléfono':
                verificarTeléfono();
                break;
                      }
    });
  //cierre del evento submit
      
     
     
   
      let toggleModal = () => {

        document.querySelector(".modal")
        .classList.toggle("modal--hidden");
      };

      document.querySelector("#btnRegistrar")
      .addEventListener("click", toggleModal);

      document.querySelector(".btnCierreModal")
      .addEventListener("click", toggleModal);

