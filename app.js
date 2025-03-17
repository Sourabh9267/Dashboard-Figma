var sidebar = document.querySelector("#sidebar-wrapper-div");

console.log(sidebar);

var isClicked = false;

function togglesidebar() {
    isClicked = !isClicked; 

    if (isClicked) {
    
        sidebar.style.width="0px";
        console.log("Sidebar Hidden");
    } else {
        console.log("Sidebar visible");
  
        sidebar.style.width="260px";
    }
}


// Alert Fx Bootstrap

const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))