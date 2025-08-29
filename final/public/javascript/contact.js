document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const response = document.getElementById("responseMsg");
    form.addEventListener("submit", async(e) => {
        e.preventDefault(); //avoid page reload while submitting

    const email = document.getElementById("emailInput").value;
    const subject = document.getElementById("subjectInput").value;
    const message = document.getElementById("messageInput").value;

    if (!email || !subject || !message) {
        response.innerText = "Please fill in all fields!";
        return;
    }

    try {
        //send POST req to backend
        const res = await fetch("/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, subject, message })
        });

        const data = await res.json();
        if (data.success) {
            response.innerText = "Message sent!";
            form.reset();
        } else {
            response.innerText = "Message not sent!";
        }
    } catch (err) {
            console.error(err);
        }
    });
});
