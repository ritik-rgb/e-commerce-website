let count = 0; // Global variable to track the number of correct answers

function checkAnswer(question, correctOption) {
    const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
    const resultDiv = document.getElementById(`${question}-result`);
    const successImgDiv = document.getElementsByClassName("success-img-container"); // Reference to the image container
    
    if (selectedOption) {
        if (selectedOption.value === correctOption) {
            resultDiv.innerHTML = "Correct!";
            resultDiv.style.color = "green";
            count++;
        } else {
            resultDiv.innerHTML = "Incorrect!";
            resultDiv.style.color = "red";
        }
    } else {
        resultDiv.innerHTML = "Please select an option!";
        resultDiv.style.color = "orange";
    }
    
   
    if (count === 5) {
        successImgDiv.style.display = "block";
    }
}


function closeImage() {
    const successImgDiv = document.querySelector(".success-img");
    const cross=document.querySelector(".submit1");
const quiz=document.querySelector(".quiz");
    successImgDiv.style.display = "none";
    cross.style.display="none";
quiz.style.display="none";
}




var reward=document.querySelector(".reward");
var quiz=document.querySelector(".quiz");

reward.addEventListener("click",function(){
    quiz.style.display='block';
})

reward.addEventListener("click",function(){
    quiz.style.display='block';
})

