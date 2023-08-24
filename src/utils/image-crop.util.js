/*
This function takes two arguments: the HTML image element to crop and the aspect ratio to crop to. The aspect ratio should be a number, where a value of 1 would crop the image to a square, 2 would crop it to a landscape rectangle, and 0.5 would crop it to a portrait rectangle.

The function creates a new canvas element and sets its size to the target width and height based on the aspect ratio. It then calculates the source coordinates to crop from the center of the image, and uses the drawImage method to draw the cropped image onto the canvas.

Finally, the function returns a new image element with the cropped image data as its source.

You can use this function like so:

javascript
Copy code
const originalImage = document.getElementById('my-image');
const croppedImage = cropImage(originalImage, 2); // Crop to 2:1 aspect ratio
document.body.appendChild(croppedImage); // Add the cropped image to the document
This code would crop the image with the ID 'my-image' to a 2:1 aspect ratio, and then append the cropped image to the end of the document.

 */
export function cropImage(image, aspectRatio) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  // Calculate the target width and height based on the aspect ratio
  const targetWidth = image.width;
  const targetHeight = Math.round(targetWidth / aspectRatio);

  // Resize the canvas to the target size
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  // Calculate the source coordinates to crop from the center of the image
  const sourceX = Math.max(0, Math.round((image.width - targetWidth) / 2));
  const sourceY = Math.max(0, Math.round((image.height - targetHeight) / 2));

  // Draw the cropped image onto the canvas
  context.drawImage(
    image,
    sourceX,
    sourceY,
    targetWidth,
    targetHeight,
    0,
    0,
    targetWidth,
    targetHeight
  );

  // Return the canvas as a new image element
  const croppedImage = new Image();
  croppedImage.src = canvas.toDataURL();
  return croppedImage;
}
