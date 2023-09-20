// Create a new client
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter'
const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'gAnynGmCFQn0hN1nOaUqouW2YxEfd8u2', // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: 'en4xjabqzl9v0pr1p-1.a1.typesense.net',
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
    query_by: 'name, content, performer, location, content_nohtml'
  }
})

export default typesenseInstantsearchAdapter
