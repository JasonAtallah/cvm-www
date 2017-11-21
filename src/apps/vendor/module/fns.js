export const prepEmptyResponse = (questionnaire) => {
  const response = {};
  questionnaire.pages.forEach((page) => {
    const pageResp = {};
    response[page.id] = pageResp;
    page.questions.forEach((q) => {
      pageResp[q.id] = q.default;
    });
  });

  return response;
};

export const prepEmptyProduct = (productsDef) => {
  const product = {};

  Object.keys(productsDef).forEach((key) => {
    const field = productsDef[key];
    product[field.id] = field.default;
  });

  return product;
};
