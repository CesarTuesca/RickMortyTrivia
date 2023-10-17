<template>
    <div class="game-container">
        <BackArrow />
        <button @click="goBack" class="back-button">← Back</button>
        <div class="question-box">
            <p>{{ currentQuestion.text }}</p>
            <ul>
                <li v-for="(answer, index) in currentQuestion.answers" :key="index" class="answer-item">
                    <span class="answer-prefix">{{ answer.split(' ')[0] }}</span>
                    <input type="radio" :value="answer" v-model="selectedAnswer" :id="'answer-' + index">
                    <label :for="'answer-' + index">{{ answer.split(' ').slice(1).join(' ') }}</label>
                </li>

            </ul>
        </div>

        <button @click="submitAnswer" class="submit-button">Submit</button>
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
            currentQuestion: {
                text: 'This is a sample question?',
                answers: ['A Answer 1', 'B Answer 2', 'C Answer 3', 'D Answer 4'],
                correctAnswer: 'A Answer 1',
            },
            selectedAnswer: null,
        };
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
                } else {
                    alert('Incorrect. Try again!');
                }
            } else {
                alert('Please select an answer before submitting.');
            }
        },
    },
};
</script>
  
<style scoped>
.game-container {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/landingBackground.svg');
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
.submit-button {
    font-size: 18px;
    /* Increase font size for better readability */
    color: white;
    /* Use white text for contrast */
    background-color: rgba(0, 0, 0, 0.5);
    /* A semi-transparent black background */
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    /* Rounded corners */
    transition: background-color 0.4s;
    /* Smooth transition for hover effect */
}

.back-button:hover,
.submit-button:hover {
    background-color: rgba(0, 0, 0, 0.9);
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
    background-color: rgba(255, 255, 255, 0.8);
    /* White background to improve text readability */
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    text-align: left;
    border-radius: 5px;
    /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* A subtle shadow to lift the box off the background */
    max-width: 80%;
}

.answer-prefix {
    margin-right: 10px;
    font-weight: bold;
}

.question-box p {
    font-size: 20px;
    font-weight: bold;
    /* Make the question stand out */
    margin-bottom: 16px;
}

.question-box ul {
    list-style-type: none;
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
</style>
  