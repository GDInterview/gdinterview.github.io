import { QuestionsModel } from "./questions_model.js";
import * as domUtils from '../../common/utils/dom_utils.js';

class QuestionsController {
    constructor({model}) {
        this.questionsModel = model;
    }

    updateQuestionView() {
        const mainContentEl = document.getElementById('gdi-main-content');

        // Clear main content
        domUtils.removeNodeChildren(mainContentEl);

        mainContentEl?.appendChild(
            this._questionWrapper(this.questionsModel.getRandQuestionNode()));
    }

    initPageLoad() {
        this._attachEventListeners();
    }

    _attachEventListeners() {
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
        el.addEventListener('mouseup', (event) =>{
            const userSelection = window?.getSelection();
            window.getSelection().removeAllRanges();
        });
    }
}

export const questionsController = new QuestionsController({model: new QuestionsModel()});
