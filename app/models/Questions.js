

export class Questions {

    constructor(data) {
        this.question = data.question
        this.answer = data.correct_answer
        this.difficulty = data.difficulty
        this.type = data.type
        this.category = data.category
        this.wrongAnswers = data.incorrect_answers
    }

    get questionTemplate() {
        return `
        <div class="col-6 mt-3">
          <div class="d-flex">
            <div class="col-8 text-center text-light darkTheme rounded-top rounded-sides p-3">
              <h6>Question # , ${this.category}</h6>
            </div>
            <div class="col-4 text-center text-light secondaryTheme rounded-top rounded-sides p-3">${this.difficulty}
            </div>
          </div>
          <div class="rounded-bottom darkTheme text-light p-3 cardHeight">
            <p class="text-start p-3">${this.question}</p>
            <div class="text-center">
              <button class="btn secondaryTheme p-2 m-2">Answers are posted here</button>
              <button class="btn secondaryTheme p-2 m-2">Answers are posted here</button>
              <button class="btn secondaryTheme p-2 m-2">Answers are posted here</button>
              <button class="btn secondaryTheme p-2 m-2">Answers are posted here</button>
            </div>
          </div>
        </div>
        `
    }

}