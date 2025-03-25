
        function showSection(sectionId) {  
            // Hide all sections  
            let sections = document.querySelectorAll("section");  
            sections.forEach(section => section.classList.remove("active"));  
    
            // Show the selected section  
            document.getElementById(sectionId).classList.add("active");  
    
            // Reset background color  
            document.body.style.backgroundColor = "#f9f9f9";  
        }  
    
        let currentSlide = 0;  
    
        function changeSlide(direction) {  
            const slides = document.querySelectorAll('.slide');  
            currentSlide += direction;  
    
            if (currentSlide < 0) {  
                currentSlide = slides.length - 1;  
            } else if (currentSlide >= slides.length) {  
                currentSlide = 0;  
            }  
    
            const offset = -currentSlide * 100;  
            document.querySelector('.slides').style.transform = `translateX(${offset}%)`;  
        }  
  
        setInterval(function() {  
            changeSlide(1);  
        }, 2000); 
        function checkAnswer(answer, quizId) {

  // Dictionary of correct answers
  const correctAnswers = {
    quiz1: "Blue",
    quiz2: "Triangle",
  };

  // Check if answer is correct and update the element
  const isCorrect = answer === correctAnswers[quizId];
  document.getElementById(quizId).innerHTML = isCorrect
    ? "✅ Correct!"
    : "❌ Try again!";
}
 
