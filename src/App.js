import axios from "axios";




function App() {

 const getData = async (Number) => {
   const {data : user} = await axios(`https://jsonplaceholder.typicode.com/users/${Number}`)


   const {data : post} = await axios(`https://jsonplaceholder.typicode.com/posts/${Number}`)

   console.log(user)
   console.log("Post :",post);
 } 
 getData(1)
  
 
}

export default App;
