import { Books } from '../../datastore/books.js';
import { Courses } from '../../datastore/courses.js';
import { MockInterviews } from '../../datastore/mock_interviews.js';
import { ResourceType } from '../../common/enums/resource_type_enum.js';

export const RESOURCE_TYPE_TO_STRING = new Map([
    [ResourceType.COURSE, 'courses'],
    [ResourceType.BOOK, 'books'],
    [ResourceType.MOCK, 'mocks'],
]);

export const RESOURCE_TYPE_TO_NODE_MAP = new Map([
    [ResourceType.COURSE, document.getElementById('gdi-courses-li-header')],
    [ResourceType.BOOK, document.getElementById('gdi-books-li-header')],
    [ResourceType.MOCK, document.getElementById('gdi-mock-interview-li-header')],
]);

export const RESOURCE_TYPE_TO_DATA = new Map([
    [ResourceType.BOOK, Books],
    [ResourceType.COURSE, Courses],
    [ResourceType.MOCK, MockInterviews],
]);