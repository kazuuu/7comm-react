import axios, { AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders, AxiosInstance } from 'axios';


export class HttpClient {
    private _axios: AxiosInstance;

    public constructor(props: { authenticated: boolean, config?: AxiosRequestConfig }) {

        if (props.config) {
            console.log("httpclient config");

            this._axios = axios.create(props.config);    
        } else {
            if (props.authenticated) {
                console.log("httpclient 1");
                this._axios = axios.create({
                    baseURL: 'http://localhost:8080',
                    timeout: 1000,
                    // headers: {'X-Custom-Header': 'foobar'}
                });    
            } else {
                console.log("httpclient 2");
                this._axios = axios.create({
                    baseURL: 'https://some-domain.com/api/',
                    timeout: 1000,
                    // headers: {'X-Custom-Header': 'foobar'}
                });    
            }    
        }

        // Exemplos para alterar o axios
        // axios.defaults.headers.common['Authorization'] = `Bearer ${current_user}`;
        // delete axios.defaults.headers.common['Authorization']

    }

    public get instance() {
        return this._axios;
    }

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
