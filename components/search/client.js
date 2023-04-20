// import 'dotenv/config'
import { Client } from 'typesense'

// Create a new client
const client = new Client({
  nodes: [
    {
      host: 'en4xjabqzl9v0pr1p-1.a1.typesense.net',
      port: '443',
      protocol: 'https'
    }
  ],
  apiKey: 'wPjUc5C5JzICtlt24yd50hcurSyNsEnA', // admin key
  connectionTimeoutSeconds: 2
})

export default client
