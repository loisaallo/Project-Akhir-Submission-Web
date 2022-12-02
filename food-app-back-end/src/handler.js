const foods = require('./foods');
const {nanoid} = require('nanoid');


const addFoodHandler = (request, h) => {
    const {makanan, minuman, harga} = request.payload;
    const id = nanoid(16);
    const newFood = {id, makanan, minuman, harga};
    foods.push(newFood);
    const isSuccess = foods.filter((food) =>food.id === id).length > 0;
    if(isSuccess){
        const response = h.response({
            status: 'success',
            message: 'Berhasil Menambahkan pesanan',
            data: {
                foodId: id
            },
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Gagal Menambahkan pesanan',
    });
    response.code(500);
    return response;
}

const getFoodsHandler = () => ({
    status: 'succes',
    data: {
        foods: foods,
    }
});
const getFoodByIdHandler = (request, h) => {
    const {id} = request.params;
    const food = foods.filter((f) => f.id === id)[0];
    if(food !== undefined){
        const response = h.response({
            status: 'success',
            data: {
                food: food,
            },
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Id tidak ditemukan',
    });
    response.code(404);
    return response;
}

const editFoodHandler = (request, h) => {
    const {id} = request.params;
    const {makanan, minuman, harga} = request.payload;
    const index = foods.findIndex((food) => food.id === id);
    if(index !== -1){
        foods[index] = {
            ...foods[index],
            makanan,
            minuman,
            harga
        }
        const response = h.response({
            status: 'succes',
            message: 'Berhasil memperbarui pesanan',
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui pesanan. Id tidak ditemukan',
    });
    response.code(404);
    return response;
}

const deletefoodHandler = (request, h) => {
    const {id} = request.params;
    const index = foods.findIndex((food) => food.id === id);
    if(index !== -1){
        foods.splice(index, 1);
        const response = h.response({
            status: 'succes',
            message: 'Berhasil menghapus pesanan',
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Gagal menghapus pesanan. Id tidak ditemukan',
    });
    response.code(404);
    return response;
}

module.exports = {
    addFoodHandler,
    getFoodsHandler,
    getFoodByIdHandler,
    editFoodHandler,
    deletefoodHandler
};