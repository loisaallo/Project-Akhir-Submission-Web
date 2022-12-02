const {addFoodHandler,
    getFoodsHandler,
    getFoodByIdHandler,
    editFoodHandler,
    deletefoodHandler
} = require('./handler');

const routes = [
    //add
    {
        method: 'POST',
        path: '/foods',
        handler: addFoodHandler
    },
    //get all
    {
        method: 'GET',
        path: '/foods',
        handler: getFoodsHandler
    },
    //get by id
    {
        method: 'GET',
        path: '/foods/{id}',
        handler: getFoodByIdHandler
    },
    //edit
    {
        method: 'PUT',
        path: '/foods/{id}',
        handler: editFoodHandler
    },
    //delete
    {
        method: 'DELETE',
        path: '/foods/{id}',
        handler: deletefoodHandler
    },
];

module.exports = routes;