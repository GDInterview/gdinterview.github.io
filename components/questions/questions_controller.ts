import { QuestionsModel } from "./questions_model";
import * as domUtils from '../../common/utils/dom_utils';

class QuestionsController {
    private questionsModel: QuestionsModel;

    constructor() {
        this.questionsModel = new QuestionsModel();
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
            .addEventListener('keydown', (event: KeyboardEvent) => {
                const key = event.key || String.fromCharCode(event.keyCode);

                switch(key) {
                    case "Enter":
                        this.updateQuestionView();
                        break;
                }
            }, false);

        els.forEach(el => this._addUpdateQuestionViewListeners(el));
    }

    _questionWrapper(node: Text) {
        const p = document.createElement('p');
        p.classList.add('gdi-question-text');
        p.appendChild(node);
        return p;
    }

    _addUpdateQuestionViewListeners(el: HTMLElement) {
        el.addEventListener('ontouchstart', () => {
            this.updateQuestionView();
        }, false);
        el.addEventListener('click', () => {
            this.updateQuestionView();
        }, false);
        el.addEventListener('mouseup', () =>{
            const userSelection = window?.getSelection();
            window.getSelection().removeAllRanges();
        });
    }
}

export const questionsController = new QuestionsController();
