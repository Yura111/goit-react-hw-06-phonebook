import { createAction } from '@reduxjs/toolkit';
import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';



// const addContact = data =>({
//     type: types.ADD,
//     payload: data
// })

// const deleteContact = id => ({
//     type: types.DELETE,
//     payload: id
// })

// const changeFilter = value => ({
//     type:types.CHANGE_FILTER,
//     payload:value
// })

/*
const addContact = createAction(types.ADD, (name, phone)=>{
    return {
        payload:{
            id:uuidv4(),
            name:name,
            phone:phone
        }
    }
});
const deleteContact = createAction(types.DELETE)
const changeFilter = createAction(types.CHANGE_FILTER)*/

const addContact = createAction('phonebook/add', (name, phone)=>{
    return {
        payload:{
            id:uuidv4(),
            name:name,
            phone:phone
        }
    }
});
const deleteContact = createAction('phonebook/delete')
const changeFilter = createAction('phonebook/changeFilter')

export default{
    addContact,
    deleteContact,
    changeFilter
}