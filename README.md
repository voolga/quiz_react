![image-removebg-preview](https://github.com/voolga/quiz_react/assets/88053873/d5d5d0da-2d13-403a-b332-9c3b489ecc60)

**Quiz Master** – this is an interactive quiz application designed to provide an engaging and seamless gaming experience without the need for authorization. 

To run the game on your PC, please follow the [Installation Guide](#3-installation-guide)

## 1. Technology Stack:
- **React**
- **React Router v6**
- **Redux Toolkit (createAsyncThunk, createSlice) + RTK query(createApi)**
- **Redux-persist**
- **API Quiz**
- **CSS/SCSS (module)**
- **Responsive Design**

## 2. Main abilities

### 2.2. Welcome screen

- **Quiz Settings**: selection of the number of questions, categories, difficulty level, type of questions, and time for the answer.. 
- **Navigation Buttons**: easy access to the start of the quiz and viewing statistics.

![image](https://github.com/voolga/quiz_react/assets/88053873/a5f0355e-be80-4962-a3f8-3a4ad15669fe)

### 2.3. Quiz screen

- **Loader**: aimation for waiting for an API response and game loading.
- **Question Text and Progress Bar**: display of the current quiz progress.
- **Answer Options**: interactive buttons for selecting answers, support for both true/false and multiple-choice questions.
- **Timer**: time countdown, adding dynamics to the process of answering questions..
- **Modal window**: confirmation of user actions, for example, when completing a quiz.
- **Animated highlighting of the correct Answer**
  
![image](https://github.com/voolga/quiz_react/assets/88053873/e76270f0-8700-45a9-97bd-df67408139ab)
![image](https://github.com/voolga/quiz_react/assets/88053873/dec9d6a4-c476-4c75-a1f6-0ecd49574614)


### 2.4. Result screen 

- **Quiz details**: displaing of selected quiz settings, including category, difficulty, and time.
- **New game and restart game optopns**: the ability to easily restart the quiz or choose a new one.

![image](https://github.com/voolga/quiz_react/assets/88053873/fb18f33a-f33b-41d8-b00f-3cde274775a8)

### 2.5. Statistic screen

- **Collection of Statistical Data**: After the completion of each quiz, user data is saved in the Redux store. This allows users to view their statistics later.
- **Detailed Statistical Tracking**:
  - The number of questions asked and the user's correct answers accumulate for an overall tally.
  - Tracking questions by category: for example, if a user answers 10 questions on "Mythology," this data is added to the total number of questions in that category.
  - Difficulty level tracking: the number of questions at each difficulty level is summed separately.
  - Types of Questions: counting the number of questions of each type.
- **Possibility of clearing statistics**: data from localStorage is cleared.

 ![image](https://github.com/voolga/quiz_react/assets/88053873/518c07a7-c1b5-4321-bfa9-dabd50938f2d)

### 3. Installation guide

> Before you begin, ensure you have met the following requirements:
- You have installed the latest version of Node.js and npm.

1. Clone repo
`git clone https://github.com/voolga/quiz_react.git`
2. Navigate to the project directory
`cd quiz_react`
3. Install dependencies:
`npm install`
4. Running the Application
`npm run dev`
