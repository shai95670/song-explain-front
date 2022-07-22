const cacheSongs = (searchWord, searchResults) => {
   localStorage.setItem(searchWord, JSON.stringify(searchResults));
};

const getCachedSongs= (searchWord) => {
  return JSON.parse(localStorage.getItem(searchWord));
};

export const CacheService = {
  cacheSongs,
  getCachedSongs
};