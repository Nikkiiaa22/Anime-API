const apiContent = document.getElementById("api-content");
const button = document.getElementById("next-frase");

function getFrase() {
    fetch("https://katanime.vercel.app/api/getrandom")
        .then(res => res.json())
        .then(data => {
            const frase = data.result[0]; // viene dentro de un array

            apiContent.innerHTML = `
                <p><strong>Anime:</strong> ${frase.anime}</p>
                <p><strong>Personaje:</strong> ${frase.character}</p>
                <p class="quote">"${frase.english}"</p>
            `;
        })
        .catch(err => {
            apiContent.innerHTML = "<p>Error al cargar la frase 😢</p>";
            console.error("Error en la API:", err);
        });
}

getFrase();
button.addEventListener("click", getFrase);
