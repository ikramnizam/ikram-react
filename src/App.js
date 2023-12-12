
import Navbar from './Navbar';
import Home from './Home';

function App() {

// const title = 'welcome to ikram tutorial react';
// const likes = 50;
// const link ="http://www.google.com";

  return (
    <div className="App">
      <Navbar/>
     <div className="content">
      <Home/>
      {/* <h1>{title}</h1>
      <p>test {likes} kali</p>
      <a href={link}>GOogle Site link</a> */}
     </div>
    </div>
  );
}

export default App;
