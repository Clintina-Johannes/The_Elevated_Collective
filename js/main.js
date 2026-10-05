document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DYNAMIC CONTENT & FILTERING (products.html)[cite: 2]
    const filterBtns = document.querySelectorAll('.tab-btn');
    const products = document.querySelectorAll('.product-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filter logic
                const filterValue = btn.getAttribute('data-filter');
                products.forEach(product => {
                    if (filterValue === 'all' || product.getAttribute('data-category') === filterValue) {
                        product.style.display = 'flex';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });
    }

    // 2. INTERACTIVE MAP (contact.html)[cite: 2]
    const mapContainer = document.getElementById('store-map');
    if (mapContainer && typeof L !== 'undefined') {
        const map = L.map('store-map').setView([-33.9249, 18.4241], 13); // Cape Town Coordinates
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        L.marker([-33.9314, 18.4111]).addTo(map).bindPopup('<b>Kloof Street Store</b><br>123 Kloof Street.');
        L.marker([-33.9180, 18.3888]).addTo(map).bindPopup('<b>Sea Point Store</b><br>45 Main Road.');
    }

    // 3. FORM VALIDATION & AJAX SUBMISSION[cite: 5]
    const setupForm = (formId) => {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;
            
            // Client-side validation[cite: 5]
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                const parent = field.closest('.field');
                if (!field.value.trim() || (field.type === 'email' && !field.value.includes('@'))) {
                    parent.classList.add('invalid');
                    isValid = false;
                } else {
                    parent.classList.remove('invalid');
                }
            });

            // AJAX Form Submission Simulation[cite: 5]
            if (isValid) {
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;
                submitBtn.innerText = 'Sending...';
                
                // Simulate network request
                setTimeout(() => {
                    form.innerHTML = `<div class="success-message" style="color: var(--green-light); font-weight: bold; text-align: center; padding: 20px;">Thank you! Your message has been sent successfully.</div>`;
                }, 1500);
            }
        });
    };

    setupForm('contact-form');
    setupForm('enquiry-form');
});