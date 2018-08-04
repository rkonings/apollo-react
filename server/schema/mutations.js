const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString} = graphql;
const UserType = require('./types/user_type');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        updateUser: {
            type: UserType,
            args: {
                email: {type: GraphQLString }
            },
            resolve(parentValue, {email}){
                return {email: parentValue};
            }
        }
    }
});

module.exports = mutation;