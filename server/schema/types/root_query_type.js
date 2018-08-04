const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: { 
      type: UserType,
      resolve(parentValue, args){
        return { email: 'randy@randykonings.nl' };
      }
    }
  }
});

module.exports = RootQueryType;
