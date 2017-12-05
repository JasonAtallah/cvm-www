import data from '@/lib/data';
import { prepEmptyResponse, prepEmptyProduct } from './fns';

export const finalResponse = (state, response) => {
  state.finalResponse = response;
};

export const newProduct = (state, params) => {
  const newProduct = prepEmptyProduct(params.productDef);
  params.products.push(newProduct);
};

export const questionnaire = (state, questionnaire) => {
  state.questionnaire = questionnaire;
  state.response = prepEmptyResponse(questionnaire);
};

export const vendor = (state, vendor) => {
  state.vendor = vendor;
};
