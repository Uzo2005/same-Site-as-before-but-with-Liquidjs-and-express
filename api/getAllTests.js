const client = require('./sanityClient');

const query  = "*[_type == 'satExams']"

const getAllTestIds =
 
client.fetch(query)
.then((tests) => {
    const info = []
    for (i= 0; i < tests.length; i++){
        
        info.push({
             idText: tests[i].testIdentifier,
             id    : tests[i]._id
        })

        
      
    }
    return info
})  



module.exports = getAllTestIds