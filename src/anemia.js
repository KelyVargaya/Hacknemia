import rango from './rangos.js';

function diagnostico(condicion, edad, tipoEdad, hemoglobina, peso, pesoNacer, altura) {
    let prematuro = condicion === 'SI';
    console.log(hemoglobina);
    let factor = rango(altura);
    hemoglobina = hemoglobina - factor;
    console.log(hemoglobina);
    let edad_semanas = null;
    switch (tipoEdad) {
        case 'semanas':
            if (prematuro && edad < 9) {
                edad_semanas = edad;
            } else {
                edad = edad / 4;
            }
            break;
        case 'años':
            edad = edad * 12;
            break;
    }
    if (edad <= 36 && edad) {
        let resultado = false;
        let diagnostico = '';
        if (edad_semanas) {
            if (edad_semanas == 1) { //semanas
                resultado = hemoglobina <= 13;
            } else if (edad_semanas >= 2 && edad_semanas <= 4) {
                resultado = hemoglobina <= 10;
            } else if (edad_semanas >= 5 && edad_semanas <= 8) {
                resultado = hemoglobina <= 8;
            }
        } else {
            if (edad < 2) {//meses
                resultado = hemoglobina < 13.5;
            } else if (edad >= 2 && edad < 6) {
                resultado = hemoglobina < 9.5;
            } else if (edad >= 6 && edad <= 60) {
                resultado = hemoglobina < 11;

            }
        }
        diagnostico = resultado ? 'anemia' : 'sin anemia';
        let trat = tratamiento(diagnostico, peso, pesoNacer, edad);
        return [hemoglobina, diagnostico, trat];
    } else {
        return null;
    }
}

function tratamiento(diagnostico, peso, pesoNacer, edad) {
    let anemia = diagnostico === 'anemia';
    let medicina = null;
    let cantidadDia = null;
    let cantidadMes = null;
    if (edad <= 36) {
        if (edad < 6) {
            medicina = 'gotas';
            if (anemia) {
                if (pesoNacer === 'SI') {
                    if (peso >= 1 && peso <= 5) {
                        cantidadDia = 12;
                        cantidadMes = 1;
                    } else if (peso >= 6 && peso <= 8) {
                        cantidadDia = 17;
                        cantidadMes = 2;
                    }
                } else {
                    if (peso == 2) {
                        cantidadDia = 6;
                        cantidadMes = 1;
                    } else if (peso >= 3 && peso <= 5) {
                        cantidadDia = 15;
                        cantidadMes = 1;
                    } else if (peso >= 6 && peso <= 8) {
                        cantidadDia = 22;
                        cantidadMes = 2;
                    }
                }
            } else {
                if (peso >= 3 && peso <= 5) {
                    cantidadDia = 7;
                    cantidadMes = 1;
                } else if (peso >= 6 && peso <= 8) {
                    cantidadDia = 11;
                    cantidadMes = 1;
                }
            }
        } else {
            if (anemia) {
                medicina = 'jarabe';
                if (peso >= 9 && peso <= 11) {
                    cantidadDia = 1.5;
                    cantidadMes = 2;
                } else if (peso >= 12 && peso <= 14) {
                    cantidadDia = 2;
                    cantidadMes = 3;
                } else if (peso >= 15 && peso <= 17) {
                    cantidadDia = 3;
                    cantidadMes = 3;
                } else if (peso >= 18 && peso <= 20) {
                    cantidadDia = 3.5;
                    cantidadMes = 4;
                } else if (peso >= 21 && peso <= 28) {
                    cantidadDia = 4.5;
                    cantidadMes = 4;
                }
            } else {
                medicina = 'sobre(s)';
                if (edad >= 6 && edad < 12) {
                    cantidadDia = 1;
                    cantidadMes = 1;
                } else if (edad >= 12 && edad < 24) {
                    cantidadDia = 1;
                    cantidadMes = 2;
                } else if (edad >= 24 && edad <= 36) {
                    cantidadDia = 1;
                    cantidadMes = 3;
                }
            }
        }
        let resultado = cantidadDia && cantidadMes ?
            [medicina.toUpperCase(), `Tomar ${cantidadDia} ${medicina == 'jarabe' ? 'cdtas' : medicina} al día`,
            `Requiere ${cantidadMes} ${medicina == 'sobre(s)' ? 'caja(s)' : 'frasco(s)'} al mes`] : ['Datos incoherentes','',''];
        return resultado;
    }
}
export default diagnostico;