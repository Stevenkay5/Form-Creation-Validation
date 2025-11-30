document.addEventListener("DOMContentLoaded", () => {
    fetchUserData();
});

async function fetchUserData() {
    // 1. API URL
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    // 2. Select the container
    const dataContainer = document.getElementById("api-data");

    try {
        // 3. Fetch user data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 4. Clear the loading text
        dataContainer.innerHTML = "";

        // 5. Create a list
        const userList = document.createElement("ul");

        // 6. Add each user as <li>
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // 7. Add the list to the page
        dataContainer.appendChild(userList);

    } catch (error) {
        // 8. Handle fetch errors
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data.";
    }
}
