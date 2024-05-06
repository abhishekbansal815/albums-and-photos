import { useEffect, useState } from 'react';
import Header from "./Header";
import Photos from "./Photos";
import "./Albums.css";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [albumId, setAlbumId] = useState(1);
  const handleFetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums'
      );
      const data = await response.json();
      setAlbums(data);
    } catch (error) {
      console.log('Error::', error);
    }
  };

  const fetchPhotos = async (album) => {
    setAlbumId(album.id);
  }

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      <Header />

      <aside>
        <ul>
          {Array.isArray(albums) &&
            albums.map((album) => {
              return (
                <li key={album.id} type={"1"}>
                  <div className={"album"} onClick={() => fetchPhotos(album)}>{album.title}</div>
                </li>
              );
            })}
        </ul>
      </aside>

      {(albums === null || albums.length === 0) ? (
        <p>Fetching...</p>
      ) : (
        <>
          <h2>
            Photos of Album {albumId}
          </h2>

          <div>
            <Photos id={albumId} />
          </div>
        </>
      )}
    </>
  );
};

export default Albums;