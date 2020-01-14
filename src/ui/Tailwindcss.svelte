<style global>
  @import url("https://fonts.googleapis.com/css?family=Monoton|Rubik:400,500,700&display=swap");
  @import url("https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css");

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

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
    z-index: 0;
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
    --borderFocusColor: transparent;
    --background: rgba(255, 255, 255, 0.3);
    --inputColor: #fff;
    --listBackground: #e3f0f6;
    --itemHoverBG: #90cdf4;
    --border: transparent;
    --itemIsActiveBG: #4299e1;

    --multiItemBG: #fff;
    --multiItemBorderRadius: 3px;
    --multiItemPadding: 0 10px;
    --multiItemHeight: 30px;
    --multiItemMargin: 6px 7px 0 0;
    --multiItemActiveBG: #90cdf4;
    --multiSelectPadding: 0 8px 0 8px;
  }
  .multiSelectItem_label {
    font-size: 13px;
  }
  .selection {
    color: #fff;
  }
</style>
