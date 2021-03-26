import http from '../http-common.js';

const getAtributes = (name) => {
    return http.get(`/atributes?name=${name}`);
};

const updateVida = (id, data) => {
    return http.put(`/atributes/${id}`, data);
}

export default { getAtributes, updateVida};