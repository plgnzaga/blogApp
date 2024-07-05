import React from "react";

export interface InitialContextInterface {
    state:State,
    dispatch:React.Dispatch<Action>
}

export interface Blog {
    id: number;
    userId:number;
    title: string;
    body: boolean;
}

export interface State {
    map: any;
    blogs: Blog[];
}

export interface Action {
    type: string;
    payload?: any; 
}