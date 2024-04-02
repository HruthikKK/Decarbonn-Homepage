//Mob Nav
const nav_Btn = document.getElementById("nav_Btn");
var mob_Nav = document.getElementById("mob_Links");
nav_Btn.addEventListener('click',() =>{
    if(mob_Nav.style.display === "none"){
        mob_Nav.style.display = "block";
    }
    else mob_Nav.style.display = "none";
})

//Nav Dropdown
const dropD_Btn = document.getElementById("dropbtn");
const dropdownContent = document.getElementById("myDropdown");

dropD_Btn.addEventListener('click', (event) => {
    console.log("hi");
    dropdownContent.classList.toggle("show");
    event.preventDefault();// Stop event propagation to prevent it from reaching the anchor element
});


  
// Close the dropdown if the user clicks outside of it
document.addEventListener('click', (event) => {

// Check if the clicked element is NOT the dropdown button
if (!event.target.matches('.dropbtn')) {
    // Check if the dropdown content is currently visible
    if (dropdownContent.classList.contains('show')) {
    // Close the dropdown by removing the 'show' class
    dropdownContent.classList.remove('show');
    }
}
});
