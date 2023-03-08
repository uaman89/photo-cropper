import { useState } from "react";
import "./App.css";
import ImageSelect from "./components/image-select/image-select";
import ImageCrop from "./components/image-crop/image-crop";

function App() {
  const [selectedItems, setSelectedItems] = useState(null);
  const [croppedItems, setCroppedItems] = useState([]);

  return (
    <div className="App">
      <main className="main-container">
        {!selectedItems?.length && <ImageSelect onSelect={setSelectedItems} />}

        {(selectedItems?.length && !croppedItems.length) && (
          <ImageCrop items={selectedItems} onCrop={setCroppedItems} />
        )}

        {croppedItems.map((image, idx) => (
          <div key={idx}>
            <img src={image.src}  alt=""/>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
