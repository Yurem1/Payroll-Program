import React from 'react';

type TForm = {
    input: 'Name' | 'Last name' | 'ssn'
}

export interface IForm {
    name: string;
    lastName: string;
    ssn: number;
}

interface IAction {
    name: TForm["input"];
    value: string;
}

export default class Data {
    public static reducer(state: IForm, action: IAction): IForm {
        if(action.name) {
            return {
                ...state
            }
        }

        return {
            ...state
        }
    }
}