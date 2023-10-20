import redis from 'redis';

const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', (error) => {
    console.error(`Redis error: ${error}`);
});

export default client;
