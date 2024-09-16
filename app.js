//------------------//
// 1- Almacenar todas las variables necesarias.
// 2- Crear funcion init.
// 3- Al apretar el botón , deberán capturar el valor ingresado en el input (Que será un número) 
// mediante el evento "submit".
// 4- Si el número ingresado en el input es valido(existe una pizza cuyo id coincida con el número ingresado en el input), se deberá renderizar en el contenedor una card con 
// los datos de la pizza cuyo id coincida con el número ingresado en el input.
// 5- Si el número ingresado no coincide con ningún id, renderizar (no sirve un alert) un mensaje de error en el contenedor.
// 6- Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor. 
// 7-Solo debe renderizarse una única cosa , ya sea la nueva pizza, o el nuevo mensaje de error. 
// 9- Estilar las cards que tengo que mostrar


const pizzas = [
    {
      id: 1,
      nombre: "Pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
      imagen:  "./img/muzzarella.png",
    },
  
    {
      id: 2,
      nombre: "Pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
      imagen: "./img/cebolla.png",
    },
  
    {
      id: 3,
      nombre: "Pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
      imagen: "./img/4quesos.png",
    },
  
    {
      id: 4,
      nombre: "Pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
      imagen: "./img/especial.png",
    },
  
    {
      id: 5,
      nombre: "Pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
      imagen: "./img/anana.png",
    }
 ];

 const formContainer = document.querySelector(".formContainer");
 const resultContainer = document.querySelector(".resultContainer");
 const addForm = document.querySelector(".add-Form");
 const pizzaInput = document.querySelector(".pizzainput");
 
 const init = () => {
   addForm.addEventListener("submit", function(e) {
     e.preventDefault();
     addTask();
   });
 
   // Al cargar la página,mostrar la última pizza guardada
   const savedPizza = localStorage.getItem('lastPizza');
   const pizza = JSON.parse(savedPizza);
   if (savedPizza) {
     renderPizza(pizza);
   }
 };
 
 function addTask() {
   const pizzaId = pizzaInput.value.trim(); 
   //Si el campo está vacío, no permitir continuar
   if (!pizzaId) {
     resultContainer.innerHTML = "<h4>ERROR: Ingresá un ID </h4>";
     return;
   }
 
    const pizzaIdNumber = parseInt(pizzaId, 10); // Convertir a número
    const pizza = pizzas.find(pizza => pizza.id === pizzaIdNumber); // Buscar la pizza por ID
 
   if (pizza) {
     // Renderizar la pizza encontrada
     renderPizza(pizza);
 
     // Guardar la pizza en LocalStorage
     localStorage.setItem('lastPizza', JSON.stringify(pizza));
   } else {
     // Mensaje de error
     resultContainer.innerHTML = "<h4>ERROR:<br>No se encontró una pizza con ese ID. Ingrese un número del 1 al 5</h4>";
   }
 }
 
 function renderPizza(pizza) {
   // Función para mostrar la pizza en la página
   resultContainer.innerHTML = `
     <div class="pizza-card-container">
       <div class="pizza-card"> 
         <h2>${pizza.nombre}</h2>
         <p>Precio: $${pizza.precio}</p>
         <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
         <img src="${pizza.imagen}">
       </div>
     </div>
   `;

 }
init() 
