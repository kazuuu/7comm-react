import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export class AxiosHttpClient {

    async post (url: string, data: String): Promise<AxiosResponse> {
        let axiosResponse: AxiosResponse;

        try {
            axiosResponse = await axios.post(
                url,
                data
            )
        } catch (error: any) {
            axiosResponse = error.response;
        }

        return axiosResponse;
    }

    async get (url: string, data: String): Promise<AxiosResponse> {
        let axiosResponse: AxiosResponse;

        try {
            axiosResponse = await axios.post(
                url,
                data,
            )
        } catch (error: any) {
            axiosResponse = error.response
        }

        return axiosResponse;
    }

}
