<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    @apply .bg-gray-100;
  }

  .favicon-frame {
    /* -webkit-clip-path: url(#favicon-frame);
    clip-path: url(#favicon-frame);
    transform: scale(0.7);
    background: #393d50; */
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .favicon-frame img {
    width: 57%;
  }
</style>
