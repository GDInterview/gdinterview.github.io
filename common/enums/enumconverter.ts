import { ResourceType } from './resource_type_enum';

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
