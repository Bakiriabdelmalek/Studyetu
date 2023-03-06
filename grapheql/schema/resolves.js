const {UserList,MovieList} =require('./FakeData')
const _ = require ("lodash")

const resolvers = {
    Query:{
        users(){
            return UserList;
        },
        user :(parent,args)=>{
            const id = args.id;
        const user = _.find(UserList,{id:Number(id)})
            return user;
        },
        movies: ()=>{
            return MovieList;
        },
        movie :(parent,args)=>{
            const name = args.name;
            const movi = _.find(MovieList,{name:name})
        return movi;
        }
    },
};
module.exports = {resolvers}