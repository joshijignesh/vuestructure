import {
    config,
    baseAxios as axios
} from '../api'

export default (store) => {
    return {
        $store: store,
        get() {
            return axios.get(`/user/me`, config(store))
        }
    }
}