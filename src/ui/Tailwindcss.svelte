<style global>
  @import url("https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap");
  @import url("https://fonts.googleapis.com/css?family=M+PLUS+1p:300,400,500,700&display=swap");
  @import url("https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css");

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  input::placeholder {
    @apply text-gray-500 !important;
  }

  .favicon-frame {
    /* -webkit-clip-path: url(#favicon-frame);
    clip-path: url(#favicon-frame);
    transform: scale(0.7);
    background: #393d50; */
    min-width: 64px;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .favicon-frame img {
    width: 57%;
  }
  div#pattern-one:after {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.1;
  }
  #pattern-two {
    position: relative;
  }
  #pattern-two:before {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
    position: absolute;
    z-index: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
  }
  .selectContainer {
    --borderFocusColor: 1px solid #8fccf3;
    --background: #fff;
    --inputColor: #4299e1;
    --inputFontSize: 0.875rem;
    --listBackground: #e3f0f6;
    --itemHoverBG: #90cdf4;
    --border: 1px solid #8fccf3;
    --itemIsActiveBG: #4299e1;
    --borderRadius: 0;
    --height: 31px;

    --multiClearWidth: 14px;
    --multiClearHeight: 14px;
    --multiItemBG: #fff;
    --multiItemBorderRadius: 0;
    --multiItemPadding: 0 10px;
    --multiItemHeight: 30px;
    --multiItemMargin: 0;
    --multiItemActiveBG: #90cdf4;
    --multiSelectPadding: 0 8px 0 8px;
  }
  .selectContainer input {
    border: 1px solid #8fccf3;
  }
  .multiSelectItem_label {
    font-size: 13px;
    color: #4299e0;
  }
  .selection {
    color: #4299e1;
    font-size: 0.875rem;
  }
</style>
