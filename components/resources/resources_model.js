import { RESOURCE_TYPE_TO_DATA } from '../../common/enums/enumconverter.js';

export class ResourcesModel {
    getResources(type) {
        return RESOURCE_TYPE_TO_DATA.get(type);
    }
}