import { useState, useEffect } from 'react';
const Fetch = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://perenual.com/api/species-list?key=sk-dw4q668301f97498a6117')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <div>
      
      {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
      ))}
    </div>
  );
};
export default Fetch;