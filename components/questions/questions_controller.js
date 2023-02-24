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
        // questionEl?.childNodes?.foreach(childEl => questionEl?.removeChild(childEl))
        // questionEl?.firstChild?.remove();
        questionEl?.appendChild(this.questionsModel.getRandQuestionNode());
    }

    initPageLoad() {
        document.addEventListener('keydown', (event) => {
            const key = event.key || String.fromCharCode(event.keyCode);

            switch(key) {
                case "Enter":
                    this.updateQuestionView(this.questionsModel.getRandQuestionNode());
                    break;
            }
        }, false);
    }
}

export const questionsController = new QuestionsController({model: new QuestionsModel()});
