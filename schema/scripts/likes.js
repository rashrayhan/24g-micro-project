
db.createCollection( 'likes', {validator: {$jsonSchema: {bsonType: 'object',required: [         'userId',          'videoId',          'createdAt',          'updatedAt',          '__v'],properties: {userId: {bsonType: 'objectId'},videoId: {bsonType: 'objectId'},createdAt: {bsonType: 'date'},updatedAt: {bsonType: 'date'},__v: {bsonType: 'double'}}         }      }});  