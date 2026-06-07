const api = {
    baseURL: "https://jsonplaceholder.typicode.com",

    async getUsers() {
        const response =
            await fetch(`${this.baseURL}/users`);

        if (!response.ok)
            throw new Error("Load users failed");

        return response.json();
    },

    async getUser(id) {
        const response =
            await fetch(`${this.baseURL}/users/${id}`);

        if (!response.ok)
            throw new Error("Load user failed");

        return response.json();
    },

    async createUser(data) {
        const response = await fetch(
            `${this.baseURL}/users`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        if (!response.ok)
            throw new Error("Create failed");

        return response.json();
    },

    async updateUser(id, data) {
        const response = await fetch(
            `${this.baseURL}/users/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        if (!response.ok)
            throw new Error("Update failed");

        return response.json();
    },

    async deleteUser(id) {
        const response = await fetch(
            `${this.baseURL}/users/${id}`,
            {
                method: "DELETE"
            }
        );

        if (!response.ok)
            throw new Error("Delete failed");

        return true;
    }
};

const ui = {
    renderUsers(users) {
        userTable.innerHTML = users
            .map(
                user => `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>

                    <td>
                        <button
                            class="btn btn-warning btn-sm"
                            onclick="editUser(${user.id})"
                        >
                            Edit
                        </button>

                        <button
                            class="btn btn-danger btn-sm"
                            onclick="deleteUser(${user.id})"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            `
            )
            .join("");
    },

    showLoading() {
        loading.innerHTML = `
            <div class="placeholder-glow mb-3">
                <span class="placeholder col-12"></span>
                <span class="placeholder col-12"></span>
                <span class="placeholder col-12"></span>
            </div>
        `;
    },

    hideLoading() {
        loading.innerHTML = "";
    },

    showError(message) {
        toastContainer.innerHTML = `
            <div class="alert alert-danger">
                ${message}
            </div>
        `;
    },

    showSuccess(message) {
        toastContainer.innerHTML = `
            <div class="alert alert-success">
                ${message}
            </div>
        `;
    }
};

const userTable =
    document.getElementById("userTable");

const loading =
    document.getElementById("loading");

const toastContainer =
    document.getElementById("toastContainer");

const searchInput =
    document.getElementById("searchInput");

const userForm =
    document.getElementById("userForm");

const userId =
    document.getElementById("userId");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

let users = [];

async function loadUsers() {
    try {
        ui.showLoading();

        users = await api.getUsers();

        ui.renderUsers(users);
    }
    catch (error) {
        ui.showError(error.message);
    }
    finally {
        ui.hideLoading();
    }
}

userForm.addEventListener(
    "submit",
    async function (e) {
        e.preventDefault();

        const id = userId.value;

        const userData = {
            name: nameInput.value,
            email: emailInput.value
        };

        try {
            if (id) {
                await api.updateUser(
                    id,
                    userData
                );

                users = users.map(user =>
                    user.id == id
                        ? {
                              ...user,
                              ...userData
                          }
                        : user
                );

                ui.showSuccess(
                    "User updated"
                );
            } else {
                const newUser =
                    await api.createUser(
                        userData
                    );

                newUser.id =
                    users.length + 1;

                users.unshift(newUser);

                ui.showSuccess(
                    "User created"
                );
            }

            ui.renderUsers(users);

            userForm.reset();

            userId.value = "";
        }
        catch (error) {
            ui.showError(error.message);
        }
    }
);

async function editUser(id) {
    try {
        const user =
            await api.getUser(id);

        userId.value = user.id;
        nameInput.value = user.name;
        emailInput.value = user.email;
    }
    catch (error) {
        ui.showError(error.message);
    }
}

async function deleteUser(id) {
    const confirmDelete =
        confirm(
            "Are you sure?"
        );

    if (!confirmDelete) return;

    try {
        await api.deleteUser(id);

        users = users.filter(
            user => user.id !== id
        );

        ui.renderUsers(users);

        ui.showSuccess(
            "User deleted"
        );
    }
    catch (error) {
        ui.showError(error.message);
    }
}

searchInput.addEventListener(
    "input",
    function () {
        const keyword =
            this.value.toLowerCase();

        const filtered =
            users.filter(
                user =>
                    user.name
                        .toLowerCase()
                        .includes(keyword) ||
                    user.email
                        .toLowerCase()
                        .includes(keyword)
            );

        ui.renderUsers(filtered);
    }
);

loadUsers();