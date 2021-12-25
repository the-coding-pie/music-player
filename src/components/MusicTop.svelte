<script>
  import MusicStore from "../stores/MusicStore";

  $: currentMusic = $MusicStore.musics.find(
    (m) => m.id === $MusicStore.currentMusicId
  );

  const handleToggle = () => {
    MusicStore.update((values) => {
      return {
        ...values,
        paused: !values.paused,
      };
    });
  };

  const handlePrev = () => {
    $MusicStore.currentMusicId === $MusicStore.musics[0].id
      ? MusicStore.update((values) => {
          return {
            ...values,
            paused: true,
            currentMusicId:
              $MusicStore.musics[$MusicStore.musics.length - 1].id,
          };
        })
      : MusicStore.update((values) => {
          return {
            ...values,
            paused: true,
            currentMusicId: $MusicStore.musics.find(
              (m) =>
                m.id ===
                $MusicStore.musics[
                  $MusicStore.musics.findIndex(
                    (m) => m.id === values.currentMusicId
                  ) - 1
                ].id
            ).id,
          };
        });
  };

  const handleNext = () => {
    $MusicStore.currentMusicId ===
    $MusicStore.musics[$MusicStore.musics.length - 1].id
      ? MusicStore.update((values) => {
          return {
            ...values,
            paused: true,
            currentMusicId: $MusicStore.musics[0].id,
          };
        })
      : MusicStore.update((values) => {
          return {
            ...values,
            paused: true,
            currentMusicId: $MusicStore.musics.find(
              (m) =>
                m.id ===
                $MusicStore.musics[
                  $MusicStore.musics.findIndex(
                    (m) => m.id === values.currentMusicId
                  ) + 1
                ].id
            ).id,
          };
        });
  };
</script>

<div class="music-top">
  <div class="cover">
    <img src={currentMusic.cover} width="60px" height="60px" alt="cover" />
  </div>
  <div class="right">
    {#if currentMusic.name.length > 14}
      <h3 class="name">{currentMusic.name.slice(0, 14) + "..."}</h3>
    {:else}
      <h3 class="name">{currentMusic.name}</h3>
    {/if}

    <audio
      src={currentMusic.file}
      bind:paused={$MusicStore.paused}
      autoplay={false}
    >
      <p>Your browser doesn't support audio</p>
    </audio>

    <div class="control-btns">
      <button class="control-btn" on:click={handlePrev}
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 18L9.5 12L18 6V18ZM8 18H6V6H8V18Z" fill="#2E3A59" />
        </svg>
      </button>
      <button class="control-btn" on:click={handleToggle}>
        {#if $MusicStore.paused}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 19L19 12L8 5V19Z" fill="#2E3A59" />
          </svg>
        {:else}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C6.47967 21.994 2.00606 17.5204 2 12V11.8C2.10993 6.30455 6.63459 1.92797 12.1307 2.0009C17.6268 2.07382 22.0337 6.5689 21.9978 12.0654C21.9619 17.5618 17.4966 21.9989 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57931 16.4087 4.00002 11.992 4.00002C7.57528 4.00002 3.99421 7.57931 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM15 16H13V8.00002H15V16ZM11 16H9V8.00002H11V16Z"
              fill="#2E3A59"
            />
          </svg>
        {/if}
      </button>
      <button class="control-btn" on:click={handleNext}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 18H16V6H18V18ZM6 18V6L14.5 12L6 18Z" fill="#2E3A59" />
        </svg>
      </button>
    </div>
  </div>
</div>

<style>
  .music-top {
    background: #ffffff;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    color: #232323;
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  .cover {
    margin-right: 1rem;
  }

  .music-top .right {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .music-top .right h3 {
    margin-bottom: 0.5rem;
  }

  .control-btns {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .control-btn {
    width: 1.8rem;
    height: 1.8rem;
    background: none;
    padding: 0;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .control-btn svg {
    width: 100%;
    height: 100%;
  }
</style>
