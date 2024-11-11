import { AppState } from "../AppState.js"
import { Category } from "../models/Category.js"
import { Questions } from "../models/Questions.js"


class TriviaServices {


    async fetchCategories() {
        let response = await fetch('https://opentdb.com/api_category.php')
        let data = await response.json()
        const Categories = data.trivia_categories.map(categoryData => new Category(categoryData))
        AppState.categories = Categories
    }

    async fetchQuestions(categoryID) {
        let difficulty = ['easy', 'medium', 'hard'];
        let results = [];

        for (let i = 0; i < difficulty.length; i++) {
            const difficultyLevel = difficulty[i];
            const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${categoryID}&difficulty=${difficultyLevel}`);
            const data = await response.json();
            results = results.concat(data.results);

            await new Promise(resolve => setTimeout(resolve, 5000));
        }

        return results;
    }

    async getQuestions(categoryID) {
        const data = await this.fetchQuestions(categoryID);
        const questions = data.map(questionData => new Questions(questionData));
        AppState.questions = questions;
        console.log(AppState.questions);
    }
}

export const triviaServices = new TriviaServices()