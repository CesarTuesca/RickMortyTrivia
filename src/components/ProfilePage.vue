<template>
  <main class="profile">
    <div class="userContent">

      <div class="user-info">
        
        <div class="user-avatar">
          <img src="@/assets/userAvatar.svg" alt="Avatar" />
        </div>
        <div class="user-text">
          <h2 class="customForm-textLarge">Username</h2>
          <p class="customForm-textSmall">Total Games Played: 10</p>
          <p class="customForm-textSmall">Highest Score: 1000</p>
          <button @click="startGame" class="start-button"></button>
        </div>
      </div>
    </div>
    <div class="background-container"></div>
    <div class="content">
      
      <div class="welcome-message">
        <!-- Your welcome message content -->
      </div>
      <div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProfilePage',
  methods: {
    startGame() {
      const userConfirmed = confirm("Are you sure you want to start the game?")
      if (userConfirmed) {
        this.$router.push("/game");
      }

    }
  }
};
</script>

<style scoped>
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

.background-container {
  background-image: url('@/assets/gameBackground_1.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.userContent {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
}

.user-info {
  display: flex;
  background: linear-gradient(180deg, rgba(62, 62, 62, 1) 0%, rgba(98, 98, 98, 1) 0%, rgba(56, 56, 56, 1) 0%, rgba(69, 69, 69, 1) 7%, rgba(47, 47, 47, 1) 100%);
  border-style: solid;
  border-width: 3px;
  border-color: rgba(89, 89, 89, 0.4);
  border-radius: 5px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 60%;
  min-height: 40%;
  min-width: 20%;
}

.user-avatar {
  height: 227px;
  width: 100px;
  margin-top: 15%;
  margin-bottom: 15%
}

.user-text {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}

.user-info h2 {
  font-size: 55px;
  margin-bottom: 10px;
  text-align: center;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
}

.user-info p {
  font-size: 22px;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
  text-align: left;
  margin-top: 15%;
  margin-bottom: 15%;
}

.content {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: left; /* This moves the content to the left */
  width: 100%;
  height: 100%;
}

.welcome-message {
  background-image: url('@/assets/welcomeMessage.svg');
  width: 534px;
  height: 286px;
  margin-top: 50%;
  margin-left: 2%; /* Adjust the margin to move it slightly to the left of center */
  position: fixed;
}

.start-button {
  background-image: url('@/assets/startButton.svg');
  background-size: contain;
  color: transparent;
  width: 199px;
  height: 53.7194px;
  border: none;
  cursor: pointer;
  
}

.start-button:hover {
  background: url('@/assets/startButtonShadow.svg') no-repeat center center;
  color: transparent;
  width: 199px;
  height: 53.7149px;
  border: none;
  cursor: pointer;
}
</style>