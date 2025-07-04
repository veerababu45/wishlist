// Get elements
const wishinput = document.getElementById("wishinput");
const wishList = document.getElementById("wishList");

// Load wishlist from localStorage on page load
window.onload = function () {
    showWishes();
};

// Add a new wish
function addwish() {
    const wishText = wishinput.value.trim();

    if (wishText === "") {
        alert("Please type something");
        return;
    }

    const wishes = JSON.parse(localStorage.getItem("wishList")) || [];

    wishes.push({ text: wishText, completed: false });

    localStorage.setItem("wishList", JSON.stringify(wishes));

    wishinput.value = "";

    showWishes();
}

// Show the wishlist
function showWishes() {
    const wishes = JSON.parse(localStorage.getItem("wishList")) || [];

    wishList.innerHTML = "";

    for (let i = 0; i < wishes.length; i++) {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = wishes[i].text;

        if (wishes[i].completed) {
            li.classList.add("completed");
        }

        span.onclick = function () {
            toggleCompleted(i);
        };

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = function () {
            deleteWish(i);
        };

        li.appendChild(span);
        li.appendChild(delBtn);

        wishList.appendChild(li);
    }
}

// Toggle completed status
function toggleCompleted(index) {
    const wishes = JSON.parse(localStorage.getItem("wishList")) || [];
    wishes[index].completed = !wishes[index].completed;
    localStorage.setItem("wishList", JSON.stringify(wishes));
    showWishes();
}

// Delete a wish
function deleteWish(index) {
    const wishes = JSON.parse(localStorage.getItem("wishList")) || [];
    wishes.splice(index, 1);
    localStorage.setItem("wishList", JSON.stringify(wishes));
    showWishes();
}

// Add item when Enter key is pressed
wishinput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addwish();
    }
});
