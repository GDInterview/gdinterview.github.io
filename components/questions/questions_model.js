import {questions} from '../../datastore/questions.js';

export class QuestionsModel {
    constructor() {
        this.questions = questions;
    } 

    getRandQuestionNode() {
        return document.createTextNode(this._getRandQuestion());
    }

    _getRandQuestion() {
        return this.questions[this._getRandomInt(0, this.questions.length)]?.text;
    }

    _getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
