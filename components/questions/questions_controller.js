import { QuestionsModel } from "./questions_model.js";

class QuestionsController {
    constructor({model}) {
        this.questionsModel = model;
    }

    updateQuestionView() {
        const questionEl = document.getElementById('gdi-main-content');

        while (questionEl?.firstChild) {
            questionEl.removeChild(questionEl.firstChild);    
        }

        questionEl?.appendChild(
            this._questionWrapper(this.questionsModel.getRandQuestionNode()));
    }

    initPageLoad() {
        document
            .addEventListener('keydown', (event) => {
                const key = event.key || String.fromCharCode(event.keyCode);

                switch(key) {
                    case "Enter":
                        this.updateQuestionView(this.questionsModel.getRandQuestionNode());
                        break;
                }
            }, false);
        document
            .addEventListener('ontouchstart', (event) => {
                this.updateQuestionView(this.questionsModel.getRandQuestionNode());
            }, false);
        document
            .addEventListener('click', (event) => {
                this.updateQuestionView(this.questionsModel.getRandQuestionNode());
            }, false);

    }

    _questionWrapper(node) {
        const p = document.createElement('p');
        p.classList.add('question-text');
        p.appendChild(node);
        return p;
    }
}

export const questionsController = new QuestionsController({model: new QuestionsModel()});
