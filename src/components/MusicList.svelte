<script>
  import MusicStore from "../stores/MusicStore";
</script>

<ul class="music-list">
  {#each $MusicStore.musics as music (music.id)}
    <li
      on:click={() => {
        MusicStore.update((values) => {
          return {
            ...values,
            paused: true,
            currentMusicId: music.id,
          };
        });
      }}
      class="music-item"
      class:active={music.id === $MusicStore.currentMusicId}
    >
      <div class="left">
        <img src={music.cover} width="45" height="45" alt="music-cover" />
      </div>
      <div class="right">
        {#if music.name.length > 14}
          <h6 class="name">{music.name.slice(0, 14) + "..."}</h6>
        {:else}
          <h6 class="name">{music.name}</h6>
        {/if}
        <p>{music.artist}</p>
      </div>
    </li>
  {:else}
    <p>Oops, no music found!</p>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    height: 100%;
    overflow-y: auto;
  }

  /* width */
  ul::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ul::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ul::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ul::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .music-item {
    display: flex;
    align-items: center;
    padding: 0.8rem;
  }

  .music-item.active {
    background: #6d6d6d;
  }

  .music-item:hover {
    background: #6d6d6d;
    cursor: pointer;
  }

  .music-item .left {
    margin-right: 1rem;
  }

  .music-item h6 {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }

  .music-item p {
    font-size: 0.8rem;
  }

  .music-item:last-child {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
</style>
