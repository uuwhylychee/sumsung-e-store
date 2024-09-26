// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through all FAQ questions to add click event listeners
faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isOpen = faqItem.querySelector('.faq-answer').style.display === 'block';

        // Toggle the aria-expanded attribute and icon
        faqQuestions.forEach((q) => {
            const currentFaq = q.parentElement;
            currentFaq.querySelector('.faq-answer').style.display = 'none';
            q.querySelector('.icon').textContent = '+';
            q.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
            faqItem.querySelector('.faq-answer').style.display = 'block';
            question.querySelector('.icon').textContent = '−';
            question.setAttribute('aria-expanded', 'true');
        }
    });
});
