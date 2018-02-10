import { dateFromObjectId } from '../../../lib/data';

export default [
  {
    value: 1,
    label: 'A -> Z',
    sortFn: (v1, v2) => {
      if (v1.name < v2.name) return -1;
      if (v2.name < v1.name) return 1;
      return 0;
    }
  },
  {
    value: 2,
    label: 'Z -> A',
    sortFn: (v1, v2) => {
      if (v1.name > v2.name) return -1;
      if (v2.name > v1.name) return 1;
      return 0;
    }
  }];
