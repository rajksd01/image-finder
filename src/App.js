import { createClient } from "pexels";
import { useState } from "react";
import Button from "./Button";
import ImageCard from "./ImageCard";
import "./components/App.css";

const client = createClient(
  "ypERDFsJ57qA45uUw80yqyjJnSL4tm87mEm52EED25Bb8VvHXiZfoeBd"
);

function App() {
  const [photoList, setPhotoList] = useState([]);

  const onDataChange = async (term) => {
    const query = term;
    await client.photos.search({ query, per_page: 40 }).then((photos) => {
      setPhotoList(photos.photos);
    });
  };

  return (
    <div className="App">
     <div className="SearchBar">
     <center> <header className="App-header">Image Finder</header>
        <Button data={onDataChange} /></center></div>
        <ImageCard imageList={photoList} />
    
    </div>
  );
}

export default App;
