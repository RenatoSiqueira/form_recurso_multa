import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const loadEsfera = () => api.get('esfera')
export const loadEstado = () => api.get('estado')
export const loadOrgaoByEsfera = (esfera) => api.get('orgao?esfera='+esfera)
export const loadOrgaoByEsferaEstado = (esfera, estado) => api.get('orgao?esfera='+esfera+'&estado='+estado)

const apis = {
    loadEsfera,
    loadEstado,
    loadOrgaoByEsfera,
    loadOrgaoByEsferaEstado
}

export default apis