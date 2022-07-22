import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './songProfile.scss'

function SongProfile() {
  const location = useLocation();
  const {song, imageColorPalette } = location.state;
  const [htmlString, setHtmlString] = useState('');

  useEffect(() => {
    setHtmlString(
      song.lyrics
     .split('\n')
     .filter(lyric => lyric)
     .reduce(
       (previousLyric, currentLyric) => previousLyric + `<br>${currentLyric}<br>`,
       ''
     ));
  }, [song.lyrics]);

  return (
    <>
      <div className="song-profile-container flex flex-col items-center md:flex-row md:items-start md:justify-center" style={{background: `linear-gradient(rgb(${imageColorPalette[0][0]}, ${imageColorPalette[0][1]}, ${imageColorPalette[0][2]}), rgb(${imageColorPalette[1][0]}, ${imageColorPalette[1][1]}, ${imageColorPalette[1][2]}))`}}>
          <img src={song.song_art_image_thumbnail_url} className="song-img" alt='song cover album'></img>
          <div className='song-details-container flex flex-col sm:ml-0 md:ml-2'>
            <h1 className='song-title'>{song.title}</h1>
            <div>
              <span>{song.primary_artist.name}</span>
              <Link className="ml-2 underline" to="/">Back To Song Search</Link>
            </div>
          </div>
      </div>

      <div className="song-lyrics-container flex justify-center">
        <div dangerouslySetInnerHTML={{__html: htmlString}} onClick={() => navigator.clipboard.writeText(htmlString)} title="press to copy lyrics"></div>
      </div>
    </>
  );
}

export default SongProfile;
