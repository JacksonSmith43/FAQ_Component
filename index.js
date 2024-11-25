addEventListener("DOMContentLoaded", (event) => {

    const displaysFaqQuestionsList = document.getElementById("faq-questions-list");


    const FAQ = [
        {
            question: "How many bones does a cat have?",
            answer: "A cat has 230 bones - 6 more than a human",
        },
        {
            question: "How much do cats sleep?",
            answer: "The average cat sleeps 12-16 hours per day",
        },
        {
            question: "How long do cats live",
            answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
        },
    ];

    for (let i = 0; i < FAQ.length; i++) {
        const questionsLi = document.createElement("li");
        const answersLi = document.createElement("li");

        questionsLi.innerHTML = FAQ[i].question;
        displaysFaqQuestionsList.appendChild(questionsLi);

        answersLi.innerHTML = FAQ[i].answer;
        displaysFaqQuestionsList.appendChild(answersLi);


        questionsLi.style.marginTop = "2rem";
        answersLi.style.display = "none";

        if (i === 0) {
            answersLi.style.display = "unset";
        }


        questionsLi.addEventListener("click", function () {
            if (answersLi.style.display == "unset") {
                answersLi.style.display = "none";

            } else {
                answersLi.style.display = "unset";
            }


        })
    }

});