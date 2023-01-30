import { useState } from "react"
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
 
 
function App() {
  const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
     const result = await searchImages(term); // This returns an array of objects of images and the await tells javascript to run this function after the result object has been recieved.

     setImages(result);
    };
    return (
      <div>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />
        
      </div>
    );
}

export default App;


 