document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const contact = document.getElementById('contact').value;

    if (name && date && time && guests && contact) {
        alert(`Reservation confirmed for ${name} on ${date} at ${time} for ${guests} guests.`);
        document.getElementById('reservation-form').reset();
    } else {
        alert('Please fill in all the fields!');
    }
});


// JavaScript for smooth scrolling to sections and triggering animations
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        
        // Smooth scroll to target section
        window.scrollTo({
            top: target.offsetTop - 60, // Adjusting for the fixed navbar
            behavior: 'smooth'
        });

        // Trigger the animation once the section is in view
        setTimeout(() => {
            target.classList.add('animate');
        }, 500); // Slight delay for smoother transition
    });
});



document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    function handleScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            // Trigger animation when the section enters the viewport
            if (rect.top >= 0 && rect.top <= window.innerHeight) {
                section.classList.add('in-view');
            } else {
                section.classList.remove('in-view');
            }
        });
    }

    // Listen to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Initialize scroll behavior when the page is loaded
    handleScroll();
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});




// Toggle the mobile menu
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
