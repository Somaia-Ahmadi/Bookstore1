
 
 
 const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const number = document.getElementById('number')
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');

      let isValid = true;

      [name, email, number, subject, message].forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('is-invalid');
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
        }
      });

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value.trim() && !emailPattern.test(email.value.trim())) {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        isValid = false;
      }

      if (isValid) {
        alert('Your message has been sent successfully!');
        form.reset();

        [name, email, Number, subject, message].forEach(input => {
          input.classList.remove('is-valid', 'is-invalid');
        });
      }
    });

    // Remove invalid style while typing
    document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
      input.addEventListener('input', function () {
        if (this.value.trim()) {
          this.classList.remove('is-invalid');
        }
      });
    });


    const btn = document.getElementById("moontheme");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
  