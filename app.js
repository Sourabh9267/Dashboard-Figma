var sidebar = document.querySelector("#sidebar-wrapper-div");

var page=document.querySelector("#page");

console.log(page);


console.log(sidebar);

var isClicked = false;

function togglesidebar() {
    isClicked = !isClicked; 

    if (isClicked) {
    
        sidebar.style.width="0px";
        page.style.width="100%";
        page.style.marginLeft="0";
        
        console.log("Sidebar Hidden");
    } else {
        console.log("Sidebar visible");
        
        page.style.marginLeft="260px";
        page.style.width="calc(100% - 260px)";
        sidebar.style.width="260px";
    }
}


// Alert Fx Bootstrap

const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))