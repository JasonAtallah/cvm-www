export const prepEmptyResponse = (questionnaire) => {
  const response = {};
  questionnaire.pages.forEach((page) => {
    const pageResp = {};
    response[page.id] = pageResp;
    page.questions.forEach((q) => {
      pageResp[q.id] = _.clone(q.default);
    });
  });

  return response;
};

export const prepEmptyProduct = (productsDef) => {
  const product = {};

  Object.keys(productsDef).forEach((key) => {
    const field = productsDef[key];
    product[field.id] = _.clone(field.default);
  });

  return product;
};

export const isFileField = (obj) => {
  return obj && (obj.type === 'File' || (obj.type === 'Array' && obj.items === 'File'));
};

export const pullFileFields = (questionnaire) => {
  const fields = [];
  traverse(questionnaire).forEach((obj) => {
    if (isFileField(obj)) {
      fields.push(obj);
    }
  });
  return fields;
};
