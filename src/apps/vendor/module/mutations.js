import { prepEmptyResponse } from './fns';

export const newStrain = (state, strain) => {
  if (!state.response.flowers.strains) {
    state.response.flowers.strains = [];
  }

  state.response.flowers.strains.push(strain);
};

export const questionnaire = (state, questionnaire) => {
  state.questionnaire = questionnaire;
  state.response = prepEmptyResponse(questionnaire);
};
