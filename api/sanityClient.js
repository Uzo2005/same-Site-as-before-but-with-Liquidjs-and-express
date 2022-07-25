const sanityClient = require("@sanity/client")
        const client = sanityClient({
        projectId: '6hgz95se',
        dataset: 'production',
        apiVersion: '2021-10-21', // use current UTC date - see "specifying API version"!
        // token: 'sanity-auth-token', // or leave blank for unauthenticated usage
        useCdn: false, // `false` if you want to ensure fresh data
        });

module.exports = client     

/**
 * This is how I plan to do the api calls to content lake
 * There will be a file which contains the query to fetch all the needed content
 * Then depending on which mocktest the student clicked on, another query will be attached to the general one which will return that practice test
 * On the get request for each exam, I will send a query which will fetch all the images questions for that exam
 * I will then sort them by the sections they belong, then pagination by sections
 * The buttons which say go to next section would have to be done with js so as to fit each use case
 * Then each time the student is done with an exam, all his answers would be returned in an array
 * I will have a different query fetching the correct options and then I will map each option to a number
 * The user's answer array would also be numbers and then I will compare the two arrays, filtering out the incorrect answers
 * Still more to be done though
 */