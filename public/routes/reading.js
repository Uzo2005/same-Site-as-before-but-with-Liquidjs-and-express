const express   = require('express');
const path      = require('path');
const router    = express.Router();
const passageRouter = express.Router({mergeParams: true})
const store     = require('store2')
const client    = require('../../api/sanityClient')
const imageUrlBuilder = require('@sanity/image-url')
const builder = imageUrlBuilder(client)

router.use('/:passage', passageRouter)

const urlFor = (source) => {
    return builder.image(source)
    .auto('format')
         .fit('max')
         .width(720)
         .toString()
  }

const checkAunthenticated = (req, res, next) => {
    
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/')
}
    
const reading = 
    
    router.get('/reading',checkAunthenticated, (req, res) => {
    const examId = store('examInfo').examId;
    const examType = "Reading"
    
    const query  = `*[_id == '${examId}']{mockTest[_type == '${examType}']}`
    const allExamdata = async () => {
        const raw = await client.fetch(query)
        const neededData = await raw[0].mockTest
       
        const passage1 = await neededData[0].passage1
        const passage2 = await neededData[0].passage2
        const passage3 = await neededData[0].passage3
        const passage4 = await neededData[0].passage4
        const passage5 = await neededData[0].passage5

        const passage1ImageArrays = []
        for(i=0;i<passage1.whatWillBeRead.length; i++){

            const testOutIdea = passage1.whatWillBeRead[i].asset._ref
            const imgLink = urlFor(testOutIdea)
            passage1ImageArrays.push(imgLink)
            
        }
        store('passage1Images', passage1ImageArrays)
        
        
        const passage2ImageArrays = []
        for(i=0;i<passage2.whatWillBeRead.length; i++){

            const testOutIdea = passage2.whatWillBeRead[i].asset._ref
            const imgLink = urlFor(testOutIdea)
            passage2ImageArrays.push(imgLink)
            
        }
        store('passage2Images', passage2ImageArrays)


        const passage3ImageArrays = []
        for(i=0;i<passage3.whatWillBeRead.length; i++){

            const testOutIdea = passage3.whatWillBeRead[i].asset._ref
            const imgLink = urlFor(testOutIdea)
            passage3ImageArrays.push(imgLink)
            
        }
        store('passage3Images', passage3ImageArrays)


        const passage4ImageArrays = []
        for(i=0;i<passage4.whatWillBeRead.length; i++){

            const testOutIdea = passage4.whatWillBeRead[i].asset._ref
            const imgLink = urlFor(testOutIdea)
            passage4ImageArrays.push(imgLink)
            
        }
        store('passage4Images', passage4ImageArrays)

        const passage5ImageArrays = []
        for(i=0;i<passage5.whatWillBeRead.length; i++){

            const testOutIdea = passage5.whatWillBeRead[i].asset._ref
            const imgLink = urlFor(testOutIdea)
            passage5ImageArrays.push(imgLink)
            
        }
        store('passage5Images', passage5ImageArrays)
        // console.log(store())
        
        
    }
    allExamdata()

        res.render('reading',{imageUrls: store('passage1Images'), nextPagination: 'passage2', nextPassageUrl: '/reading/passage2'})
    
    });
    passageRouter.get('/passage2',checkAunthenticated, (req, res)=> {
        // res.send('Hi Motherfucker')
        res.render('reading',{imageUrls: store('passage2Images'), nextPagination: 'passage3', previousPagination: 'passage1', nextPassageUrl: '/reading/passage3', previousPassageUrl: '/reading'})
    })
    passageRouter.post('/passage3',checkAunthenticated, (req, res)=> {
        res.render('reading',{imageUrls: store('passage3Images'), nextPagination: 'passage4', previousPagination: 'passage2', nextPassageUrl: '/reading/passage4', previousPassageUrl: '/reading/passage2'})
    })
    passageRouter.post('/passage4',checkAunthenticated, (req, res)=> {
        res.render('reading',{imageUrls: store('passage4Images'), nextPagination: 'passage5', previousPagination: 'passage3', nextPassageUrl: '/reading/passage5', previousPassageUrl: '/reading/passage3'})
    })
    passageRouter.post('/passage5',checkAunthenticated, (req, res)=> {
        res.render('reading',{imageUrls: store('passage5Images'), previousPagination: 'passage4', previousPassageUrl: '/reading/passage4'})
    })


module.exports = reading;