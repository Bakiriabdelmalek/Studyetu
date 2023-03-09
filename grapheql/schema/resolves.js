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

        User:{ 
            favmovies:()=>{
                return _.filter(MovieList,(movie)=>
                movie.yearOfPublication >= 2000 && movie.yearOfPublication <=2010
                );
            }
        },
        Mutation:{
            createUser:(parent,args)=>{
            const user = args.input;
            const LastID = UserList[UserList.length -1].id;
            user.id = LastID+1;
            UserList.push(user);
            return user;

            },
            updateUsername(parent,args){
                const {id,newUsername} = args.input;
                
                let userwchange;
                UserList.forEach(element => {
                    
                    if(element.id == id){
                      element.username = newUsername;
                      console.log(element)
                      userwchange = element;
                    }
                  
                });
                
                return userwchange;

            },
            deleteUser:(parent,args)=>{
                const { id } = args.input;
                
                UserList.splice(id-1,1);
                 return null;
                
            }
        }
    };

module.exports = {resolvers}