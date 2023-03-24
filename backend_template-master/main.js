const posts = []
const telegrambot = require('node-telegram-bot-api')
const token = 
const bot = new telegrambot(token,{polling:true})
const ChatID = 

// Импортируем библиотеку fastify для развертывания веб-сервера
const fastify = require('fastify')({
    logger: true // Эта штука нужна, чтобы в терминале отображались логи запросов
})


fastify.post('/post/add', async function(request, reply){
    // Name
    // Description
    // Author
    // Date
    // Time for reading

    let object = request.body
    console.log(object);
    object.createdAt = new Date()
    console.log(object)
    await bot.sendMessage(ChatID, 'Hi')
    posts.push(object)
    reply.send('hello')

})


// Блок кода, который нужен для исправления ошибки с CORS
fastify.register(require('@fastify/cors'), (instance) => {
    return (req, callback) => {
        const corsOptions = {
            // This is NOT recommended for production as it enables reflection exploits
            origin: true
        };

        // do not include CORS headers for requests from localhost
        if (/^localhost$/m.test(req.headers.origin)) {
            corsOptions.origin = false
        }

        // callback expects two parameters: error and options
        callback(null, corsOptions)
    }
})

// Создание маршрута для get запроса
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

// Создание маршрута для post запроса
fastify.post('/post',function (request, reply) {
    console.log(`Тело запроса: `,JSON.stringify(request.body))
    reply.send(request.body)
})

// Создание запроса с использование path параметров
fastify.get('/:id',function (request, reply) {
    console.log(`Path параметры, переданные в запросе: `,JSON.stringify(request.params))
    reply.send(request.params)
})

// Создание запроса с использованием query параметров
fastify.get('/query',function (request, reply) {
    console.log(`Query параметры, переданные в запросе`, JSON.stringify(request.query))
    reply.send(request.query)
})



// Запускаем сервер на порту 3000
fastify.listen({ port: 3001 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})

