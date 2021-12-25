import { writable } from "svelte/store";

const musics = [
  {
    id: 1,
    cover: "/assets/images/hey.jpg",
    name: "Hey",
    file: "/assets/music/hey.mp3",
    artist: "Afrojack",
  },
  {
    id: 2,
    cover: "/assets/images/summer.jpg",
    name: "Summer",
    file: "/assets/music/summer.mp3",
    artist: "Calvin Harris",
  },
  {
    id: 3,
    cover: "/assets/images/ukulele.jpg",
    name: "Ukulel asdasdfas fasdfasdfafe",
    file: "/assets/music/ukulele.mp3",
    artist: "Bensound",
  },
  {
    id: 4,
    cover: "/assets/images/ukulele.jpg",
    name: "Ukulel asdasdfas fasdfasdfafe",
    file: "/assets/music/ukulele.mp3",
    artist: "Bensound",
  },
  {
    id: 5,
    cover: "/assets/images/ukulele.jpg",
    name: "Ukulel asdasdfas fasdfasdfafe",
    file: "/assets/music/ukulele.mp3",
    artist: "Bensound",
  },
  {
    id: 6,
    cover: "/assets/images/ukulele.jpg",
    name: "Ukulel asdasdfas fasdfasdfafe",
    file: "/assets/music/ukulele.mp3",
    artist: "Bensound",
  },
];

const MusicStore = writable({
  musics,
  currentMusicId: 1,
  paused: true,
});

export default MusicStore;
