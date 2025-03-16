import { api } from "../utils/requester";

const endPoints = {
    getAll: "/teacher",
    // createNew: '/data/cars',
    // apiById: "/item",
    // search: (query) => `/data/cars?where=year%3D${query}`,
    // getMyCar: (userId) => `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
};

async function getAll() {
    return await api.get(endPoints.getAll);
}

async function createNew(data) {
    return await api.post(endPoints.getAll, data);
}

async function getById(id) {
    return await api.get(endPoints.getAll + `/${id}`);
}

async function editById(id, data) {
    return await api.put(endPoints.getAll + `/${id}`, data);
}

async function delById(id) {
    return await api.del(endPoints.getAll + `/${id}`);
}

// async function searchItem(query) {
//     return await api.get(endPoints.search(query));
// }

// async function getMyCar(userId) {
//     return await api.get(endPoints.getMyCar(userId));
// }

export const teacherService = {
    getAll,
    createNew,
    getById,
    editById,
    delById,
    // searchItem,
    // getMyCar
};

function transformUserData(userData) {
    const { country, city, street, streetNumber, ...transformedData } =
        userData;

    transformedData.address = { country, city, street, streetNumber };
    transformedData.createdAt = new Date().toISOString();
    transformedData.updatedAt = new Date().toISOString();

    return transformedData;
}
