import axios, { AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders, AxiosInstance } from 'axios';
import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import { UserModel } from '../../../domain/models/user.model';
import AuthService from '../../../domain/services/auth.service';

export interface IHttpClientProps {
    config?: AxiosRequestConfig,
    api?: boolean,
    authenticated?: boolean,
}

export default class HttpClient { 
    private _axios: AxiosInstance;

    constructor(props: IHttpClientProps) {
        let authService: AuthService = new AuthService();

        if (props.config) {
            this._axios = axios.create(props.config);    
        } else {
            if (props.api) {
                this._axios = axios.create({
                    baseURL: 'http://localhost:8080',
                    timeout: 1000,
                    // headers: {'Authorization': `Bearer ${authService.getAuthState().access_token}`}
                });    

                console.log("header 1", authService.getAuthState().access_token);

                if (((props.authenticated)) || (props.authenticated == undefined) || (props.authenticated == null))
                        this._axios.defaults.headers.common['Authorization'] = `Bearer ${authService.getAuthState().access_token}`;
            } else {
                this._axios = axios.create({
                    timeout: 1000,
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