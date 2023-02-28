import {Questions} from '../../datastore/questions';

export class QuestionsModel {
    private questions: typeof Questions;

    constructor() {
        this.questions = Questions;
    } 

    getRandQuestionNode() {
        return document.createTextNode(this._getRandQuestion());
    }

    _getRandQuestion() {
        return this.questions[this._getRandomInt(0, this.questions.length)]?.text;
    }

    _getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
