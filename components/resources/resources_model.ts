import { Books } from '../../datastore/books';
import { Courses } from '../../datastore/courses';
import { MockInterviews } from '../../datastore/mock_interviews';
import { ResourceType } from '../../common/enums/resource_type_enum';

export class ResourcesModel {
    getResources(type: symbol) {
        return (type === ResourceType.BOOK) ? Books :
            (type === ResourceType.COURSE) ? Courses : MockInterviews;
    }
}