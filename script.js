document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const dataList = document.getElementById("dataList");
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${name}, Email: ${email}, Message: ${message}`;
    dataList.appendChild(listItem);

    document.getElementById("dataForm").reset();
});
