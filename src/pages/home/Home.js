import SearchBar from '../../components/searchBar/SearchBar';
import Header from '../../components/header/Header';
import Songs from '../../components/songs/Songs';
import Message from '../../components/message/Message';
import { useState } from 'react';
import { HttpService } from '../../services/http.service';
import { CacheService } from '../../services/cache.service';


function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [songs, setSongs] = useState([]);
  const [messageDetails, setMessageDetails] = useState({message: '', isShowMessage: false});

  const searchSongs = async (e) => {
    try {
      const { value } = e.target;
      setMessageDetails({...messageDetails, ...{isShowMessage: false}});    
      setIsLoading(true);
      const songs = CacheService.getCachedSongs(value) || await HttpService.makeGeniousRequest('GET', `search?q=${value}`);
      if(!songs.length) {
        setMessageDetails({...messageDetails, ...{message: 'No Songs found',isShowMessage: true}});    
      };
      setSongs(songs);
      setIsLoading(false);     
      CacheService.cacheSongs(value, songs);
    } catch (error) {
      setMessageDetails({...messageDetails, ...{message: 'An Error occured while retriving songs', isShowMessage: true}});    
      setIsLoading(false);
    };
  };

  return (
    <>
      <Header/>
      <SearchBar getSearchValue={searchSongs}/>
      {
       isLoading ?
       <div class="flex justify-center items-center mt-4">
          <svg class="animate-spin h-4 w-4 rounded-full bg-black border-2 border-transparent border-opacity-50" style={{"border-right-color": 'white', "border-top-color": 'white'}} viewBox="0 0 24 24"></svg>
          Loading Songs ...
       </div>
       :
       <Songs songs={songs}/>
      }
      {messageDetails.isShowMessage && <Message message={messageDetails.message}/>}
    </>
  );
}

export default Home;
