import { Component } from "react";

export class LocalStorageSource {
    static readonly removeItem = (key: string): any => {
        return localStorage.removeItem(key);
    }

    static readonly setObject = (key: string, value: object): void => {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value))
        } else {
            localStorage.removeItem(key)
        }
    }

    static readonly getObject = (key: string): any => {
        let item = localStorage.getItem(key);

        return item ? JSON.parse(item) : {};
    }

    static readonly setString = (key: string, value: string): void => {
        if (value) {
            localStorage.setItem(key, value);
        } else {
            localStorage.removeItem(key);
        }
    }

    static readonly getString = (key: string): any => {
        return localStorage.getItem(key);
    }

}
