export const prepEmptyResponse = (questionnaire) => {
  const response = {};

  questionnaire.pages.forEach((page) => {
    const pageResp = {};
    response[_.lowerFirst(page.name)] = pageResp;
    page.questions.forEach((q) => {
      pageResp[_.lowerFirst(q.name)] = q.default;
    });
  });

  return response;
};

export const prepEmptyStrain = (questionnaire) => {
  const flowersDef = _.find(questionnaire.pages, { name: 'Flowers' });
  const strainsDef = _.find(flowersDef.questions, { name: 'Strains' });
  const strain = {};

  Object.keys(strainsDef.items).forEach((key) => {
    const field = strainsDef.items[key];

    strain[_.lowerFirst(field.name)] = field.default;
  });

  return strain;
};
