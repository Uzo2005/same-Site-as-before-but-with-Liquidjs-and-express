const client = require('./sanityClient');

const query  = "*[testIdentifier == 'Practice']"

const getAllTests =

client.fetch(query)
.then((res) => {
    for(i=0; i<res.length; i++){
        const id = res[i].mockTest
        console.log(id)
    }
    
})  



// module.exports = getAllTests