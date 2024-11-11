import { Category } from './models/Category.js'
import { Questions } from './models/Questions.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /**  @type {Category[]} */
  categories = []

  /** @type {Questions[]} */
  questions = []

}

export const AppState = createObservableProxy(new ObservableAppState())