import { css, } from 'lit-element';

export default css`
:host {
  display: block;
  width: 100vw;
  height: 100vh;
  line-height: 1;
  overflow: hidden;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  --primary-color: #ffcd00;
  --second-color:#ccc;
  --dark-color: #1f2c42;
  box-sizing: border-box;
  /*=== Clearing === */ }
  :host * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; }
  :host div,
  :host span,
  :host applet,
  :host object,
  :host iframe,
  :host h1,
  :host h2,
  :host h3,
  :host h4,
  :host h5,
  :host h6,
  :host p,
  :host blockquote,
  :host pre,
  :host a,
  :host abbr,
  :host acronym,
  :host address,
  :host big,
  :host cite,
  :host code,
  :host del,
  :host dfn,
  :host em,
  :host img,
  :host ins,
  :host kbd,
  :host q,
  :host s,
  :host samp,
  :host small,
  :host strike,
  :host strong,
  :host sub,
  :host sup,
  :host tt,
  :host var,
  :host b,
  :host u,
  :host i,
  :host center,
  :host dl,
  :host dt,
  :host dd,
  :host ol,
  :host ul,
  :host li,
  :host fieldset,
  :host form,
  :host label,
  :host legend,
  :host table,
  :host caption,
  :host tbody,
  :host tfoot,
  :host thead,
  :host tr,
  :host th,
  :host td,
  :host article,
  :host aside,
  :host canvas,
  :host details,
  :host embed,
  :host figure,
  :host figcaption,
  :host footer,
  :host header,
  :host menu,
  :host nav,
  :host output,
  :host ruby,
  :host section,
  :host summary,
  :host time,
  :host mark,
  :host audio,
  :host video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline; }
  :host article,
  :host aside,
  :host details,
  :host figcaption,
  :host figure,
  :host footer,
  :host header,
  :host main,
  :host menu,
  :host nav,
  :host section,
  :host summary {
    display: block; }
  :host blockquote,
  :host q {
    quotes: '' ''; }
  :host blockquote:before,
  :host blockquote:after,
  :host q:before,
  :host q:after {
    content: ''; }
  :host table {
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 24px;
    width: 100%; }
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit; }
  :host audio,
  :host canvas,
  :host progress,
  :host video {
    display: inline-block;
    vertical-align: baseline; }
  :host embed,
  :host iframe,
  :host object {
    max-width: 100%; }
  :host audio:not([controls]) {
    display: none;
    height: 0; }
  :host [hidden],
  :host template {
    display: none; }
  :host ul {
    list-style: square;
    text-indent: inherit; }
  :host ol {
    list-style: decimal; }
  :host b,
  :host strong {
    font-weight: 600; }
  :host a {
    background-color: transparent; }
  :host a:active,
  :host a:hover {
    outline: 0; }
  :host sup,
  :host sub {
    font-size: .75em;
    height: 0;
    line-height: 2.2em;
    position: relative;
    vertical-align: baseline; }
  :host sup {
    bottom: 1ex; }
  :host sub {
    top: .5ex; }
  :host small {
    font-size: .75em;
    line-height: 1.72; }
  :host big {
    font-size: 1.25em; }
  :host hr {
    border: 0;
    clear: both;
    display: block;
    height: 1px;
    margin: 3.2rem auto;
    text-align: center;
    width: 100%; }
  :host h2 + hr,
  :host h3 + hr {
    margin-bottom: 4.8rem; }
  :host p + hr {
    margin-bottom: 4rem; }
  :host dfn,
  :host cite,
  :host em,
  :host i {
    font-style: italic; }
  :host abbr,
  :host acronym {
    cursor: help; }
  :host mark,
  :host ins {
    padding: 0 4px;
    text-decoration: none;
    text-shadow: none; }
  :host ::-moz-selection {
    text-shadow: none; }
  :host ::selection {
    text-shadow: none; }
  :host img {
    border: 0;
    height: auto;
    max-width: 100%; }
  :host img:hover {
    opacity: .9; }
  :host svg:not(:root) {
    overflow: hidden; }
  :host figure {
    line-height: 0;
    margin: 0;
    position: relative; }
  :host optgroup {
    font-weight: bold; }
  :host td,
  :host th {
    padding: 0; }
  :host dt {
    font-weight: bold; }
  :host dd {
    margin: 0; }
  :host header:before,
  :host header:after,
  :host main:before,
  :host main:after,
  :host section:before,
  :host section:after,
  :host aside:before,
  :host aside:after,
  :host footer:before,
  :host footer:after,
  :host .clear:before,
  :host .clear:after,
  :host .wrap:before,
  :host .wrap:after {
    content: '';
    display: table; }
  :host header:after,
  :host main:after,
  :host section:after,
  :host aside:after,
  :host footer:after,
  :host .clear:after,
  :host .wrap:after {
    clear: both; }
  :host .wrap,
  :host header nav,
  :host footer nav {
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    position: relative;
    width: 100%;
    z-index: 2; }
  :host section,
  :host .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    /*Fullscreen*/
    /* Prototyping? min-height: 720px (Baseline: 8px = .8rem)*/
    padding: 2.4rem;
    /*Fixed/Visible header? padding-top: 12rem; */
    page-break-after: always;
    position: relative;
    word-wrap: break-word; }
  :host section {
    /*=== Section = Slide === */ }
    :host section * {
      -webkit-animation: none;
      animation: none; }
    :host section * {
      -webkit-animation: fadeIn .6s ease-in-out;
      animation: fadeIn .6s ease-in-out; }
    :host section .background,
    :host section .light,
    :host section .dark {
      -webkit-animation-duration: 0s;
      animation-duration: 0s; }
    :host section .text-apple,
    :host section .bg-apple {
      font-family: 'Lora', serif; }
  :host section {
    display: flex; }
    :host section strong {
      padding: 0 1rem;
      background-color: var(--primary-color, yellow); }
      :host section strong.noSpace {
        padding: 0 0 0 1rem; }
    :host section .header {
      flex: 1;
      min-height: 50px;
      border-bottom: 1px solid var(--second-color, gray);
      position: relative; }
      :host section .header .title {
        padding: 16px;
        background-color: #FFF;
        position: absolute;
        bottom: -50px;
        left: 5rem;
        display: flex;
        align-items: center;
        flex-direction: row; }
        :host section .header .title .circle {
          padding: 1rem;
          border-radius: 50%;
          background-color: var(--primary-color, yellow);
          font-family: 'lora';
          font-size: 30px;
          height: 64px;
          width: 64px;
          align-items: center;
          justify-content: center;
          display: flex; }
          :host section .header .title .circle svg {
            height: 32px; }
        :host section .header .title h1 {
          font-family: 'lora';
          font-size: 36px;
          letter-spacing: 3px;
          padding: 1rem;
          display: inline; }
        :host section .header .title h2 {
          font-family: 'Quattrocento Sans', serif;
          font-size: 20px;
          font-weight: bold;
          padding: 1rem; }
        :host section .header .title .line {
          text-decoration: line-through; }
    :host section .wrap {
      flex: 3;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start; }
      :host section .wrap .code {
        flex: 1;
        padding: 1rem;
        height: calc(100% - 2rem);
        display: block;
        margin-top: 40px; }
        :host section .wrap .code .code,
        :host section .wrap .code pre {
          font-family: 'Source Code Pro';
          background: #292929;
          color: #fafafa;
          font-size: 20px;
          padding: 10px;
          margin-top: 40px; }
          :host section .wrap .code .code:before,
          :host section .wrap .code pre:before {
            display: block;
            width: calc(100%);
            margin-left: -3px;
            margin-top: -3px;
            padding: 3px;
            text-transform: uppercase;
            content: attr(data-lang);
            background: #9baecf; }
          :host section .wrap .code .code .o,
          :host section .wrap .code pre .o {
            color: orange; }
          :host section .wrap .code .code .w,
          :host section .wrap .code pre .w {
            color: white; }
        :host section .wrap .code .exam {
          padding: 10px; }
        :host section .wrap .code .example {
          font-family: 'Quattrocento';
          font-size: 25px; }
        :host section .wrap .code .ul {
          font-family: 'Quattrocento';
          font-size: 28px; }
        :host section .wrap .code .li {
          font-family: 'Quattrocento';
          font-size: 20px;
          padding: 8px 0 0 8px; }
          :host section .wrap .code .li.active {
            color: #5856d6; }
      :host section .wrap .result {
        flex: 1;
        padding: 1rem;
        height: calc(100% - 2rem);
        display: block;
        margin-top: 40px; }
        :host section .wrap .result iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: none; }
        :host section .wrap .result .container {
          margin: 100px auto;
          width: 500px;
          text-align: center; }
          :host section .wrap .result .container .span {
            color: black;
            -webkit-text-fill-color: white;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: black;
            font-size: 92px; }
          :host section .wrap .result .container.animationBackground {
            background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
            background-size: 400% 400%;
            -webkit-animation: Gradient 15s ease infinite;
                    animation: Gradient 15s ease infinite;
            height: 300px;
            margin: 40px auto; }

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%; }
  50% {
    background-position: 100% 50%; }
  100% {
    background-position: 0% 50%; } }

@keyframes Gradient {
  0% {
    background-position: 0% 50%; }
  50% {
    background-position: 100% 50%; }
  100% {
    background-position: 0% 50%; } }
        :host section .wrap .result .progress {
          padding: 6px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: 6px;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08); }
        :host section .wrap .result .progress-bar3 {
          height: 18px;
          border-radius: 4px;
          background-image: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55);
          transition: 0.4s linear;
          transition-property: width, background-color; }
        :host section .wrap .result .progress-infinite .progress-bar3 {
          width: 100%;
          background-image: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55);
          -webkit-animation: colorAnimation 1s infinite;
                  animation: colorAnimation 1s infinite; }

@-webkit-keyframes colorAnimation {
  0% {
    background-image: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55); }
  20% {
    background-image: linear-gradient(to right, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55, #4cd964); }
  40% {
    background-image: linear-gradient(to right, #007aff, #7DC8E8, #5856d6, #ff2d55, #4cd964, #5ac8fa); }
  60% {
    background-image: linear-gradient(to right, #7DC8E8, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff); }
  100% {
    background-image: linear-gradient(to right, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff, #7DC8E8); } }

@keyframes colorAnimation {
  0% {
    background-image: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55); }
  20% {
    background-image: linear-gradient(to right, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55, #4cd964); }
  40% {
    background-image: linear-gradient(to right, #007aff, #7DC8E8, #5856d6, #ff2d55, #4cd964, #5ac8fa); }
  60% {
    background-image: linear-gradient(to right, #7DC8E8, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff); }
  100% {
    background-image: linear-gradient(to right, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff, #7DC8E8); } }
      :host section .wrap .card {
        padding: 2rem;
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
        max-width: 80%; }
        :host section .wrap .card .text {
          margin-top: 1rem;
          font-family: 'Quattrocento', serif;
          font-size: 2rem;
          letter-spacing: 2px; }
          :host section .wrap .card .text .line {
            text-decoration: line-through; }
        :host section .wrap .card .list {
          list-style: none;
          margin-top: 1rem; }
          :host section .wrap .card .list.column {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 200px;
            margin-left: 80px; }
          :host section .wrap .card .list-item {
            margin-left: 1rem;
            font-family: 'Quattrocento', serif;
            font-size: 2.5rem;
            letter-spacing: 2px; }
          :host section .wrap .card .list-item::before {
            content: '';
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 7.5px;
            background: var(--primary-color, yellow);
            margin-right: 1rem; }
        :host section .wrap .card img {
          margin-top: 1rem;
          box-shadow: -30px 30px 26px -10px rgba(0, 0, 0, 0.54); }
      :host section .wrap.grid {
        flex-wrap: wrap;
        justify-content: center; }
        :host section .wrap.grid .card {
          width: 400px;
          height: 200px;
          padding: 3rem;
          -webkit-transform: translateY(50px) scale(1);
                  transform: translateY(50px) scale(1);
          box-shadow: 0px 6px 26px -10px rgba(0, 0, 0, 0.54);
          margin: 1rem 1rem;
          opacity: 1;
          transition: -webkit-transform 600ms ease-in;
          transition: transform 600ms ease-in;
          transition: transform 600ms ease-in, -webkit-transform 600ms ease-in; }
          :host section .wrap.grid .card-title {
            font-family: 'Quattrocento', serif;
            font-size: 1.5em;
            color: var(--dark-color, #000);
            font-weight: normal;
            margin-left: 1rem; }
          :host section .wrap.grid .card-code {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 2rem; }
            :host section .wrap.grid .card-code p {
              font-family: 'Quattrocento', serif;
              font-size: 1.2rem; }
          :host section .wrap.grid .card.noVis {
            opacity: 1;
            -webkit-transform: scale(0);
                    transform: scale(0); }
      :host section .wrap.present {
        display: flex;
        align-items: center;
        justify-content: space-around; }
        :host section .wrap.present .card {
          width: 400px;
          padding: 3rem;
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          box-shadow: 0px 6px 26px -10px rgba(0, 0, 0, 0.54); }
          :host section .wrap.present .card .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap; }
            :host section .wrap.present .card .card-header .info {
              width: 70%;
              display: flex;
              align-items: center; }
              :host section .wrap.present .card .card-header .info .card-image {
                max-width: 25%;
                border-radius: 50%;
                margin-top: 0rem;
                box-shadow: none; }
              :host section .wrap.present .card .card-header .info .card-title {
                font-size: 1.1em;
                color: var(--dark-color, #000);
                font-weight: normal;
                margin-left: 1rem; }
            :host section .wrap.present .card .card-header .social {
              width: 20%;
              display: flex;
              justify-content: space-between; }
              :host section .wrap.present .card .card-header .social .icon {
                font-size: 1.1em;
                text-decoration: none;
                color: rgba(var(--dark-color, #000), 0.9); }
                :host section .wrap.present .card .card-header .social .icon:hover {
                  color: var(--dark-color, #000); }
          :host section .wrap.present .card .card-body .card-text {
            font-family: 'lora', serif;
            font-size: 1em;
            color: rgba(var(--dark-color, #000), 0.9);
            padding-top: 2rem;
            text-align: justify; }
      :host section .wrap .title {
        position: absolute;
        bottom: -32px;
        left: 5rem;
        display: flex;
        align-items: center;
        background: #fff; }
        :host section .wrap .title span {
          padding: 1rem;
          border-radius: 50%;
          background-color: var(--primary-color, yellow); }
          :host section .wrap .title span svg {
            height: 32px; }
        :host section .wrap .title h1 {
          font-family: 'lora';
          font-size: 36px;
          letter-spacing: 3px;
          padding: 1rem;
          display: inline; }
    :host section .footer {
      flex: 1;
      border-top: 1px solid #cccccc; }
      :host section .footer.color {
        border: none;
        background-color: var(--primary-color, yellow); }
  :host section.bg-apple {
    background: #FFF; }
  :host section.bg-trans-dark,
  :host section.bg-trans-gradient,
  :host section.bg-primary,
  :host section.bg-secondary,
  :host section.bg-blue,
  :host section.bg-green,
  :host section.bg-purple,
  :host section.bg-red,
  :host section.bg-facebook,
  :host section.bg-apple,
  :host section[class*='bg-black'],
  :host section[class*='bg-gradient-'] {
    color: #000;
    text-shadow: 0 1px 0 #013; }

@-webkit-keyframes fadeIn {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }

@keyframes fadeIn {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }
  :host .fadeIn {
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s; }
`;