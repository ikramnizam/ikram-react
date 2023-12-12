import{useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body:'lorem ipsum', author:'alip', id:1},
        {title: 'tesdrgdfdgdggegtt', body:'lorem ipsum', author:'ikram', id:2},
        {title: 'sesegsrgrsgr', body:'lorem ipsum', author:'kkkk', id:3}
    ]);

    const handleDelete = (id) =>{
     const newBlogs = blogs.filter(blog => blog.id !== id);
     setBlogs(newBlogs);
    };


    return ( 
        <div className="home">
          <BlogList blogs={blogs} title="All blog" />
          <BlogList blogs={blogs.filter((blog) => blog.author === 'ikram')} title="ikram blog" />
          <BlogList blogs={blogs} title="All blog" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;

