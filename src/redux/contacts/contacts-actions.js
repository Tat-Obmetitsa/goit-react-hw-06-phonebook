
import types from './contacts-types'
import shortid from 'shortid';


const addContact = (data) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name: data.name,
        number: data.number,
      }
})
const deleteContact = (id) => ({
    type: types.DELETE,
    payload: id,
})
const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value,
})
// eslint-disable-next-line 
export default {addContact, deleteContact, changeFilter};