import data from '@/lib/data';
import { prepEmptyResponse, prepEmptyStrain } from './fns';

export const newStrain = (state) => {
  if (!state.response.flowers.strains) {
    state.response.flowers.strains = [];
  }
  const strain = prepEmptyStrain(state.questionnaire);
  state.response.flowers.strains.push(strain);
};

export const questionnaire = (state, questionnaire) => {
  state.questionnaire = questionnaire;
  state.response = prepEmptyResponse(questionnaire);
};

export const receipt = (state, receipt) => {
  state.receipt = receipt;
};

export const session = (state, session) => {
  state.session = session;
};

export const strainFile = (state, params) => {
  params.strain[params.field].push({
    id: data.genId(),
    name: params.file.name,
    file: params.file
  });
};
