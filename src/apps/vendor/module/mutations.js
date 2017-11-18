import { prepEmptyResponse } from './fns';

export const addStrain = (state, strain) => {
  state.response.flowers.strains.push(strain);

export const questionnaire = (state, questionnaire) => {
  state.questionnaire = questionnaire;
  state.response = prepEmptyResponse(questionnaire);
};
