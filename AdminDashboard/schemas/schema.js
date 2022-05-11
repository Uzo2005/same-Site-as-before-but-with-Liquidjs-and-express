import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import pet from './pet' // import the file you just made

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
		pet, // add the document type to this array
  ]),
});


// First, we must import the schema creator
// import createSchema from 'part:@sanity/base/schema-creator'

// // Then import schema types from any plugins that might expose them
// import schemaTypes from 'all:part:@sanity/base/schema-type'

// // Then we give our schema to the builder and provide the result to Sanity
// export default createSchema({
//   name: 'default',
//   types: schemaTypes.concat([]),
// })