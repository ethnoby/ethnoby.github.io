// Create a new client
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter'
const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'RDHjoFWQ4MRTl8pC98mRJQa7ALAg9NMi', // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: '90ua8e6pk1izdy7wp-1.a1.typesense.net',
        port: '443',
        protocol: 'https'
      }
    ],
    cacheSearchResultsForSeconds: 2 * 60 // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    query_by: 'name, content, performer, location'
  }
})

export default typesenseInstantsearchAdapter
