
document.addEventListener('DOMContentLoaded', () => {
    
    let currentSlide = 0;

    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    document.querySelector('.next')?.addEventListener('click', () => {
        changeSlide(1);
    });

    document.querySelector('.prev')?.addEventListener('click', () => {
        changeSlide(-1);
    });

    function changeSlide(direction) {
        if (slides.length > 0) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');
        }
    }

    document.getElementById('pesticideForm')?.addEventListener('submit', function(e) {
        e.preventDefault();

        
        const pesticideName = document.getElementById('pesticideName').value.toLowerCase();

        
        const alternatives = {
            "glyphosate": "Vinegar, Boiling Water, Mulching",
            "atrazine": "Corn Gluten Meal, Organic Mulch",
            "malathion": "Neem Oil, Insecticidal Soap",
            "carbaryl": "Diatomaceous Earth, Beneficial Nematodes",
            "2,4-d": "Vinegar, Corn Gluten",
            "chlorpyrifos": "Garlic Spray, Neem Oil"
        };

     
        const result = alternatives[pesticideName] || "No alternative found for the entered pesticide.";

     
        document.getElementById('result').textContent = result;
    });

    
    document.querySelector('a[href="#pesticide-alternatives"]')?.addEventListener('click', function(e) {
        e.preventDefault();

        
        window.location.href = 'pesticide-alternatives.html';
    });
});
