const Hapi = require('@hapi/hapi');
const { 
  addBookHandler, 
  getAllBooksHandler, 
  getBookByIdHandler, 
  updateBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handlers');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  console.log('addBookHandler:', typeof addBookHandler);
  console.log('getAllBooksHandler:', typeof getAllBooksHandler);
  console.log('getBookByIdHandler:', typeof getBookByIdHandler);
  console.log('updateBookByIdHandler', typeof updateBookByIdHandler);
  console.log('deleteBookByIdHandler', typeof deleteBookByIdHandler);

  server.route([
    {
      method: 'POST',
      path: '/books',
      handler: addBookHandler,
    },
    {
      method: 'GET',
      path: '/books',
      handler: getAllBooksHandler,
    },
    {
      method: 'GET',
      path: '/books/{bookId}',
      handler: getBookByIdHandler,
    },
    {
      method: 'PUT',
      path: '/books/{bookId}',
      handler: updateBookByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/books/{bookId}',
      handler: deleteBookByIdHandler,
    }

  ]);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
