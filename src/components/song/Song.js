import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { limitTextLength } from "../../utils/utils";
import ColorThief from "colorthief";
import './song.scss';

function Song({ song, index }) {
  const  { song_art_image_thumbnail_url, title, artist_names } = song 
  const imageElement = useRef(null);
  const [imageColorPalette, setImageColorPalette] = useState([]);

  const getImageColorPalette = () => {
    const colorThief = new ColorThief();
    const image = imageElement.current;
    const colorPalette = colorThief.getPalette(image);
    setImageColorPalette(colorPalette);
  };

  return (
    <li>
        <Link to="/songProfile" state={{song, imageColorPalette}}>
           <div className='song-container flex gap-2 mx-auto border-b-2 p-2 lg:w-2/5 sm:w-full'>
              <div className="song-number">{index}</div>
              <img 
               alt="song album art" 
               width="60" 
               height="60"
               crossOrigin={"anonymous"}
               ref={imageElement}
               src={song_art_image_thumbnail_url}
               onLoad={getImageColorPalette} 
               />
              <div className='flex flex-col items-start ml-3'>
                <p className="font-bold text-xl" title={title}>{limitTextLength(title)}</p>
                <p className="font-medium text-xl" title={artist_names}>{limitTextLength(artist_names)}</p>
              </div>
           </div>
        </Link>
    </li>
  );
};

export default Song;
