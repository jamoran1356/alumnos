/*
Actividad Corte 1
Materia: Javascript
Sección N1113
Nombre: Jesús Morán
*/

//actividad #1
const alumnos = [
    { peso: 30, nombre: "Alice" },
    { peso: 35, nombre: "Valeria" },
    { peso: 38, nombre: "Andreina" },
    { peso: 45, nombre: "Bob" },
    { peso: 55, nombre: "Carol" },
    { peso: 53, nombre: "Andrea" },
    { peso: 65, nombre: "Dave" },
    { peso: 75, nombre: "Eve" },
    { peso: 60, nombre: "Jesus" },
    { peso: 65, nombre: "Luis" },
    { peso: 89, nombre: "Jonaikel" },
    { peso: 43, nombre: "Manuel" },
  ];
  
  const getPesoAlumnos = (pesoRange) => {
    return alumnos.filter((alumno) => {
      return alumno.peso >= pesoRange.min && alumno.peso <= pesoRange.max;
    });
  };
  
  const updateStatistics = () => {
    const menos40 = getPesoAlumnos({ min: 0, max: 40 });
    const d40a50 = getPesoAlumnos({ min: 40, max: 50 });
    const d50a60 = getPesoAlumnos({ min: 50, max: 60 });
    const masde60 = getPesoAlumnos({ min: 61, max:150 });
  
    document.getElementById("menos40").innerHTML = menos40.length;
    document.getElementById("40-50").innerHTML = d40a50.length;
    document.getElementById("50-60").innerHTML = d50a60.length;
    document.getElementById("mas60").innerHTML = masde60.length;
  };
  
  updateStatistics();

//Actividad #2
const porcentaje_interes = 15 / 100;
const deposito_inicial = 250;
let balance = deposito_inicial;

function calculateInterest() {
  let interesestotales = 0;
  for (let month = 1; month <= 12; month++) {
    balance += deposito_inicial;
    interesestotales += balance * porcentaje_interes;
  }

  document.getElementById("intereses").innerHTML = interesestotales;
}

calculateInterest();


//Actividad #3
const estudiantes = [];

function addStudent(id, nombre, cedula, matematica, fisica, programacion) {
  estudiantes.push({
    id,
    nombre,
    cedula,
    matematica,
    fisica,
    programacion,
  });
}

function calculateAverages() {
  const averages = {};
  for (const student of estudiantes) {
    for (const subject in student) {
      if (!averages[subject]) {
        averages[subject] = 0;
      }
      averages[subject] += student[subject];
    }
  }
  for (const subject in averages) {
    averages[subject] /= estudiantes.length;
  }
  return averages;
}

function calculatePassCounts() {
  const passCounts = {};
  for (const student of estudiantes) {
    let passed = true;
    for (const subject in student) {
      if (student[subject] < 10) {
        passed = false;
        break;
      }
    }
    if (passed) {
      if (!passCounts[passed.length]) {
        passCounts[passed.length] = 0;
      }
      passCounts[passed.length]++;
    }
  }
  return passCounts;
}

function renderestudiantes() {
  const averages = calculateAverages();
  const passCounts = calculatePassCounts();
  const table = document.getElementById("alumnos");
  table.innerHTML = "";
  for (const student of estudiantes) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.nombre}</td>
      <td>${student.cedula}</td>
      <td>${student.matematica}</td>
      <td>${student.fisica}</td>
      <td>${student.programacion}</td>
    `;
    table.appendChild(row);
  }

}

addStudent(1, "Andres",13563584, 10, 17, 20);
addStudent(2, "Camila",2356584, 08, 09, 12);
addStudent(3, "Carolina",3356784, 17, 05, 12);
addStudent(4, "Daniel",28363584, 20, 18, 20);
addStudent(5, "Karla",25563584, 16, 18, 14);
renderestudiantes();

//obtengo los valores individuales
function total_alumnos_aprobados() {
  let count = 0;
  for (const student of estudiantes) {
    if (student.matematica > 10 || student.fisica > 10 || student.programacion > 10) {
      count++;
    }
  }
  return count;
}

document.getElementById("aprobados").innerHTML = total_alumnos_aprobados();

function total_alumnos_aprobados_matematicas() {
  let count = 0;
  for (const student of estudiantes) {
    if (student.matematica > 10 ) {
      count++;
    }
  }
  return count;
}

document.getElementById("aprobados-matematicas").innerHTML = total_alumnos_aprobados_matematicas();


function total_alumnos_aprobados_fisica() {
  let count = 0;
  for (const student of estudiantes) {
    if (student.fisica > 10 ) {
      count++;
    }
  }
  return count;
}

document.getElementById("aprobados-fisica").innerHTML = total_alumnos_aprobados_fisica();


function total_alumnos_aprobados_programacion() {
  let count = 0;
  for (const student of estudiantes) {
    if (student.programacion > 10 ) {
      count++;
    }
  }
  return count;
}

document.getElementById("aprobados-programacion").innerHTML = total_alumnos_aprobados_programacion();



function total_alumnos_desaprobados_matematicas() {
  let count = 0;
  for (const student of estudiantes) {
    if (student.matematica < 10 ) {
      count++;
    }
  }
  return count;
}

document.getElementById("desaprobados-matematicas").innerHTML = total_alumnos_desaprobados_matematicas();


function total_alumnos_desaprobados_fisica() {
  let count = 0;
  for (const student of estudiantes) {
    if (student.fisica < 10 ) {
      count++;
    }
  }
  return count;
}

document.getElementById("desaprobados-fisica").innerHTML = total_alumnos_desaprobados_fisica();


function total_alumnos_desaprobados_programacion() {
  let count = 0;
  for (const student of estudiantes) {
    if (student.programacion < 10 ) {
      count++;
    }
  }
  return count;
}

document.getElementById("desaprobados-programacion").innerHTML = total_alumnos_desaprobados_programacion();



function total_alumnos_reprobados() {
  let count = 0;
  for (const student of estudiantes) {
    if (student.matematica < 10 || student.fisica < 10 || student.programacion < 10) {
      count++;
    }
  }
  return count;
}

document.getElementById("reprobados").innerHTML = total_alumnos_reprobados();


function nota_promedio_materia_matematica(){
  let notas = 0;
  for (const student of estudiantes) {
    notas += student.matematica;
  }
  const num_estudiantes = estudiantes.length;
  const promedio = notas / num_estudiantes;
  return promedio;
}

document.getElementById("promedio-matematicas").innerHTML = nota_promedio_materia_matematica();


function nota_promedio_materia_fisica(){
  let notas = 0;
  for (const student of estudiantes) {
    notas += student.fisica;
  }
  const num_estudiantes = estudiantes.length;
  const promedio = notas / num_estudiantes;
  return promedio;
}

document.getElementById("promedio-fisica").innerHTML = nota_promedio_materia_fisica();



function nota_promedio_materia_programacion(){
  let notas = 0;
  for (const student of estudiantes) {
    notas += student.programacion;
  }
  const num_estudiantes = estudiantes.length;
  const promedio = notas / num_estudiantes;
  return promedio;
}

document.getElementById("promedio-programacion").innerHTML = nota_promedio_materia_programacion();

function total_alumnos_1_materia(){
  let count = 0;
  for (const student of estudiantes) {
    if (student.matematica > 10 || student.fisica > 10 || student.programacion > 10) {
      count++;
    }
  }
  return count;
}
document.getElementById("1-materia").innerHTML = total_alumnos_1_materia();


function total_alumnos_2_materias(){
  let count = 0;
  for (const student of estudiantes) {
    let materiasaprobadas = 0;
    if (student.matematica > 10) materiasaprobadas++;
    if (student.fisica > 10) materiasaprobadas++;
    if (student.programacion > 10) materiasaprobadas++;
    if (materiasaprobadas >= 2) count++;
  }
  return count;
}

document.getElementById("2-materia").innerHTML = total_alumnos_2_materias();