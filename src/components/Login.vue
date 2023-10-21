<template>
    <main class="login">
        
        <div class="background-container">
            <img src="@/assets/landingBackground.svg" alt="Background Image" />
        </div>

        <div class="titles-container">
            <div class="top-title">
                <img src="@/assets/gameTitle.svg" alt="Top Title" />
            </div>
                <section class="forms">
            
            

                    <form class="register" @submit.prevent="register">
                        <h2 class="customForm-textLarge">Register</h2>
                        <input 
                    type="email" 
                    class="customForm-textSmall" placeholder="Email"
                    v-model="register_form.email" />
                        <input 
                    type="password" 
                    class="customForm-textSmall" placeholder="Password"
                    v-model="register_form.password" />
                        <input
                    type="submit"
                    value="Register" />
                    </form>

                    <form class="login" @submit.prevent="login">
                        <h2 class="customForm-textLarge">Login</h2>
                        <input 
                    type="email" 
                    class="customForm-textSmall" placeholder="Email"
                    v-model="login_form.email" />
                        <input 
                    type="password" 
                    class="customForm-textSmall" placeholder="Password"
                    v-model="login_form.password" />
                        <input
                    type="submit"
                    value="Login" />
                    </form>

            
                </section>
        
            <div class="bottom-title">
                <img src="@/assets/bottomGameTitle.svg" alt="Bottom Title" />
            </div>
        </div>

        
    </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const login_form = ref({});
        const register_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value);
        }

        const register = () => {
            store.dispatch('register', register_form.value);
        }

        return {
            login_form,
            register_form,
            login,
            register
        }
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

.customForm-textLarge {
    font-family: 'Nanum Pen Script', cursive;
    font-size: 4rem;
}
.customForm-textSmall {
    font-family: 'Nanum Pen Script', cursive;
    font-size: 1.5rem;
}
.background-container {
    background-image: url('@/assets/landingBackground.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.titles-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.top-title {
    background-image: url('@/assets/gameTitle.svg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 181px;
    width: 510px;
}

.bottom-title {
    background-image: url('@/assets/bottomGameTitle.svg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 128px;
    width: 387px;
}

.forms {
    display: flex;
    flex-flow: row wrap;
    min-height: 50vh;
    background: transparent;
}

form {
    flex: 1 1 0%;
    padding: 5rem 1rem 1rem;
}

form.register {
    color: #FFF;
    background-color: transparent;
    margin-right: 5rem;
}

form.login {
    color: #FFF;
    background-color: transparent;
    margin-left: 5rem;
}

h2 {
    font-size: 4rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-family: 'Lacquer', sans-serif;
    color: rgb(191, 222, 66);
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
}

input {
    appearance: none;
    border: none;
    outline: none;
    background: none;
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 0rem;
    position: relative; 
}


input:not([type="submit"]) {
    border-radius: 5px;
    background: rgb(62, 62, 62);
    background: linear-gradient(180deg, rgba(62, 62, 62, 1) 0%, rgba(98, 98, 98, 1) 0%, rgba(56, 56, 56, 1) 0%, rgba(69, 69, 69, 1) 7%, rgba(47, 47, 47, 1) 100%);
    border-style: solid;
    border-width: 3px;
    border-color: rgba(89, 89, 89, 0.4);
    
}

input::placeholder {
    color: inherit;
    padding-left: 10px;

}

form.register input:not([type="submit"]) {
    color: rgb(65, 180, 201);
    padding-left: 10px;
}

form.login input:not([type="submit"]) {
    color: rgb(65, 180, 201);
    padding-left: 10px;
}

form.login input[type="submit"] {
    background: url('@/assets/loginButton.svg') no-repeat center center;
    background-size: contain;
    color: transparent;
    width:  296px;
    height: 213px;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
}

form.register input[type="submit"] {
    background: url('@/assets/registerButton.svg') no-repeat center center;
    background-size: contain;
    color: transparent;
    width:  296px;
    height: 213px;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
}
</style>