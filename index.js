console.log('Happy developing ✨')
// for our prototype/ mock-up we will be hardcoding the user's username, and passwords for both the teacher and administrator
function login(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username === "administrator@gmail.com" && password === "Admin123"){
     window.location.href = "AdminDash.html"
    }

    if(username === "teacher@gmail.com" && password === "Teacher123!"){
        window.location.href= "teacher_inventory_dashboard.html";
    }
}
