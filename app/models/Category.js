

export class Category {
    constructor(data) {
        this.category = data.name
        this.id = data.id
    }

    get categoryButtonTemp() {
        return `
         <button onclick="app.TriviaController.fetchQuestions(${this.id})" id="buttonCategory" class="btn secondaryTheme text-center text-dark m-1">${this.category}</button>

        `
    }

}