function toggleButtonColor(button, color) {
    if (button.dataset.originalColor === undefined) {
      button.dataset.originalColor = getComputedStyle(button).backgroundColor;
    }
  
    if (button.style.backgroundColor === color) {
      button.style.backgroundColor = button.dataset.originalColor;
      button.style.color = "black"; // Reset text color
    } else {
      button.style.backgroundColor = color;
      button.style.color = "white"; // Ensure readability
    }
  }
  
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
  