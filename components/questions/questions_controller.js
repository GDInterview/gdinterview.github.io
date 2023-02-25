import { QuestionsModel } from "./questions_model.js";

class QuestionsController {
    constructor({model}) {
        this.questionsModel = model;
    }

    updateQuestionView() {
        const mainContentEl = document.getElementById('gdi-main-content');

        while (mainContentEl?.firstChild) {
            mainContentEl.removeChild(mainContentEl.firstChild);    
        }

        mainContentEl?.appendChild(
            this._questionWrapper(this.questionsModel.getRandQuestionNode()));
    }

    initPageLoad() {
        const els = [
            document.getElementById('gdi-main-content'),
            document.getElementById('gdi-main-content-spacer')
        ];

        document
            .addEventListener('keydown', (event) => {
                const key = event.key || String.fromCharCode(event.keyCode);

                switch(key) {
                    case "Enter":
                        this.updateQuestionView(this.questionsModel.getRandQuestionNode());
                        break;
                }
            }, false);

        els.forEach(el => this._addUpdateQuestionViewListeners(el));
    }

    _questionWrapper(node) {
        const p = document.createElement('p');
        p.classList.add('gdi-question-text');
        p.appendChild(node);
        return p;
    }

    _addUpdateQuestionViewListeners(el) {
        el.addEventListener('ontouchstart', () => {
            this.updateQuestionView(this.questionsModel.getRandQuestionNode());
        }, false);
        el.addEventListener('click', () => {
            this.updateQuestionView(this.questionsModel.getRandQuestionNode());
        }, false);
    }
}

export const questionsController = new QuestionsController({model: new QuestionsModel()});
