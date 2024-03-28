document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navbar = document.getElementById('navbar');

    
    hamburgerIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('open'); // Use class toggle for animation
        this.classList.toggle('position');
     });

    const nav_links = document.querySelectorAll('.nav-links');

    nav_links.forEach((link)=>{
        link.onclick = () =>{
            navbar.classList.toggle('open');
            hamburgerIcon.classList.toggle('active');
            hamburgerIcon.classList.toggle('position');
        }
    })
        
    
});
