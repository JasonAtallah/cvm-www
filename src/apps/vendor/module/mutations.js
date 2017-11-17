export const questionnaire = (state, questionnaire) => {
  state.questionnaire = questionnaire;
};

export const addStrain = (state, strain) => {
  state.response.flowers.strains.push(strain);
};
