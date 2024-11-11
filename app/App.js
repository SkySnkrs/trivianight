import { TriviaController } from "./controllers/triviaController.js"


class App {

  TriviaController = new TriviaController


}

const app = new App()
// @ts-ignore
window.app = app
