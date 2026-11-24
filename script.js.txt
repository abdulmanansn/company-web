async function addUser() {
    const name = document.getElementById("name").value;

    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
    });

    const result = await response.json();

    document.getElementById("message").innerText = result.message;
}