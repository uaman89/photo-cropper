import { useState } from "react";
import FileSelect from "../../UI/file-select/file-select.js";
import styles from "./image-select.module.css";

const ImageSelector = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const accept = ["image/*"];

  const filesChangeHandler = (files) => {
    setSelectedFiles(files);
  };

  const previewItems = selectedFiles.map((file) => {
    return {
      name: file.name,
      src: URL.createObjectURL(file),
    };
  });
  const previewBlock = previewItems.length ? (
    <ul className={styles["preview-container"]}>
      {previewItems.map((item) => (
        <li key={item.name} className={styles['preview-item']}>
          <img src={item.src} alt="" title={item.name}/>
          <span className={styles['preview-title']}>{item.name}</span> 
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div>
      <h3>Select Images</h3>
      <FileSelect accept={accept} onChange={filesChangeHandler} />
      {previewBlock}
    </div>
  );
};

export default ImageSelector;
