import React, {useState,useEffect} from 'react';
import Axios from 'axios';


 function Home() {
    const [cattle , setCattle] = useState([]);
    useEffect(() => {
        Axios
        .get('/cattles')
        .then(res=>{
            setCattle(res.data);
        })
        .catch(err => console.log(err));
    }, []);
  
    return(
        <div className = "HOME">
         
        
          {cattle.map((post) => (
          <h2>
            key={post.name}
            displayName={post.cattleid}
           username={post.cattleid}
           verified={post.verified}
           text={post.price}
           avatar={post.type}
           image={post.gender}</h2> 
        
           
        ))}
     
        </div>
    );
}
export default Home ;