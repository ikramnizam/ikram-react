import { useState } from "react";


const Home = () => {
    // let Name = 'mario';
    // const [name, setName] = useState('alip');
    //  const[age, setAge] = useState(20);

    // const handleClick1 = () => {
    //     setName('cappp');
    //     setAge(40);
    // }

    // const handleClick2 = (name) => {
    //     console.log('jfnvkjdfnvkjdfnvjefnv' + name);
    // }

    // const [blogs, setBlogs] = useState([
    //     {title: 'My new website', body:'lorem ipsum', author:'ikram', id:1},
    //     {title: 'testt', body:'lorem ipsum', author:'ikram', id:2},
    //     {title: 'sesegsrgrsgr', body:'lorem ipsum', author:'ikram', id:3}])

    
    return ( 
        <div className="home">
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick1}>Click Me</button> */}
            {/* <button onClick={() => handleClick2(' mairo')}>Click Me AGAINNNNN</button> */}

            {/* {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by{blog.author}</p>
                </div>
            ))} */}
            
        </div>
     );
}
 
export default Home;

