export default {
    name: 'reading',
    title: 'Reading',
        type: 'document',
    fields: [
        {
            name: 'passage',
            title: 'Passage',
                type: 'document',
            fields:[
                {
                    name: 'readingPassage',
                    title: 'Reading Passage',
                        type:  'string | image',
                },
                {
                    name: 'questions',
                    title: 'Questions and Options',
                        type: 'document',
                    field: [
                        {
                            name: 'question',
                            title: 'Question',
                            type: 'string'
                        },
                        {
                            name: 'options',
                            title: 'Options',
                            type: 'array',
                            of: [{type:'object'}]
                            
                        },
                        {
                            name: 'explanations',
                            title: 'Explanation',
                            type: 'array',
                            of: [{type:'object'}]
                            
                        }
                        
                    ]
                }
            ]

        },

    ]

}