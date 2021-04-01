import {createAction} from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('conatcts/add', data => ({
    payload: {
        id: shortid.generate(),
        name: data.name,
        number: data.number,
      }
}));
const deleteContact = createAction('conatcts/delete');

const changeFilter = createAction('conatcts/changeFilter');

// eslint-disable-next-line 
export default {addContact, deleteContact, changeFilter};


// const addContact = (data) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name: data.name,
//         number: data.number,
//       }
// });

// const deleteContact = (id) => ({
//     type: types.DELETE,
//     payload: id,
// })
// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// })