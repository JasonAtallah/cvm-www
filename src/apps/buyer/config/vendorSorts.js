export default [
  {
    label: 'Newest First',
    sortFn: (v1, v2) => {
      if (v1.created > v2.created) return -1;
      if (v2.created > v1.created) return 1;
      return 0;
    }
  },
  {
    label: 'Oldest First',
    sortFn: (v1, v2) => {
      if (v1.created < v2.created) return -1;
      if (v2.created < v1.created) return 1;
      return 0;
    }
  },
  {
    label: 'Alphabetical',
    sortFn: (v1, v2) => {
      if (v1.name < v2.name) return -1;
      if (v2.name < v1.name) return 1;
      return 0;
    }
  }];
