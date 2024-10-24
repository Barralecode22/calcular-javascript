const horarios = {
    "A": {horario: "9am", medico: "Fernando", consultorio: "A"},
    "B": {horario: "10am", medico: "Manuel", consultorio: "B"},
    "C": {horario: "11am", medico: "Matias", consultorio: "C"},
};

let horarioSeleccionado;

while (!horarios[horarioSeleccionado]) {
    horarioSeleccionado = prompt("Indica el horario para tu consulta médica:\n-A 9am-Fernando\n-B 10am-Manuel\n-C 11am-Matias");

    if (!horarios[horarioSeleccionado]) {
        alert("El horario seleccionado no está disponible. Intenta de nuevo.");
    }
}

console.log(`Médico: ${horarios[horarioSeleccionado].medico}`);
console.log(`Consultorio: ${horarios[horarioSeleccionado].consultorio}`);
console.log(`Horario: ${horarios[horarioSeleccionado].horario}`);

const cambiarMedico = prompt("¿Deseas cambiar de médico? (si/no)").toLowerCase();

if (cambiarMedico === "si" || cambiarMedico === "sí") {
    const nuevoMedico = prompt("Indica un nuevo médico:\n-A Fernando\n-B Manuel\n-C Matias").toLowerCase();

    const horarioEncontrado = Object.keys(horarios).find(horario => horarios[horario].medico.toLowerCase() === nuevoMedico);

    if (horarioEncontrado) {
        horarios[horarioSeleccionado].medico = horarios[horarioEncontrado].medico;
        console.log(`Has cambiado al médico ${horarios[horarioSeleccionado].medico} en el consultorio ${horarios[horarioSeleccionado].consultorio}.`);
        alert(`Has cambiado al médico ${horarios[horarioSeleccionado].medico}.`);
    } else {
        console.log("El médico seleccionado no está disponible.");
        alert("El médico seleccionado no está disponible. Intenta de nuevo.");
    }
}

const cambiarHorario = prompt("¿Deseas cambiar el horario? (si/no)").toLowerCase();

if (cambiarHorario === "si" || cambiarHorario === "sí") {
    let nuevoHorarioSeleccionado;

    while (!horarios[nuevoHorarioSeleccionado]) {
        nuevoHorarioSeleccionado = prompt(
            "Indica el nuevo horario para tu consulta médica:\n" +
            "-A 9am-Fernando\n-B 10am-Manuel\n-C 11am-Matias"
        );

        if (!horarios[nuevoHorarioSeleccionado]) {
            alert("El horario seleccionado no está disponible. Intenta de nuevo.");
        } else {
            horarioSeleccionado = nuevoHorarioSeleccionado;
        }
    }
}

const confirmacion = confirm(
    `Horario seleccionado: ${horarios[horarioSeleccionado].horario}\n` +
    `Médico: ${horarios[horarioSeleccionado].medico}\n` +
    `Consultorio: ${horarios[horarioSeleccionado].consultorio}\n\n` +
    "Si estás de acuerdo con todos los datos, presiona 'Aceptar'."
);

if (confirmacion) {
    alert("Tu consulta fue agendada correctamente.");
} else {
    alert("Tu consulta ha sido cancelada.");
}
