<script>
  import MusicBox from "./components/MusicBox.svelte";
  import MusicStore from "./stores/MusicStore";

  $: currentMusic = $MusicStore.musics.find(m => m.id === $MusicStore.currentMusicId);
</script>

<main
  style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url({currentMusic.cover}); background-repeat: no-repeat; width: 100%; height: 100%; background-size: cover; background-position: center;"
>
  <MusicBox />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
	overflow-y: auto;
    justify-content: center;
    align-items: center;
  }
</style>
