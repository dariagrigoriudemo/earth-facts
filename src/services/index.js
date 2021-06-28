import {cosmosDbApi, testApi, sentimentApi, authApi} from './api';

const isProduction = process.env.NODE_ENV != 'development'; 

export const services = {
    facts : isProduction ? cosmosDbApi: testApi,
    sentiment : sentimentApi,
    auth: authApi,
}

export default services;