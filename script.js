function changeHeading() {
    document.getElementById("mainHeading").textContent = "Welcome to Our Book Corner!";
}

function changeColour() {
    document.getElementById("book1").style.backgroundColor = "yellow";
}

function hideBooks() {
    document.getElementById("featuredBooks").classList.toggle("hide");
}

function requestBook(buttonId, messageId) {
    document.getElementById(buttonId).textContent = "Request Sent";
    document.getElementById(messageId).textContent = "Your request has been sent!";
}

function showBook() {
    var title = document.getElementById("bookTitle").value;

    if (title == "") {
        document.getElementById("bookResult").textContent = "";
        document.getElementById("bookMessage").textContent = "Please enter a book title.";
        document.getElementById("bookMessage").style.color = "red";
    } else {
        document.getElementById("bookResult").textContent = "Book Title: " + title;
        document.getElementById("bookMessage").textContent = "Book title submitted successfully.";
        document.getElementById("bookMessage").style.color = "green";
    }
}

function changeBook() {
    document.getElementById("book4").style.backgroundColor = "yellow";
}

function submitBook() {
    var name = document.getElementById("studentName").value;
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var category = document.getElementById("category").value;
    var condition = document.getElementById("condition").value;

    if (name == "" || title == "" || author == "" || category == "" || condition == "") {
        document.getElementById("formMessage").textContent = "Please fill in all the fields.";
        document.getElementById("formMessage").style.color = "red";
    } else {
        document.getElementById("formMessage").textContent = "Thank you, " + name + "! Your book '" + title + "' has been listed successfully.";
        document.getElementById("formMessage").style.color = "green";
    }

    return false;
}

function changeFontSize() {
    document.getElementById("formHeading").style.fontSize = "30px";
}

function hideForm() {
    document.getElementById("bookForm").classList.toggle("hide");
}