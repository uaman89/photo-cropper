import styles from "./image-preview-grid.module.css";

const ImagePreviewGrid = ({ items }) => {
  if (!items?.length){
    return "( no images selected )"
  }
  
  return (
    <ul className={styles["preview-container"]}>
      {items.map((item) => (
        <li key={item.name} className={styles["preview-item"]}>
          <img src={item.src} alt="" title={item.name} />
          <span className={styles["preview-title"]}>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default ImagePreviewGrid;