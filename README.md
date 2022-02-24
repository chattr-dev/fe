`npm i`

`npm start`

Open [http://localhost:3000](http://localhost:3000)

### Seeded Test User

Email: `james_h@gmail.com`

Password: `test123$`

## Architecture breakdown

- The front end communicates with the api via a restful endpoint: `http://localhost:4000/api/v1/user/:id` as well as a websocket that the phoenix app exposes: `ws://localhost:4000/socket`. The idea being that basic CRUD operations are handled through the restful endpoints, and high throughput timer actions are handled via the websocket. Currently the FE connects to the websocket via the `user:id` channel and is returned user data that the socket persists regarding user projects. The idea being that timing would be handled and persisted via the phoenix app and the UI would be purely presentational. Due to time constraints the FE only sends timer `start`, `pause`, `resume`, and `reset` events via the socket.
