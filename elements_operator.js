//* Elements Operator

// In MongoDB, element operators are used to query documents based on the existence, type and values of fields within the documents. These operators help you work with fields that are arrays, null, missing, or have specific data types.

//? 1. $exists: Matches documents that have a specific field, regardless of its value.

//* db.products.find({ price: {$exists: true} }).count()

//* Find documents with the "price" field present, and if its present then check the value greater than 1200

//? 2. $type: THe $type operator filters documents based on the BSON data type of a field.
//Basically we need to search or find the fields base on types (BSON Type) for example

//The <BSONType> value can be one of the following:

// 1: Double
// 2: String
// 3: Object 
// 4: Array
// 5: Binary data
// 6: Undefined
// 7: Object id
// 8: Boolean
// 9: Date
// 10: Null
// 11: Regular expression
// 12: JavaScript code
