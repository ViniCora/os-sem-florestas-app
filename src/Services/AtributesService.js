import http from '../http-common.js';

const getAtributes = (name) => {
    return http.get(`/atributes?name=${name}`);
};

export default { getAtributes };