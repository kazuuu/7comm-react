import axios, { AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

export class HttpClient {
    async post (config:{url: string, params?: String, data?: String, headers?: AxiosRequestHeaders}): Promise<AxiosResponse> {
    // async post (url: string, data: String): Promise<AxiosResponse> {
        let axiosResponse: AxiosResponse;

        try {
            // axiosResponse = await axios.post(
            //     url,
            //     data
            // )

            axiosResponse = await axios.request({
                baseURL: 'http://localhost:8080',
                url: config.url,
                method: 'post',
                data: config.data ? config.data : "",
                headers: config.headers ? config.headers : undefined,
                params: config.params ? config.params : "",
                timeout: 5000, // default is `0` (no timeout)
            });

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
