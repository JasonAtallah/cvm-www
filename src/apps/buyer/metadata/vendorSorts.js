import { dateFromObjectId } from '../../../lib/data';

export default [
  {
    label: 'Newest First',
    sortFn: (v1, v2) => {
      const v1Created = dateFromObjectId(v1._id);
      const v2Created = dateFromObjectId(v2._id);
      if (v1Created > v2Created) return -1;
      if (v2Created > v1Created) return 1;
      return 0;
    }
  },
  {
    label: 'Oldest First',
    sortFn: (v1, v2) => {
      const v1Created = dateFromObjectId(v1._id);
      const v2Created = dateFromObjectId(v2._id);
      if (v1Created < v2Created) return -1;
      if (v2Created < v1Created) return 1;
      return 0;
    }
  },
  {
    label: 'Alphabetical',
    sortFn: (v1, v2) => {
      if (v1.company.name < v2.company.name) return -1;
      if (v2.company.name < v1.company.name) return 1;
      return 0;
    }
  }];
