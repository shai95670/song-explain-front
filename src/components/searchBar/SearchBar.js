import debounce from 'lodash.debounce';
import './searchBar.scss';


function SearchBar({ getSearchValue }) {
  return (
    <div className="flex container mx-auto justify-center mt-8">
      <div className="flex flex-col content-center w-5/6 md:w-4/6 lg:w-3/6">
        <label for="song-search" className="search-label text-left font-mono uppercase text-rose-500 tracking-wider">Search For a song:</label>
        <input className='search-bar p-2 border-1 border-2 border-black' type='search' placeholder="Wall of Glass" id='song-search' onChange={debounce((e) => {getSearchValue(e)}, 600)}></input>
      </div>  
    </div>
  )
}

export default SearchBar;