import React from "react";

export interface InitialContextInterface {
    state:State,
    dispatch:React.Dispatch<Action>,
    isAdding:Boolean,
    setIsAdding:(isAdding: Boolean) => void;
    isEditing:Boolean,
    setIsEditing:(isEditing:Boolean) => void;
    targetId:number | string,
    setTargetId:(targetId: number | string) => void
}

export interface Blog {
    id: number;
    userId:number;
    title: string;
    body: string;
}

export interface State {
    blogs: Blog[];
    blogToPublish:[],
    isAdding:Boolean,
    setIsAdding:(isAdding: Boolean) => void;
    isEditing:Boolean,
    setIsEditing:(isEditing:Boolean) => void;
    targetId:number | string,
    setTargetId:(targetId: number | string) => void
}

export interface Action {
    type: string;
    payload?: any; 
}