export const prepEmptyResponse = (questionnaire) => {
  const response = {};

  questionnaire.pages.forEach((page) => {
    const pageResp = {};
    response[_.lowerFirst(page.name)] = pageResp;
    page.questions.forEach((q) => {
      pageResp[_.lowerFirst(q.name)] = null;
    });
  });

  return response;
};

export const prepEmptyResponse1 = (questionnaire) => {
  return true;
};
