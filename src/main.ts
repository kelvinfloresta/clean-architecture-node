import restana from 'restana'

const PORT = 3000
const app = restana()

app
    .get('/', (_, res) => {
        res.send('Hello world!')
    })
    .start(PORT)
    .then(() => console.log('Running on port:', PORT))

export default app