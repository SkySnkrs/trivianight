import { AppState } from "../AppState.js"
import { triviaServices } from "../services/TriviaServices.js"

export class TriviaController {

    constructor() {
        console.log('Controller Ready For Trivia')
        AppState.on('categories', this.drawCategories)
        AppState.on('questions', this.drawQuestions)
        this.fetchCategories()
        this.drawQuestions()
    }


    async fetchCategories() {
        await triviaServices.fetchCategories()
    }

    drawCategories() {
        const categoryElem = document.getElementById('Categories')
        categoryElem.innerHTML = ''
        AppState.categories.forEach(category => categoryElem.innerHTML += category.categoryButtonTemp)
    }

    async fetchQuestions(categoryID) {
        await triviaServices.getQuestions(categoryID)
    }

    drawQuestions() {
        const questionElem = document.getElementById('questionsContainer')
        questionElem.innerHTML = ''
        AppState.questions.forEach(question => questionElem.innerHTML += question.questionTemplate)
    }

}