import data from '@/lib/data';
import { prepEmptyResponse, prepEmptyStrain, prepEmptyProduct } from './fns';

export const finalResponse = (state, response) => {
  state.finalResponse = response;
};

export const newConcentrateProduct = (state) => {
  const concentratesDef = _.find(state.questionnaire.pages, { name: 'Concentrates' });
  const productsDef = _.find(concentratesDef.questions, { name: 'Products' });
  const product = prepEmptyProduct(productsDef.items);
  state.response.concentrates.products.push(product);
};

export const newEdibleProduct = (state) => {
  const ediblesDef = _.find(state.questionnaire.pages, { name: 'Edibles' });
  const productsDef = _.find(ediblesDef.questions, { name: 'Products' });
  const product = prepEmptyProduct(productsDef.items);
  state.response.edibles.products.push(product);
};

export const newProduct = (state, params) => {
  const newProduct = prepEmptyProduct(params.productDef);
  params.products.push(newProduct);
};

export const productFile = (state, params) => {
  params.product[params.field].push({
    id: data.genId(),
    name: params.file.name,
    file: params.file
  });
};

export const questionnaire = (state, questionnaire) => {
  state.questionnaire = questionnaire;
  state.response = prepEmptyResponse(questionnaire);
};

export const strainFile = (state, params) => {
  params.strain[params.field].push({
    id: data.genId(),
    name: params.file.name,
    file: params.file
  });
};
