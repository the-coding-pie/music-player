<script>
  import MusicTop from "./MusicTop.svelte";
  import MusicList from "./MusicList.svelte";
</script>

<div class="music-box">
  <MusicTop />
  <MusicList />
</div>

<style>
    .music-box {
        display: flex;
        flex-direction: column;
        background: #494646;
        color: #ffffff;
        width: 20rem;
        max-height: 24rem;
        border-radius: 0.3rem;
    }
</style>