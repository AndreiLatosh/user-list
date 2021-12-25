import axios from "axios";
import { setUsers } from "../reducers/usersReducer";

export const getUsers = () => {
    return async dispatch => {
        try {
            const response = await axios.get('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
            dispatch(setUsers(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}