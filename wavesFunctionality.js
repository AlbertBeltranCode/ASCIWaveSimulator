// Obtener los elementos HTML donde se mostrarán las olas y los sliders
const waveContainer = document.getElementById('wave');
const amplitudeSlider = document.getElementById('amplitude');
const frequencySlider = document.getElementById('frequency');

// Variables para almacenar el valor de la altura y la velocidad de la ola
let waveHeight = amplitudeSlider.value;
let waveSpeed = frequencySlider.value;
let frame = 0; // Variable para controlar los frames de la animación

// Función que genera la ola basada en la amplitud (altura) y frecuencia (velocidad)
function generateWave(amplitude, frequency) {
    let wave = ''; // Aquí se almacenarán las líneas de la ola
    const width = 40; // Ancho de la ola en caracteres (puedes modificar este valor)

    // Crear cada línea de la ola
    for (let i = 0; i < 10; i++) { // 10 líneas para simular la altura vertical
        let line = ''; // Variable para almacenar una línea de la ola

        for (let j = 0; j < width; j++) {
            // Calcular la altura de la ola usando una función seno
            const height = Math.sin((j + frame) / frequency) * amplitude;

            // Si la altura coincide con la línea actual, dibujar una ola (~)
            if (Math.round(height) === i) {
                line += '~';
            } else {
                line += ' '; // De lo contrario, dejar un espacio
            }
        }

        // Añadir la línea a la variable wave y pasar a la siguiente
        wave += line + '\n';
    }

    // Mostrar la ola en el contenedor de wave
    waveContainer.textContent = wave;
}

// Función que se ejecuta cuando los sliders cambian para actualizar la ola
function updateWave() {
    waveHeight = amplitudeSlider.value; // Actualizar la amplitud
    waveSpeed = frequencySlider.value;  // Actualizar la frecuencia
}

// Función para animar las olas, se llama en cada frame
function animateWave() {
    updateWave(); // Actualizar los valores de los sliders
    generateWave(waveHeight, waveSpeed); // Generar la ola
    frame++; // Incrementar el frame para que la ola se mueva
    requestAnimationFrame(animateWave); // Llamar la función de nuevo en el siguiente frame
}

// Event listeners para detectar cuando los sliders cambian
amplitudeSlider.addEventListener('input', updateWave);
frequencySlider.addEventListener('input', updateWave);

// Iniciar la animación de la ola
animateWave();