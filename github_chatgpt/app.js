// class UI {
//     constructor() {
//         this.profile = document.getElementById("profile");
//         this.grass = document.getElementById("grass"); // Add this line to initialize the grass element
//     }

//     // ... (rest of the UI class methods)

//     clearProfile() {
//         this.profile.innerHTML = "";
//     }

//     showProfile(user) {
//         // ... (existing code)

//         // If you want to show grass, you can call showGrass here
//         this.showGrass(user.login);
//     }

//     showGrass(username) {
//         // Assuming you want to display GitHub contribution chart using ghchart.rshah.org
//         this.grass.innerHTML = `<img src="https://ghchart.rshah.org/${username}"> `;
//     }

// }

// // Github Class
// class Github {
//     constructor() {
//         this.repos_count = "5";
//         this.repos_sort = "created:asc";
//     }

//     async getUser(user) {
//         // ... (rest of the Github class methods)
//     }
// }

// // Initializing Github and UI
// const github = new Github();
// const ui = new UI();

// // Event Listener for user input
// const searchUser = document.getElementById("searchUser");

// searchUser.addEventListener("keyup", (e) => {
//     const userText = e.target.value;

//     if (userText !== "") {
//         github.getUser(userText).then((data) => {
//             if (data.profile.message === "Not Found") {
//                 ui.showAlert("User Not Found", "alert alert-danger");
//             } else {
//                 ui.showProfile(data.profile);
//                 ui.showRepos(data.repos);
//                 ui.showGrass(userText);
//             }
//         });
//     } else {
//         ui.clearProfile();
//     }
// });

