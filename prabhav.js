document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form Submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      alert(`Thank you, ${name}! We will contact you at ${email}.`);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const greetingContainer = document.getElementById("greeting");
    const dateTimeContainer = document.getElementById("date-time");
  
    function getGreeting() {
      const currentHour = new Date().getHours();
  
      if (currentHour >= 5 && currentHour < 12) {
        return "Good morning";
      } else if (currentHour >= 12 && currentHour < 18) {
        return "Good afternoon";
      } else {
        return "Good evening";
      }
    }
  
    function displayGreeting() {
      const greetingMessage = getGreeting();
      const greetingElement = document.createElement("p");
      greetingElement.textContent = `${greetingMessage}, Welcome to my portfolio.`;
  
      greetingContainer.appendChild(greetingElement);
    }
  
    function displayDateTime() {
      const dateElement = document.createElement("p");
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
      dateElement.textContent = new Date().toLocaleString('en-US', options);
  
      dateTimeContainer.appendChild(dateElement);
    }
  
    displayGreeting();
    displayDateTime();
  
    // Update the date and time every second
    setInterval(function() {
      dateTimeContainer.innerHTML = "";
      displayDateTime();
    }, 1000);
  });

  document.addEventListener("DOMContentLoaded", function() {
    
  
    // Typing Animation
    const introductionText = "Passionate Full-Stack Developer, Python learner, Cloud learner, interested to learn new technologies";
    const typingContainer = document.getElementById("typing-intro");
  
    function typeText() {
      let index = 0;
      const intervalId = setInterval(function() {
        typingContainer.textContent += introductionText[index];
        index++;
        if (index === introductionText.length) {
          clearInterval(intervalId);
        }
      }, 100); 
    }
  
    typeText();
  });

  document.addEventListener("DOMContentLoaded", function() {
    const photoElement = document.getElementById("photo");
  
    photoElement.addEventListener("mouseenter", function() {
      this.classList.add("animate-photo");
    });
  
    photoElement.addEventListener("mouseleave", function() {
      this.classList.remove("animate-photo");
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("progress-bar");
  
    function updateProgressBar() {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / totalHeight) * 100;
  
      progressBar.style.width = `${progress}%`;
    }
  
    window.addEventListener("scroll", updateProgressBar);
  });
    
  
  