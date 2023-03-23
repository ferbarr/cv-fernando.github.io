// Seleccionar formulario e input
const form = document.querySelector("#formulario"); //Mandar llamar al formulario
const input = document.querySelector("#comentario"); //Mandar llamar al input
const boton = document.querySelector("#boton"); //Mandar llamar al boton

form.addEventListener("submit", async (e) => {
  // Agregra evento al formulario de tipo submit
  e.preventDefault(); //Para evitar que se recargue la pagina
  const valor = input.value; //Guardar el valor escrito en el input
  try {
    boton.disabled = true; //Deshabilitamos el boton
    const res = await fetch(
      //Realizar peticion
      "https://curriculum-fer-default-rtdb.firebaseio.com/cv.json",
      {
        method: "POST", //Indicamos el metodo de la peticion
        headers: {
          "Content-Type": "application/json", //Indicamos el tipo de datos
        },
        body: JSON.stringify(valor), //Mandamos el valor de input en formato JSON
      }
    );
    input.value = ""; //Vaciamos el valor del input
    alert("Gracias por sus comentarios"); //Mostramos alerta
  } catch (e) {
    //En caso de error lo muestra en la consola
    console.log(e);
  } finally {
    boton.disabled = false; //Habilitamos otra vez el boton
  }
});
