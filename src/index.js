let emails = [];

function guardarEmail() {
    let inputEmail = document.getElementById("email").value;
    if (inputEmail !== "") {
        emails.push(inputEmail);
        document.getElementById("emailsGuardados").innerHTML = "Emails guardados: " + emails.join(", ");
    }
}