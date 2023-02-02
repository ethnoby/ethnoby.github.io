// import 'dotenv/config'
import { Client } from 'typesense'

// Create a new client
const client = new Client({
  nodes: [
    {
      host: '90ua8e6pk1izdy7wp-1.a1.typesense.net',
      port: '443',
      protocol: 'https'
    }
  ],
  apiKey: 'xcbZQ3wYIvHzkZpWypZXfb8O84aUBUN1', // admin key
  connectionTimeoutSeconds: 2
})

export default client
