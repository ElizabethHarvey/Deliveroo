// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import restaurant from './Restaurant'
import dish from './dish'
import category from './category'
import featured from './featured'


// We import object and document schemas


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    restaurant,
    dish,
    category,
    featured,
  ]),
})
