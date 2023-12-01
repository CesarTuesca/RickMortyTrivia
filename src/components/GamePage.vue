<template>
    <div class="game-container">
        <BackArrow />
        <button @click="goBack" class="back-button">← Back</button>
        <p class="score-display">Current Score: {{ score }}</p>

        <div class="question-box">
            <p class="customForm-textLarge">{{ currentQuestion.text }}</p>
            <ul class="customForm-textSmall">
                <li v-for="(answer, index) in currentQuestion.answers" :key="index" class="answer-item">
                    <span class="answer-prefix">{{ answer.split(' ')[0] }}</span>
                    <input type="radio" :value="answer" v-model="selectedAnswer" :id="'answer-' + index">
                    <label :for="'answer-' + index">{{ answer.split(' ').slice(1).join(' ') }}</label>
                </li>

            </ul>
        </div>

        <button @click="submitAnswer" class="submit-button"></button>
    </div>
</template>
  
<script>
import BackArrow from './BackArrow.vue';

export default {
    components: {
        BackArrow
    },
    data() {
        return {
            questions: [
                {
                    text: 'What is Rick\'s last name?',
                    answers: ['A Sanchez', 'B Smith', 'C Johnson', 'D Michaels'],
                    correctAnswer: 'A Sanchez',
                },
                {
                    text: 'Which dimension do Rick and Morty primarily operate from?',
                    answers: ['A C-137', 'B C-136', 'C D-137', 'D B-136'],
                    correctAnswer: 'A C-137',
                },
                {
                    text: 'What is the name of Morty\'s crush?',
                    answers: ['A Annie', 'B Jessica', 'C Summer', 'D Beth'],
                    correctAnswer: 'B Jessica',
                },
                {
                    text: 'Who is Morty\'s father?',
                    answers: ['A Rick', 'B Jerry', 'C Birdperson', 'D Mr. Poopybutthole'],
                    correctAnswer: 'B Jerry',
                },
                {
                    text: 'What is the name of the dog who gains intelligence in the episode "Lawnmower Dog"?',
                    answers: ['A Scuffles', 'B Snuffles', 'C Ruffles', 'D Muffles'],
                    correctAnswer: 'B Snuffles',
                },
                {
                    text: 'What high school do Morty and Summer attend?',
                    answers: ['A Harry Herpson High School', 'B Morty Jr. High School', 'C Rick Sanchez High School', 'D Goldenfold High School'],
                    correctAnswer: 'A Harry Herpson High School',
                },
                {
                    text: 'What is Rick\'s favorite catchphrase?',
                    answers: ['A Wubba Lubba Dub Dub', 'B I\'m Pickle Rick', 'C Oh geez', 'D None of the above'],
                    correctAnswer: 'A Wubba Lubba Dub Dub',
                },
                {
                    text: 'Which character is a Galactic Federation agent disguised as a friend?',
                    answers: ['A Birdperson', 'B Squanchy', 'C Tammy', 'D Mr. Poopybutthole'],
                    correctAnswer: 'C Tammy',
                },
                {
                    text: 'What does the Meeseeks Box do?',
                    answers: ['A Creates a clone', 'B Summons a helpful Meeseeks', 'C Teleports you to another dimension', 'D None of the above'],
                    correctAnswer: 'B Summons a helpful Meeseeks',
                },
                {
                    text: 'What is the name of Morty\'s sister?',
                    answers: ['A Beth', 'B Jessica', 'C Summer', 'D Annie'],
                    correctAnswer: 'C Summer',
                }
            ],
            currentQuestionIndex: 0,
            selectedAnswer: null,
            score: 0,
        };
    },
    computed: {
        currentQuestion() {
            return this.questions[this.currentQuestionIndex];
        }
    },
    methods: {
        goBack() {
            const userConfirmed = confirm("Are you sure you want to exit the game? You will lose all progress if you do so!");
            if (userConfirmed) {
                this.$router.push("/profile");
            }
        },
        submitAnswer() {
            if (this.selectedAnswer) {
                if (this.selectedAnswer === this.currentQuestion.correctAnswer) {
                    alert('Correct!');
                    this.score++;
                    this.nextQuestion(); // Move to next question only if answer is correct
                } else {
                    alert('Incorrect. Try again!');
                    this.score--;
                }
            } else {
                alert('Please select an answer before submitting.');
            }
        },
        nextQuestion() {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++;
                this.selectedAnswer = null;
            } else {
                alert(`You have completed the quiz! Your final score is ${this.score}/10`);
                this.updateGameStats();
                this.$router.push('/profile');
            }
        },
        updateGameStats() {
            let gamesPlayed = localStorage.getItem('gamesPlayed') || 0; //Store score temporarily oin localstorage for the life of the current instance of the game.
            gamesPlayed++;
            localStorage.setItem('gamesPlayed', gamesPlayed);
            localStorage.setItem('lastGameScore', this.score);
        }
    },
};
</script>

  
<style scoped>
 .score-display {
        font-size: 1.5rem;
        color: rgb(191, 222, 66); 
        margin-bottom: 20px; 
        text-align: center; 
    }
.customForm-textLarge {
    font-family: 'Nanum Pen Script', cursive;
    font-size: 3rem;
    color: rgb(191, 222, 66);
}
.customForm-textSmall {
    font-family: 'Nanum Pen Script', cursive;
    font-size: 1.5rem;
    color: rgb(191, 222, 66);
}
.game-container {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/gameBackground_1.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Georgia', serif; /* It's more prettier to me than Arial */
}

.back-button,

.back-button:hover,
.submit-button:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    /* Slightly darker on hover */
}

.back-button {
    
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.answer-item {
    display: flex;
    align-items: center;
}

.answer-prefix {
    margin-right: 10px;
    font-weight: bold;
    line-height: 1.5;
}

.question-box label {
    font-size: 18px;
    cursor: pointer;
    line-height: 1.5;
}


.question-box {
    background: linear-gradient(180deg, rgba(62, 62, 62, 1) 0%, rgba(98, 98, 98, 1) 0%, rgba(56, 56, 56, 1) 0%, rgba(69, 69, 69, 1) 7%, rgba(47, 47, 47, 1) 100%);
    /* White background to improve text readability */
    border-style: solid;
    border-width: 3px;
    border-color: rgba(89, 89, 89, 0.4);
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    text-align: left;
    border-radius: 5px;
    /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /* A subtle shadow to lift the box off the background */
    max-width: 80%;
}

.answer-prefix {
    margin-right: 10px;
    font-weight: bold;
}

.question-box p {
    font-weight: bold;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
    /* Make the question stand out */
    margin-bottom: 10px;
}

.question-box ul {
    list-style-type: none;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
    padding: 0;
}

.question-box li {
    margin-bottom: 10px;
    /* Spacing between options */
}

.question-box input[type="radio"] {
    margin-right: 10px;
    /* Spacing between radio and label */
}

.question-box label {
    font-size: 18px;
    cursor: pointer;
}

.submit-button {
    background: url('@/assets/submitButton.svg') no-repeat center center;
    background-size: contain;
    color: transparent;
    width:  199px;
    height: 53.7194px;
    border: none;
    cursor: pointer;
    margin-top: .1rem;
}
</style>