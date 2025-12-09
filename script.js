// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Donation calculator functionality
    const donationSlider = document.getElementById('donationAmount');
    const donationValue = document.getElementById('donationValue');
    const yourDonation = document.getElementById('yourDonation');
    const loanAccess = document.getElementById('loanAccess');
    const communityImpact = document.getElementById('communityImpact');
    const calculateBtn = document.getElementById('calculateBtn');

    function formatCurrency(amount) {
        return 'Kshs ' + amount.toLocaleString();
    }

    function updateCalculator() {
        const donation = parseInt(donationSlider.value);
        const loanAmount = donation * 10;
        const peopleHelped = Math.floor(donation / 200);
        
        donationValue.textContent = donation.toLocaleString();
        yourDonation.textContent = formatCurrency(donation);
        loanAccess.textContent = formatCurrency(loanAmount);
        communityImpact.textContent = `${peopleHelped}+ people helped`;
    }

    if (donationSlider) {
        donationSlider.addEventListener('input', updateCalculator);
        calculateBtn.addEventListener('click', updateCalculator);
        updateCalculator(); // Initialize
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
