var graphql = require('graphql');
var data = require('./data.json');

var userType = new graphql.GraphQLObjectType({
    name:'User',
    fields:{
        name:{
            type:graphql.GraphQLString
        },
        id:{
            type:graphql.GraphQLString
        }
    }
});

var queryType = new graphql.GraphQLObjectType(
    {
        name:'Query',
        fields:{
            user:{
                type:userType,
                args:{
                    id:{
                        type:graphql.GraphQLString
                    }
                },
                resolve:function(root,args){
                    return data[args.id];
                }
            }
        }
    }
);

var schema = new graphql.GraphQLSchema(
    {
        query:queryType
    }
)

module.exports = schema;