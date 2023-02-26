import {ResourcesModel} from './resources_model.js';
import * as domUtils from '../../common/utils/dom_utils.js';
import { ResourceType } from '../../common/enums/resource_type_enum.js';
import { State } from '../../state.js';
import { RESOURCE_TYPE_TO_STRING, RESOURCE_TYPE_TO_NODE_MAP } from '../../common/enums/enumconverter.js';

class ResourcesController {
    constructor({model}) {
        this.resourcesModel = model;
        this.state = State;
    }

    initPageLoad() {
        this._setInitialState();
        this._attachEventListeners();
    }

    _setInitialState() {
        RESOURCE_TYPE_TO_STRING.forEach(
            (name, resourceType) => State.update({[name]: this.resourcesModel.getResources(resourceType)}));
    }

    _createLinkEl({title, url}) {
        const a =  document.createElement('a');
        a.setAttribute('href', url);
        a.appendChild(document.createTextNode(title));
        return a;
    }

    _attachEventListeners() {
        const resourceList = document.getElementById('gdi-resource-list')

        RESOURCE_TYPE_TO_NODE_MAP.forEach((node, resourceType) => {
            node.addEventListener('click', () => {
                // Clear resources list
                domUtils.removeNodeChildren(resourceList);
                this._updateActiveResource(resourceType);

                switch (resourceType) {
                    case ResourceType.BOOK:
                        // Add books
                        for (const [category, books] of Object.entries(State.get().books)) {
                            const booksUl = document.createElement('ul');
                            const categoryEl = document.createElement('li');

                            categoryEl.classList.add('gdi-book-category-title');
                            categoryEl.appendChild(document.createTextNode(category));
                            booksUl.appendChild(categoryEl);

                            this._renderResourcesList({
                                parentNode: resourceList, 
                                listNode: booksUl, 
                                resourceData: books});
                        }
                        break;
                    case ResourceType.COURSE:
                    case ResourceType.MOCK:
                        const ul = document.createElement('ul');
                        const resourceStr = RESOURCE_TYPE_TO_STRING.get(resourceType);
                        const resourceData = State.get()[resourceStr];
                        this._renderResourcesList({ 
                            parentNode: resourceList, 
                            listNode: ul,
                            resourceData,
                        });
                        break;
                }
            });
        })
    }

    _updateActiveResource(activeResource) {
        this.state.update({activeResource});
    }

    _renderResourcesList({resourceData, parentNode, listNode}) {
        // Add resource titles w/ url link.
        resourceData.slice(0, 3).forEach(resource => {
            const li = document.createElement('li');
            li.appendChild(this._createLinkEl(resource));
            listNode.appendChild(li);
        });
        parentNode.appendChild(listNode);
    }
}

export const resourcesController = new ResourcesController({model: new ResourcesModel()});