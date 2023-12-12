import{useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body:'lorem ipsum', author:'ikram', id:1},
        {title: 'tesdrgdfdgdggegtt', body:'lorem ipsum', author:'ikram', id:2},
        {title: 'sesegsrgrsgr', body:'lorem ipsum', author:'ikram', id:3}
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;

