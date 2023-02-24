import { QuestionsModel } from "./questions_model.js";

export class QuestionsController {
    constructor({model}) {
        this.questionsModel = model;
    }

    updateQuestionView() {
        const questionEl = document.getElementById('question');
        questionEl?.firstChild?.remove();
        questionEl?.appendChild(this.questionsModel.getRandQuestionNode());
    }

    initPageLoad() {
        this.updateQuestionView();

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