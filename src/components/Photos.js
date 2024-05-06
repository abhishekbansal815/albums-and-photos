import { useEffect, useState } from 'react';
const Photos = ({ id }) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleFetchData = async () => {
    console.log("Album ID:", id); // Debugging statement
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos'
      );
      const data = await response.json();
      const finalData = data.filter((photo) => photo.albumId === parseInt(id));
      console.log('Final Data:', finalData); // Debugging line
      setPhotos(finalData);
      setIsLoading(false);
    } catch (error) {
      console.log('Error::', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // console.log('Album ID:', id); // Debugging line
    handleFetchData();
  }, [id]);
  return (
    <div>
      {isLoading ? (
        <p>Loading Photos...</p>
      ) : (
        Array.isArray(photos) &&
        photos.map((photo) => {
          return (
            <img
              key={photo.id}
              src={photo.url}
              alt={photo.title}
              width="100px"
              height="100px"
            />
          );
        })
      )}
    </div>
  );
};

export default Photos;