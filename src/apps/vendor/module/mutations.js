import data from '@/lib/data';
import { uuidv4 } from '@/lib/uuid';
import { prepEmptyResponse, prepEmptyProduct } from './fns';

export const scheduledAppt = (state, selectedTime) => {
  state.scheduledAppt = selectedTime;
};

export const buyer = (state, buyer) => {
  state.buyer = buyer;
};

export const finalResponse = (state, response) => {
  state.finalResponse = response;
};

export const newProduct = (state, params) => {
  const newProduct = prepEmptyProduct(params.productDef);
  params.products.push(newProduct);
};

export const productFile = (state, params) => {
  params.product[params.field].push({
    id: uuidv4(),
    name: params.name,
    formData: params.formData
  });
};

export const questionnaire = (state, questionnaire) => {
  state.questionnaire = questionnaire;
  state.response = prepEmptyResponse(questionnaire);
};

export const threads = (state, threads) => {
  state.threads = threads;
};

export const vendor = (state, vendor) => {
  state.vendor = vendor;
};
