const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            successMessage.style.display = "block";
            form.reset();
        }
    })
    .catch(error => {
        console.error("Erreur lors de l’envoi :", error);
    });
});
