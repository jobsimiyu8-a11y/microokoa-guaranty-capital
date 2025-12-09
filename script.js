// Microokoa Guaranty Capital - Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Donation Calculator
    const donationAmount = document.getElementById('donationAmount');
    const donationValue = document.getElementById('donationValue');
    const calculateBtn = document.getElementById('calculateBtn');
    const yourDonation = document.getElementById('yourDonation');
    const loanAccess = document.getElementById('loanAccess');
    const communityImpact = document.getElementById('communityImpact');
    
    // Update donation amount display
    donationAmount.addEventListener('input', function() {
        const value = parseInt(this.value);
        donationValue.textContent = value.toLocaleString();
    });
    
    // Calculate donation impact
    function calculateImpact() {
        const amount = parseInt(donationAmount.value);
        const loanMultiplier = 10;
        const loanAccessAmount = amount * loanMultiplier;
        const peopleHelped = Math.floor(amount / 200);
        
        // Update display
        yourDonation.textContent = `Kshs ${amount.toLocaleString()}`;
        loanAccess.textContent = `Kshs ${loanAccessAmount.toLocaleString()}`;
        communityImpact.textContent = `${peopleHelped}+ people helped`;
    }
    
    // Calculate on button click
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateImpact);
    }
    
    // Calculate on page load
    calculateImpact();
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting Microokoa Guaranty Capital! We will get back to you within 24 hours.');
            this.reset();
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                }
            }
        });
    });
    
    // Donate button functionality
    const donateButtons = document.querySelectorAll('.donate-now-btn, .donate-btn');
    donateButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for choosing to donate! You will be redirected to our secure donation portal.');
            // In a real website, this would redirect to payment page
            window.location.href = '#donate';
        });
    });
    
    // Loan product cards hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Social media links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.getAttribute('title') || this.className;
            alert(`You would be redirected to our ${platform} page. In a real website, this would open the social media profile.`);
        });
    });
    
    // Initialize donation slider
    donationAmount.dispatchEvent(new Event('input'));
});