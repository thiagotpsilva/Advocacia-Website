const faqs = document.querySelectorAll('.faq-button');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    removeActiveClasses();
    faq.classList.add('active');
  });
});

function removeActiveClasses() {
  faqs.forEach((faq) => {
    faq.classList.remove('active');
  });
}
