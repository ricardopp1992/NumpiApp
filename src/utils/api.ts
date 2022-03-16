import axios, { AxiosResponse } from 'axios'

import { IOnboardData } from '@interfaces/http'

const httpClient = axios.create({
  baseURL: 'http://10.0.2.2:8080/',
})

export const getOnboardData = (): Promise<AxiosResponse<IOnboardData[]>> => {
  return httpClient.get('api/v1/onboard')
}