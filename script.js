        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

        // Form submission
        // const form = document.querySelector('form');
        // if (form) {
        //     form.addEventListener('submit', function(e) {
        //         e.preventDefault();
        //         const name = document.getElementById('name').value;
        //         const email = document.getElementById('email').value;
        //         const message = document.getElementById('message').value;
                
        //         // Here you would typically send the form data to a server
        //         console.log('Form submitted:', { name, email, message });
                
        //         // Show success message
        //         alert('Thank you for your message! I will get back to you soon.');
        //         form.reset();
        //     });
        // }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });