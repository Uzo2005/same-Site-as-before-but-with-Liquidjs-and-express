const store = require('store2')
const client = require('./sanityClient')

const examId = store('examInfo');
    const query  = `*[_id == '${examId}']`
    const allExamdata = async () => {
        const raw = await client.fetch(query)
        console.log(raw)
    }
    allExamdata()

/**
 * MvP
 */




