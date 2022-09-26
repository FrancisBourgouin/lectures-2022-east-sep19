const spotifyLibrary = {
  songs: {
    s01: {
      id: "s01",
      name: "Help",
      artist: "Beatles",
    },
    s02: {
      id: "s02",
      name: "She was waiting for her mother at the station in torino and you know I love you baby but it's getting to heavy to laugh",
      artist: "Shawn Philips",
    },
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Short titled songs",
      songs: ["s01"],
    },
    p02: {
      id: "p02",
      name: "Long titled songs",
      songs: ["s02"],
    },
  },
};

const librarySongs = spotifyLibrary.songs;
const libraryPlaylist = spotifyLibrary.playlists;

const currentSong = librarySongs.s01;

// Need to know song id and playlist id

const addSongToPlaylist = (songId, playlistId) => {
  const currentSong = spotifyLibrary.songs[songId];
  const currentPlaylist = spotifyLibrary.playlists[playlistId];

  spotifyLibrary.playlists[playlistId].songs.push(spotifyLibrary.songs[songId].id);

  currentPlaylist.songs.push(currentSong.id);

  console.log(`Added ${currentSong.name} in playlist ${currentPlaylist.name}`);
};
