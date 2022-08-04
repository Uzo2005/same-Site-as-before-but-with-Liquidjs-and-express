const client = require('./sanityClient')
// const client = require('../../js/sanityClient')
///<reference lib = "dom"/>

const questionQuery = '*[_type == "reading"]{passage1{questions}}'

client.fetch(questionQuery)
.then((res) => {
        const questionOptionObject = res[0].passage1.questions
        console.log(questionOptionObject)
        return questionOptionObject

        //I will use a for loop here which will transverse the whole question object array returned above 
        //and the next query would use the i index notation instead of actual numbers
})
// .then((questionOptionObject) => {
//         for(i=0; i < questionOptionObject.length; i++){
//                 let QUESTION = questionOptionObject[i].newQuestion;
//                 let OPTIONS = questionOptionObject[i].options;

//                 const renderQuestionAndOptions = (question,options) => {
//                         const questionText = document.createElement('h5');
//                                 questionText.innerText =  question;
//                         const template = document.querySelector('.questions');
                        
//                         template.append(questionText);
        
//                         const radioOptions = options.map((option) => {
//                                 const optionsText = document.createElement('label');
//                                 const span = document.createElement('span');
//                                 optionsText.appendChild(span)
//                                         optionsText.htmlFor = option;
//                                         span.innerText = option;
//                                         span.classList.add('options');
//                                         const optionsRadio = document.createElement('input');
//                                                 optionsRadio.type = 'radio';
//                                                 optionsRadio.name = question;
//                                                 optionsRadio.value = option;
//                                         const br = document.createElement('br');
//                                         template.append(optionsRadio,optionsText,br)
//                         });               
//                 }        
        
//                 renderQuestionAndOptions(QUESTION, OPTIONS);
                
                
//         }
        
// });

// const PassageQuery = '*[_type == "reading" ]{passage1{whatWillBeRead[]{asset->{url}}}}'


// client.fetch(PassageQuery)
// .then((res) => {
//         const imageURL = res[0].passage1.whatWillBeRead;
//         const URL = imageURL.map((pic) => {
//                 return pic.asset.url
//         })
//         return URL
// })
// .then((URL) => {
//         const question = document.querySelector('.passages');
//         URL.forEach((url) => {
//                 const Image = document.createElement('img');
//                 Image.src = url
//                 question.appendChild(Image);
//         })
        
// });


