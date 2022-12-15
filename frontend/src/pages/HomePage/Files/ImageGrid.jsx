import Card from "../../../components/Card/Card";
import React from "react";
// Rendering individual images
const Image = ({ image }) => {
  return (
    <div className="file-item">
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};

// ImageList Component//
const ImageGride = ({ images }) => {
  // render each image by calling Image component
  const renderImage = (image, index) => {
    return <Image image={image} key={`${image.id}-image`} />;
  };
  // Return the list of files//

  return (
    <div>
      <section className="file-list">{images.map(renderImage)}</section>
    </div>
  );
};

export default ImageGride;

// const ImageGride = ({ images }) => {
//   const [pics, setPics] = useState([]);

//   const removeImage = (id) => {
//     // this is the line that you are looking for
//     setPics((oldState) => oldState.filter((item) => item.id !== id));
//   };

//   useEffect(() => {
//     //fake fetch data
//     setPics(images);
//   }, []);
//   return (
//     <div className="App ">
//       {pics.map((pic) => {
//         return (
//           <div className>
//             <img
//               src={pic.src}
//               alt=""
//               key={`${pic.id}-image`}
//               className="file-list"
//               // style={{ width: "100px", height: "100px" }}
//             />
//             {/* <button onClick={() => removeImage(pic.id)}>X</button> */}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ImageGride;
