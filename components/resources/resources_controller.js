import {ResourcesModel} from './resources_model.js';

class ResourcesController {
    constructor({model}) {
        this.resourcesModel = model;
    }

    renderResources() {
        const courseList = document.getElementById('gdi-course-list');
        const bookList = document.getElementById('gdi-book-list');
        const coursesUl = document.createElement('ul');

        // Add courses
        this.resourcesModel.getCourses().forEach(course => {
            const li = document.createElement('li');
            li.appendChild(this._createLinkEl(course));
            coursesUl.appendChild(li);
        });
        courseList.appendChild(coursesUl);

        // Add books
        for (const [category, books] of Object.entries(this.resourcesModel.getBooks())) {
            const booksUl = document.createElement('ul');
            const categoryEl = document.createElement('li');

            categoryEl.classList.add('gdi-book-category-title');
            categoryEl.appendChild(document.createTextNode(category));
            booksUl.appendChild(categoryEl);
            books.forEach(book => {
                const li = document.createElement('li');
                li.appendChild(this._createLinkEl(book));
                booksUl.appendChild(li);
            });
            bookList.appendChild(booksUl);
        }
    }

    _createLinkEl({title, url}) {
        const a =  document.createElement('a');
        a.setAttribute('href', url);
        a.appendChild(document.createTextNode(title));
        return a;
    }
}

export const resourcesController = new ResourcesController({model: new ResourcesModel()});