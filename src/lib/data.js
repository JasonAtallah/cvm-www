export const genId = () => {
  return Math.random().toString().slice(2);
};

export const dateFromObjectId = (objectId) => {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
};
