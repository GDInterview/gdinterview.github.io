import { Books } from '../../datastore/books.js';
import { Courses } from '../../datastore/courses.js';
import { MockInterviews } from '../../datastore/mock_interviews.js';
import { ResourceType } from '../../common/enums/resource_type_enum.js';
import { RESOURCE_TYPE_TO_DATA } from '../../common/enums/enumconverter.js';

export class ResourcesModel {
    getResources(type) {
        return RESOURCE_TYPE_TO_DATA.get(type);
    }
}