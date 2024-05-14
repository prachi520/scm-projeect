window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  const scrollBtn = document.querySelector(".scrollToTop-btn");
  
  window.addEventListener("scroll", function () {
    scrollBtn.classList.toggle("active", window.scrollY > 300);
  });
  
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
  const image = document.querySelector("#myImage");
  
  image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition="transform 0.5s ease";
  });
  
  image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
  });
  function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    
    // Perform additional validation if needed

    alert("Registration successful!\nUsername: " + username + "\nEmail: " + email);
    // You can also submit the form to a server here

    // Optionally, reset the form
    document.getElementById('registrationForm').reset();
}
  