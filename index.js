let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// SORT
dailyActivities.sort();
console.log(dailyActivities); 

//INDEX OF
const position = dailyActivities.indexOf('work');
console.log(position); // 2

// SLICE
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); 

// Imprimir todos los elementos de un array
console.log(dailyActivities.length)

for (let index = 0; index < dailyActivities.length; index++) {
     console.log("index: "+ index + " : "+ dailyActivities [index])
    }


//PUSH
dailyActivities.push("netflix")
console.log(dailyActivities)

// CONCAT
const routine = dailyActivities.concat(newRoutine);
console.log(routine); 

// Ejemplo 2: eliminar un elemento especifico del array

const bandasMusicales = ["Queen", "ACDC", "Metallica", "BSB", "Abba"];

function eliminarElemento(nombre) {
  let index = bandasMusicales.indexOf(nombre);
  if (index != -1) {
    bandasMusicales.splice(index, 1);
  }
}

let valorAEliminar = prompt("Ingrese nombre de una banda");
eliminarElemento(valorAEliminar);
console.log(bandasMusicales);