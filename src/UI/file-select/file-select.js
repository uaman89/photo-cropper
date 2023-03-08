import React, { useRef, useState } from "react";
import styles from "./file-select.module.css";

/**
 *
 * @param {String[]} accept
 * @param {Function} onChange
 * @returns Component
 */

const FileSelect = ({ accept, onChange }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef();

  const updateState = (files) => {
    setSelectedFiles((prevState) => [...prevState, ...files]);
    onChange([...selectedFiles, ...files]);
  };

  const handleFileSelect = (event) => {
    updateState(event.target.files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    updateState(files);
  };

  const dragZoneClickHandler = (event) => {
    fileInputRef.current.click();
  };

  const dragOverHandler = (event) => {
    event.preventDefault();
    return false;
  };

  return (
    <div
      className={styles.dropZone}
      onDragOver={dragOverHandler}
      onDrop={handleDrop}
      onClick={dragZoneClickHandler}
    >
      <input
        type="file"
        multiple
        accept={accept.toString()}
        onChange={handleFileSelect}
        className={styles.fileInput}
        ref={fileInputRef}
      />
      <p className={styles.instructions}>
        Drag and drop files here or click to select files
      </p>
    </div>
  );
};

export default FileSelect;
