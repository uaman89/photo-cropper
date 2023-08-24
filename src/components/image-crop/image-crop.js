import ImagePreviewGrid from "../../UI/file-select/image-preview-grid/image-preview-grid";
import { cropImage } from "../../utils/image-crop.util";

const ImageCrop = (props) => {
  const cropItems = (ratio) => {
    const image = new Image();
    const cropppedItems = props.items.map((item) => {
      image.src = item.src;
      return cropImage(image, ratio)
    });
    props.onCrop(cropppedItems);
  };

  const getCropFn = (aspectRatio) => {
    return () => cropItems(aspectRatio);
  };

  return (
    <>
      <button onClick={getCropFn(9 / 13)}> crop 9 x 13 </button>
      <button onClick={getCropFn(13 / 9)}> crop 13 x 9 </button>
      <ImagePreviewGrid items={props.items} />
    </>
  );
};

export default ImageCrop;
