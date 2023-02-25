import { Books } from '../../datastore/books.js';
import {Courses} from '../../datastore/courses.js';

export class ResourcesModel {
    constructor() {
        this.courses = Courses;
        this.books = Books;
    }

    getCourses() {
        return this.courses;
    }

    getBooks() {
        return this.books;
    }
}