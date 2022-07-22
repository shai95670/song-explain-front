import Song from '../song/Song';

function Songs({ songs }) {
  return (
    <div className="App">
        <ul className='mt-3'>
        {songs.map((song, index) => (<Song song={song} key={index} index={index + 1}/>))}
        </ul>
    </div>
  );
};

export default Songs;
