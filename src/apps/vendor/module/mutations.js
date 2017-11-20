import data from '@/lib/data';
import { prepEmptyResponse, prepEmptyStrain } from './fns';

export const newStrain = (state) => {
  const strain = prepEmptyStrain(state.questionnaire);
  state.response.flowers.strains.push(strain);
};

export const questionnaire = (state, questionnaire) => {
  state.questionnaire = questionnaire;
  state.response = prepEmptyResponse(questionnaire);
};

export const finalResponse = (state, response) => {
  state.finalResponse = response;
};

export const strainFile = (state, params) => {
  params.strain[params.field].push({
    id: data.genId(),
    name: params.file.name,
    file: params.file
  });
};
