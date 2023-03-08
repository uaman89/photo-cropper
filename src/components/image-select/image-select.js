import { useState } from "react";
import FileSelect from "../../UI/file-select/file-select.js";
import ImagePreviewGrid from "../../UI/file-select/image-preview-grid/image-preview-grid.js";
import styles from "./image-select.module.css";

const ImageSelector = (props) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const accept = ["image/*"];

  const previewItems = selectedFiles.map((file) => {
    return {
      name: file.name,
      src: URL.createObjectURL(file),
    };
  });

  const onClickHandler = () => {
    props.onSelect(previewItems);
  };

  return (
    <>
      <h3>Select Images</h3>
        <FileSelect
          accept={accept}
          onChange={setSelectedFiles}
          className={styles["file-drop-zone"]}
        />
        {previewItems.length ? (
          <button onClick={onClickHandler}>Confirm</button>
        ) : null}
        <ImagePreviewGrid items={previewItems} />
    </>
  );
};

export default ImageSelector;
