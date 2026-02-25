// Create the cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Track mouse position
document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

// Add hover effect on text
const textElements = document.querySelectorAll('h1, h4, .list li');
textElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.classList.add('hover-text');
    });
    el.addEventListener('mouseleave', () => {
        el.classList.remove('hover-text');
    });
});

// -----------------------------
// Scroll fade-in animation
// -----------------------------

const fadeElements = document.querySelectorAll('h1, .bodyText, .creditText'); 
// intentionally NOT selecting .list

// add base class
fadeElements.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(el => observer.observe(el));
