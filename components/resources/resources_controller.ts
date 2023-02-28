import {ResourcesModel} from './resources_model';
import * as domUtils from '../../common/utils/dom_utils';
import { ResourceType } from '../../common/enums/resource_type_enum';
import { State } from '../../state';
import { RESOURCE_TYPE_TO_STRING, RESOURCE_TYPE_TO_NODE_MAP } from '../../common/enums/enumconverter';
import { Resources } from '../../common/gdiTypes';

class ResourcesController {
    private resourcesModel: ResourcesModel;

    constructor() {
        this.resourcesModel = new ResourcesModel();
    }

    initPageLoad() {
        this._setInitialState();
        this._attachEventListeners();
    }

    _setInitialState() {
        RESOURCE_TYPE_TO_STRING.forEach(
            (name, resourceType) => State.update({[name]: this.resourcesModel.getResources(resourceType)}));
    }

    _createLinkEl(params: { title: string, url: string }) : HTMLAnchorElement {
        const a =  document.createElement('a');
        a.setAttribute('href', params.url);
        a.appendChild(document.createTextNode(params.title));
        return a;
    }

    _attachEventListeners() {
        RESOURCE_TYPE_TO_NODE_MAP.forEach((node: HTMLElement, resourceType: symbol) => {
            node.addEventListener('click', () => {   
                this._updateActiveResource(resourceType);

                switch (resourceType) {
                    case ResourceType.BOOK:
                        this._renderBooks();
                        break;
                    case ResourceType.COURSE:
                    case ResourceType.MOCK:
                        this._renderGeneralResource(resourceType);
                        break;
                }
            });
        })
    }

    _renderBooks() {
        const resourceList = document.getElementById('gdi-resource-list');

        // Clear resources list
        domUtils.removeNodeChildren(resourceList);

        for (const [category, books] of Object.entries(State.get().books)) {
            const booksUl = document.createElement('ul');
            const categoryEl = document.createElement('li');
            categoryEl.classList.add('gdi-book-category-title');
            categoryEl.appendChild(document.createTextNode(category));
            booksUl.appendChild(categoryEl);

            this._renderResourcesList({
                parentNode: resourceList, 
                listNode: booksUl, 
                resourceData: books as Resources[]});
        }
    }

    _renderGeneralResource(resourceType: symbol) {
        const resourceList = document.getElementById('gdi-resource-list');
        const resourceStr = RESOURCE_TYPE_TO_STRING.get(resourceType);
        const resourceData = State.get()[resourceStr];
        const ul = document.createElement('ul');
        
        // Clear resources list
        domUtils.removeNodeChildren(resourceList);

        this._renderResourcesList({ 
            parentNode: resourceList, 
            listNode: ul,
            resourceData,
        });
    }

    _updateActiveResource(activeResource: any) {
        State.update({activeResource});
    }

    _renderResourcesList(params: {resourceData: Resources[], parentNode: HTMLElement, listNode: HTMLElement}) {
        const {resourceData, parentNode, listNode} = params;
        
        // Add resource titles w/ url link.
        resourceData.slice(0, 3).forEach(resource => {
            const li = document.createElement('li');
            li.appendChild(this._createLinkEl(resource));
            listNode.appendChild(li);
        });
        parentNode.appendChild(listNode);
    }
}

export const resourcesController = new ResourcesController();