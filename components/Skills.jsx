import React from 'react';

const Skills = () => {
  return ( 
    <div className="skills_container">
      <div className="skills_grid">
        <div className="skill react">
          <svg version="1.1"
            fill="rgb(101,111,112)"
            xmlns="http://www.w3.org/2000/svg" 
            width="55" height="55" viewBox="0 0 50 50"
            stroke="none"
            fillRule="evenodd">   
              <path d="M 34.554688 3.984375 C 33.773438 3.957031 32.957031 4.09375 32.140625 4.359375 C 30.503906 4.890625 28.789062 5.925781 27.027344 7.355469 C 26.339844 7.917969 25.644531 8.558594 24.945312 9.238281 C 24.261719 8.574219 23.582031 7.949219 22.90625 7.402344 C 21.148438 5.972656 19.4375 4.9375 17.804688 4.410156 C 16.171875 3.878906 14.546875 3.863281 13.214844 4.632812 C 11.878906 5.402344 11.082031 6.816406 10.722656 8.496094 C 10.363281 10.175781 10.402344 12.175781 10.765625 14.414062 C 10.886719 15.191406 11.066406 16.003906 11.269531 16.835938 C 10.507812 17.066406 9.765625 17.308594 9.082031 17.578125 C 7.007812 18.386719 5.292969 19.355469 4.042969 20.507812 C 2.796875 21.660156 1.988281 23.058594 1.988281 24.59375 C 1.988281 26.128906 2.796875 27.527344 4.042969 28.675781 C 5.292969 29.828125 7.007812 30.800781 9.082031 31.609375 C 9.8125 31.894531 10.609375 32.15625 11.429688 32.398438 C 11.132812 33.5 10.894531 34.570312 10.730469 35.585938 C 10.371094 37.824219 10.335938 39.824219 10.691406 41.507812 C 11.050781 43.191406 11.851562 44.613281 13.191406 45.386719 C 14.53125 46.160156 16.164062 46.140625 17.800781 45.613281 C 19.4375 45.082031 21.148438 44.046875 22.910156 42.617188 C 23.59375 42.0625 24.285156 41.425781 24.976562 40.753906 C 25.671875 41.429688 26.367188 42.066406 27.050781 42.628906 C 28.8125 44.058594 30.523438 45.089844 32.15625 45.621094 C 33.789062 46.148438 35.414062 46.164062 36.746094 45.394531 C 38.082031 44.625 38.878906 43.210938 39.238281 41.53125 C 39.59375 39.851562 39.554688 37.855469 39.195312 35.617188 C 39.03125 34.601562 38.792969 33.527344 38.496094 32.417969 C 39.34375 32.167969 40.164062 31.90625 40.917969 31.609375 C 42.992188 30.800781 44.707031 29.828125 45.957031 28.675781 C 47.203125 27.527344 48.011719 26.128906 48.011719 24.59375 C 48.011719 23.058594 47.203125 21.660156 45.957031 20.507812 C 44.707031 19.355469 42.992188 18.386719 40.917969 17.578125 C 40.222656 17.304688 39.472656 17.058594 38.695312 16.824219 C 38.902344 15.988281 39.082031 15.167969 39.207031 14.386719 C 39.570312 12.148438 39.605469 10.144531 39.246094 8.460938 C 38.890625 6.78125 38.089844 5.359375 36.746094 4.585938 C 36.078125 4.199219 35.335938 4.011719 34.554688 3.984375 Z M 34.464844 6.019531 C 34.953125 6.03125 35.371094 6.148438 35.726562 6.355469 C 36.441406 6.769531 36.96875 7.570312 37.25 8.890625 C 37.53125 10.210938 37.523438 11.996094 37.191406 14.066406 C 37.074219 14.773438 36.910156 15.523438 36.722656 16.292969 C 34.675781 15.800781 32.4375 15.433594 30.046875 15.222656 C 28.847656 13.558594 27.617188 12.046875 26.375 10.703125 C 27.03125 10.0625 27.683594 9.460938 28.320312 8.945312 C 29.945312 7.621094 31.484375 6.722656 32.769531 6.304688 C 33.410156 6.097656 33.972656 6.007812 34.464844 6.019531 Z M 15.488281 6.023438 C 15.976562 6.011719 16.542969 6.101562 17.183594 6.308594 C 18.472656 6.726562 20.015625 7.628906 21.644531 8.949219 C 22.265625 9.460938 22.90625 10.046875 23.550781 10.675781 C 22.296875 12.027344 21.054688 13.554688 19.847656 15.230469 C 17.46875 15.449219 15.238281 15.816406 13.203125 16.3125 C 13.015625 15.546875 12.847656 14.796875 12.738281 14.09375 C 12.402344 12.023438 12.394531 10.238281 12.679688 8.914062 C 12.960938 7.589844 13.492188 6.78125 14.214844 6.367188 C 14.574219 6.15625 14.996094 6.039062 15.488281 6.027344 Z M 24.976562 12.144531 C 25.792969 13.027344 26.605469 14 27.414062 15.042969 C 26.621094 15.011719 25.816406 14.992188 25 14.992188 C 24.167969 14.992188 23.347656 15.011719 22.539062 15.046875 C 23.347656 14 24.160156 13.03125 24.976562 12.144531 Z M 25 17.011719 C 26.359375 17.011719 27.683594 17.066406 28.972656 17.160156 C 29.863281 18.433594 30.730469 19.785156 31.554688 21.21875 C 32.28125 22.472656 32.9375 23.730469 33.535156 24.96875 C 32.929688 26.226562 32.261719 27.496094 31.527344 28.773438 C 30.878906 29.894531 30.203125 30.957031 29.515625 31.988281 C 28.058594 32.109375 26.550781 32.175781 25 32.175781 C 23.414062 32.175781 21.871094 32.105469 20.378906 31.976562 C 19.703125 30.964844 19.039062 29.914062 18.402344 28.8125 C 17.667969 27.539062 17.003906 26.269531 16.398438 25.015625 C 17.007812 23.753906 17.671875 22.476562 18.410156 21.199219 C 19.234375 19.777344 20.097656 18.433594 20.980469 17.164062 C 22.285156 17.066406 23.625 17.011719 25 17.011719 Z M 31.550781 17.410156 C 33.199219 17.617188 34.746094 17.902344 36.183594 18.246094 C 35.757812 19.644531 35.230469 21.109375 34.59375 22.621094 C 34.179688 21.820312 33.75 21.019531 33.285156 20.21875 C 32.726562 19.242188 32.140625 18.316406 31.546875 17.410156 Z M 18.34375 17.425781 C 17.765625 18.316406 17.195312 19.222656 16.644531 20.179688 C 16.175781 20.992188 15.738281 21.804688 15.320312 22.613281 C 14.6875 21.109375 14.164062 19.65625 13.738281 18.261719 C 15.167969 17.917969 16.707031 17.632812 18.34375 17.425781 Z M 38.164062 18.777344 C 38.871094 18.988281 39.558594 19.214844 40.183594 19.460938 C 42.09375 20.203125 43.605469 21.089844 44.585938 21.992188 C 45.566406 22.894531 45.992188 23.757812 45.992188 24.59375 C 45.992188 25.429688 45.566406 26.292969 44.585938 27.195312 C 43.605469 28.097656 42.09375 28.984375 40.183594 29.726562 C 39.488281 30 38.722656 30.25 37.925781 30.480469 C 37.355469 28.722656 36.628906 26.890625 35.765625 25.015625 C 36.757812 22.863281 37.5625 20.769531 38.164062 18.777344 Z M 11.800781 18.785156 C 12.398438 20.757812 13.191406 22.835938 14.167969 24.964844 C 13.300781 26.847656 12.570312 28.691406 12 30.460938 C 11.230469 30.234375 10.488281 29.992188 9.816406 29.730469 C 7.90625 28.984375 6.394531 28.097656 5.414062 27.195312 C 4.433594 26.292969 4.011719 25.429688 4.011719 24.59375 C 4.011719 23.757812 4.433594 22.894531 5.414062 21.992188 C 6.394531 21.089844 7.90625 20.203125 9.816406 19.460938 C 10.433594 19.21875 11.105469 18.996094 11.804688 18.785156 Z M 25 20 C 22.25 20 20 22.25 20 25 C 20 27.75 22.25 30 25 30 C 27.75 30 30 27.75 30 25 C 30 22.25 27.75 20 25 20 Z M 15.339844 27.363281 C 15.761719 28.179688 16.199219 28.992188 16.671875 29.808594 C 17.042969 30.449219 17.417969 31.074219 17.800781 31.683594 C 16.457031 31.496094 15.179688 31.261719 13.984375 30.980469 C 14.363281 29.816406 14.820312 28.601562 15.34375 27.363281 Z M 34.621094 27.363281 C 35.144531 28.605469 35.601562 29.820312 35.984375 30.988281 C 34.78125 31.269531 33.5 31.503906 32.152344 31.6875 C 32.539062 31.070312 32.921875 30.441406 33.296875 29.792969 C 33.765625 28.980469 34.199219 28.171875 34.621094 27.363281 Z M 13.40625 32.925781 C 15.214844 33.351562 17.175781 33.683594 19.257812 33.898438 C 20.644531 35.90625 22.09375 37.710938 23.550781 39.289062 C 22.898438 39.921875 22.253906 40.519531 21.621094 41.03125 C 19.996094 42.355469 18.453125 43.25 17.171875 43.667969 C 15.886719 44.085938 14.925781 44.03125 14.214844 43.617188 C 13.5 43.203125 12.972656 42.402344 12.691406 41.082031 C 12.410156 39.761719 12.417969 37.980469 12.75 35.910156 C 12.902344 34.972656 13.125 33.964844 13.40625 32.925781 Z M 36.558594 32.933594 C 36.84375 33.980469 37.070312 34.988281 37.222656 35.933594 C 37.554688 38.003906 37.5625 39.789062 37.277344 41.113281 C 36.996094 42.4375 36.46875 43.246094 35.746094 43.664062 C 35.027344 44.082031 34.058594 44.132812 32.769531 43.71875 C 31.484375 43.300781 29.941406 42.398438 28.3125 41.078125 C 27.679688 40.558594 27.027344 39.957031 26.371094 39.320312 C 27.839844 37.734375 29.296875 35.921875 30.691406 33.902344 C 32.777344 33.6875 34.746094 33.359375 36.558594 32.933594 Z M 21.867188 34.101562 C 22.894531 34.15625 23.933594 34.195312 25 34.195312 C 26.03125 34.195312 27.035156 34.160156 28.03125 34.105469 C 27.015625 35.480469 25.980469 36.726562 24.949219 37.847656 C 23.917969 36.722656 22.882812 35.472656 21.867188 34.101562 Z M 21.867188 34.101562 "/>
          </svg>
          <p>& Redux</p>
        </div>
        <div className="skill js">
          <svg version="1.0" 
            fill="rgb(101,111,112)" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 55 55" width="4em" height="4em">    
            <path 
              d="M 43.3359 4 L 6.66797 4 C 5.19531 4 4 5.19531 4 6.66797 L 4 43.332 C 4 44.8047 5.19531 46 6.66797 46 L 43.332 46 C 44.8047 46 46 44.8047 46 43.3359 L 46 6.66797 C 46 5.19531 44.8047 4 43.3359 4 Z M 27 36.1836 C 27 40.1797 24.6563 42 21.2344 42 C 18.1406 42 15.9102 39.9258 15 38 L 18.1445 36.0977 C 18.75 37.1719 19.6719 38 21 38 C 22.2695 38 23 37.5039 23 35.5742 L 23 23 L 27 23 Z M 35.6758 42 C 32.1328 42 30.1211 40.2148 29 38 L 32 36 C 32.8164 37.3359 33.707 38.6133 35.5898 38.6133 C 37.1719 38.6133 38 37.8242 38 36.7305 C 38 35.4258 37.1406 34.9609 35.4023 34.1992 L 34.4492 33.7891 C 31.6953 32.6172 29.8633 31.1484 29.8633 28.0391 C 29.8633 25.1797 32.0469 23 35.4531 23 C 37.8789 23 39.6211 23.8438 40.8789 26.0547 L 37.9102 27.9648 C 37.2539 26.7891 36.5508 26.3281 35.4531 26.3281 C 34.3359 26.3281 33.6289 27.0391 33.6289 27.9648 C 33.6289 29.1094 34.3359 29.5703 35.9727 30.2813 L 36.9258 30.6914 C 40.1719 32.0781 42 33.4961 42 36.6836 C 42 40.1172 39.3008 42 35.6758 42 Z M 35.6758 42"/>
          </svg>
          <p>& ES6+</p>
        </div>
        <div className="skill html">
          <svg version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="rgb(101,111,112)"
            width="3.5em" height="3.5em"
            viewBox="0 0 550 500" >
              <path d="M315.36,4.64C312.341,1.645,308.253-0.024,304,0H48C21.49,0,0,21.491,0,48v416c0,26.51,21.49,48,48,48h112v-32H48
                c-8.837,0-16-7.163-16-16V48c0-8.837,7.163-16,16-16h240v64c0,17.673,14.327,32,32,32h64v48h32v-64
                c0.025-4.253-1.645-8.341-4.64-11.36L315.36,4.64z"/>
              <polygon points="176,288 208,288 208,416 240,416 240,288 272,288 272,256 176,256 			"/>
              <polygon points="128,320 96,320 96,256 64,256 64,416 96,416 96,352 128,352 128,416 160,416 160,256 128,256 			"/>
              <path d="M406.08,257.28c-5.99-2.465-12.875-1.075-17.44,3.52L352,297.44l-36.64-36.64c-6.223-6.274-16.353-6.316-22.627-0.093
                c-3.013,2.988-4.715,7.05-4.733,11.293v144h32V310.56l20.64,20.64c6.241,6.204,16.319,6.204,22.56,0l20.8-20.64V416h32V272
                C415.968,265.541,412.055,259.735,406.08,257.28z"/>
              <path d="M464,384V256h-32v144c0,8.837,7.163,16,16,16h64v-32H464z"/>
          </svg>
          <p>HTML</p>
        </div>
        <div className="skill css">
          <svg version="1.1"
            fill="rgb(101,111,112)" 
            xmlns="http://www.w3.org/2000/svg" 
            width="4em" height="4em" viewBox="0 0 50 50"
            stroke="none"
            fillRule="evenodd">
              <path d="M 42 6 L 39 40 L 25 44 L 11 40 L 8 6 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101562 30.5 L 29.398438 26 L 20.601562 26 L 20.398438 22 L 29.601562 22 L 29.898438 18 L 16.101562 18 L 15.800781 14 L 34.101562 14 L 33.601562 22 L 32.898438 33.5 L 25 36.101562 L 17.101562 33.5 Z M 16.800781 28 "/>
          </svg>
          <p>CSS</p>
        </div>
        <div className="skill postgres">
          <svg version="1.1"
            xmlns="http://www.w3.org/2000/svg" 
            width="50" height="50" viewBox="0 0 50 50"
            fillRule="nonzero"
            fill="rgb(101,111,112)">
              <path d="M 35.199219 2.101562 C 33.699219 2.101562 32.398438 2.398438 31.199219 2.699219 C 33.300781 3.597656 34.601562 4.699219 35.300781 5.199219 C 36.902344 6.597656 37.800781 8 39.402344 10.300781 C 39.699219 10.800781 40.199219 11.5 40.5 12.597656 C 40.800781 13.597656 40.800781 14.398438 40.800781 15.199219 C 40.800781 16.300781 40.699219 17.199219 40.597656 18.097656 C 40.5 18.800781 40.5 19.101562 40.402344 19.300781 C 40.402344 19.402344 40.402344 19.5 40.300781 19.699219 C 40.300781 20.199219 40.300781 20.402344 40.402344 20.800781 C 40.402344 21.199219 40.5 21.601562 40.5 22.300781 C 40.601562 23.601562 40.601562 24.5 40.402344 25.597656 L 40.402344 26 C 40.199219 26.898438 40 27.800781 39.5 28.597656 C 39.601562 28.800781 39.699219 28.898438 39.800781 29.097656 C 40.300781 28.398438 40.699219 27.699219 41.097656 26.902344 C 42.300781 24.699219 43 22.800781 43.5 21.402344 C 44.398438 18.800781 44.898438 16.898438 45.199219 15.5 C 45.898438 12.5 46 11.101562 45.699219 9.5 C 45.699219 9 45.5 8.097656 45 7.199219 C 43.898438 5.199219 42.199219 4.300781 41 3.699219 C 40.199219 3.300781 38.097656 2.199219 35.199219 2.101562 Z M 13.535156 2.542969 C 12.382812 2.519531 10.976562 2.648438 9.398438 3.398438 C 8.898438 3.601562 7.398438 4.300781 6.199219 5.898438 C 5.398438 6.898438 4.800781 8.398438 4.5 10.097656 C 4.199219 11.597656 4.097656 13.402344 4.699219 16.800781 C 5.097656 19.199219 5.5 20.800781 6.300781 24.097656 C 6.402344 24.5 7 26.300781 8.300781 30.300781 L 8.398438 30.5 C 8.601562 31.199219 9.199219 32.699219 10.5 34.199219 C 11.398438 35.199219 12.199219 35.800781 12.902344 35.800781 L 13.097656 35.800781 C 14.398438 35.800781 15.300781 34.800781 16.097656 34 C 16.097656 33.898438 18 31.601562 18.699219 30.800781 C 18.597656 30.699219 18.402344 30.699219 18.300781 30.597656 C 17.101562 29.898438 16.199219 28.800781 15.5 27.597656 C 14.300781 25.398438 14.398438 23.199219 14.597656 22.097656 L 14.699219 20.402344 C 14.300781 17.699219 14.402344 15.101562 14.902344 12.5 C 15.300781 10.300781 15.800781 8.101562 17.597656 5.800781 C 18.199219 5 18.898438 4.300781 19.597656 3.800781 C 18 3.101562 16.300781 2.699219 14.597656 2.601562 C 14.273438 2.574219 13.917969 2.550781 13.535156 2.542969 Z M 26.097656 3.398438 C 25.597656 3.398438 25.097656 3.398438 24.597656 3.5 C 22.597656 3.898438 20.699219 5 19.199219 6.898438 C 17.699219 8.800781 17.300781 10.597656 16.902344 12.699219 C 16.699219 13.5 16.699219 14.199219 16.597656 15 C 17.199219 14.5 18 13.898438 19.199219 13.597656 C 19.898438 13.398438 21.699219 12.800781 23.199219 13.699219 C 23.699219 14 24.398438 14.601562 25.097656 16.300781 C 26.597656 20.5 25.101562 24.800781 24.902344 25.199219 C 24.800781 25.597656 24.601562 25.898438 24.5 26.097656 C 24.300781 26.597656 24.101562 27 23.902344 27.800781 C 23.800781 28.5 23.699219 29.101562 23.699219 29.800781 C 24 29.800781 24.300781 29.898438 24.597656 30.097656 C 25.097656 30.597656 25.199219 31.300781 25.300781 31.597656 C 25.5 33.199219 25.5 35.199219 25.5 37.199219 C 25.5 38.800781 25.5 40.300781 25.597656 41.300781 C 25.800781 43.601562 26.5 45.199219 27.5 46 C 28.199219 46.601562 29.097656 46.597656 29.597656 46.699219 L 29.800781 46.699219 C 31.300781 46.699219 33.699219 45.699219 34.597656 44.300781 C 35.097656 43.5 35.300781 42.800781 35.5 41.800781 C 35.601562 41.199219 35.597656 40.902344 35.699219 40.300781 C 35.699219 40 35.800781 39.5 35.800781 38.902344 C 35.800781 38.402344 35.898438 37.800781 36 37.097656 C 36.101562 35.398438 36.398438 33.402344 36.5 32.300781 C 36.601562 31 37.199219 29.898438 37.699219 29.199219 C 37 29.097656 36.300781 28.5 35.902344 27.5 C 35.300781 26.398438 35.199219 26.097656 35.097656 25.597656 C 35 25.199219 34.800781 24.699219 34.097656 23.199219 C 32.597656 19.800781 32.402344 18.800781 32.402344 18 C 32.300781 16.898438 32.199219 15.402344 33.402344 14.402344 C 35.199219 12.800781 37.5 12.902344 38.699219 13.300781 L 38.699219 13.097656 C 38.5 12.300781 38.101562 11.699219 37.800781 11.300781 C 36.300781 9 35.5 7.800781 34.097656 6.601562 C 33.5 6.101562 32 4.898438 29.800781 4.101562 C 28.800781 3.800781 27.597656 3.398438 26.097656 3.398438 Z M 37.152344 15.125 C 36.425781 15.074219 35.5 15.199219 34.699219 15.902344 C 34.300781 16.300781 34.300781 17.101562 34.402344 17.800781 C 34.402344 18.300781 34.5 19 36 22.402344 C 36.699219 24 36.898438 24.5 37 24.902344 C 37.101562 25.300781 37.199219 25.5 37.800781 26.597656 C 37.902344 26.800781 38 27 38.199219 27.199219 C 38.398438 26.898438 38.5 26.398438 38.597656 25.597656 L 38.699219 25.300781 C 38.898438 24.402344 38.800781 23.699219 38.800781 22.5 C 38.800781 21.898438 38.699219 21.5 38.699219 21.199219 C 38.597656 20.699219 38.597656 20.300781 38.597656 19.699219 C 38.398438 19.398438 38.398438 19.300781 38.5 19.097656 C 38.5 18.898438 38.597656 18.601562 38.699219 18 C 38.800781 17.199219 38.902344 16.5 38.902344 15.699219 C 38.699219 15.597656 38.601562 15.5 38.402344 15.402344 C 38.402344 15.402344 37.875 15.175781 37.152344 15.125 Z M 21.515625 15.519531 C 20.878906 15.445312 20.148438 15.652344 19.699219 15.800781 C 18.597656 16.101562 17.902344 16.800781 17.402344 17.199219 C 17.101562 17.5 16.800781 17.800781 16.5 18.199219 C 16.5 18.898438 16.597656 19.601562 16.699219 20.300781 L 16.699219 20.402344 L 16.5 22.402344 C 16.300781 23.300781 16.199219 25 17.199219 26.699219 C 17.699219 27.699219 18.402344 28.5 19.300781 29 C 19.902344 29.398438 20.699219 29.699219 21.597656 29.902344 C 21.597656 29.199219 21.699219 28.398438 21.800781 27.699219 C 22 26.699219 22.199219 26.199219 22.5 25.597656 C 22.601562 25.300781 22.699219 25.101562 22.902344 24.800781 C 23 24.5 24.398438 20.699219 23.097656 17.199219 C 22.800781 16.398438 22.5 15.898438 22.097656 15.699219 C 21.925781 15.597656 21.722656 15.542969 21.515625 15.519531 Z M 36.1875 16.089844 C 36.449219 16.074219 36.699219 16.097656 36.800781 16.199219 C 37.101562 16.398438 36.699219 16.898438 36.597656 17 C 36.5 17.101562 36.300781 17.300781 36 17.402344 C 35.601562 17.5 35.300781 17.199219 35.199219 17.199219 C 35.097656 17.097656 34.800781 16.800781 34.902344 16.5 C 35 16.300781 35.101562 16.300781 35.5 16.199219 C 35.648438 16.148438 35.925781 16.101562 36.1875 16.089844 Z M 21.15625 16.917969 C 21.492188 16.894531 21.773438 17.023438 22 17.097656 C 22.300781 17.199219 22.597656 17.300781 22.597656 17.5 C 22.699219 17.800781 22.402344 18 22.300781 18.097656 C 22 18.398438 21.5 18.402344 21.5 18.402344 C 21 18.402344 20.699219 18.101562 20.5 17.800781 C 20.398438 17.699219 20.300781 17.5 20.402344 17.300781 C 20.5 17.101562 20.699219 17 20.800781 17 C 20.925781 16.949219 21.042969 16.925781 21.15625 16.917969 Z M 39.5 30 C 39 30.699219 38.300781 31.601562 38.199219 32.800781 C 38.199219 33 38.199219 33.101562 38.097656 33.300781 C 38.898438 33.5 39.601562 33.5 40.300781 33.402344 C 41.902344 33.199219 43 32.398438 43.199219 32.199219 C 43.898438 31.699219 44.800781 30.699219 44.597656 30.300781 C 44.5 30.101562 44.199219 30.199219 42.597656 30.300781 C 42.199219 30.300781 41 30.601562 40.199219 30.402344 L 40 30.402344 C 39.800781 30.300781 39.601562 30.199219 39.5 30 Z M 22.097656 32 C 21.898438 32.300781 21.601562 32.5 21.402344 32.699219 C 20.601562 33.199219 19.597656 33.601562 18.597656 33.800781 C 17.699219 34.101562 17.199219 34.101562 17.199219 34.402344 C 17.097656 34.800781 18.097656 35.300781 18.597656 35.5 C 20.300781 36.199219 22 35.800781 22.300781 35.699219 C 22.5 35.597656 23 35.398438 23.5 35.097656 C 23.5 34 23.402344 33 23.300781 32.199219 L 23.300781 32.097656 L 23.199219 32.097656 C 22.898438 32.097656 22.5 32.101562 22.097656 32 Z M 22.097656 32 "/>
          </svg>
          <p>PostgreSQL</p>
        </div>
        <div className="skill mysql">
          <svg fill="#000000" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 50 50" width="70" height="70">
            <path d="M 31.167969 8 C 30.699219 7.988281 30.289063 8.167969 30.078125 8.6875 C 29.71875 9.558594 30.613281 10.410156 30.933594 10.855469 C 31.15625 11.164063 31.445313 11.511719 31.605469 11.859375 C 31.710938 12.089844 31.726563 12.320313 31.816406 12.5625 C 32.039063 13.160156 32.394531 13.839844 32.679688 14.394531 C 32.824219 14.675781 32.984375 14.96875 33.167969 15.21875 C 33.28125 15.371094 33.472656 15.441406 33.503906 15.675781 C 33.316406 15.941406 33.304688 16.351563 33.199219 16.6875 C 32.722656 18.191406 32.902344 20.0625 33.59375 21.171875 C 33.808594 21.515625 34.3125 22.246094 35 21.96875 C 35.601563 21.722656 35.46875 20.960938 35.640625 20.285156 C 35.679688 20.136719 35.65625 20.023438 35.734375 19.921875 L 35.734375 19.953125 C 35.914063 20.320313 36.097656 20.6875 36.28125 21.050781 C 36.691406 21.707031 37.414063 22.390625 38.023438 22.855469 C 38.339844 23.09375 38.589844 23.507813 39 23.648438 L 39 23.617188 L 38.96875 23.617188 C 38.890625 23.492188 38.765625 23.441406 38.664063 23.34375 C 38.425781 23.109375 38.160156 22.816406 37.964844 22.546875 C 37.40625 21.792969 36.914063 20.964844 36.46875 20.105469 C 36.253906 19.695313 36.066406 19.242188 35.886719 18.824219 C 35.816406 18.660156 35.816406 18.417969 35.671875 18.332031 C 35.472656 18.640625 35.183594 18.886719 35.03125 19.25 C 34.789063 19.828125 34.753906 20.535156 34.664063 21.265625 C 34.609375 21.285156 34.632813 21.269531 34.605469 21.296875 C 34.179688 21.191406 34.027344 20.753906 33.871094 20.378906 C 33.472656 19.429688 33.394531 17.898438 33.75 16.808594 C 33.839844 16.523438 34.25 15.632813 34.085938 15.371094 C 34.007813 15.109375 33.742188 14.960938 33.597656 14.761719 C 33.414063 14.515625 33.234375 14.191406 33.109375 13.90625 C 32.78125 13.164063 32.472656 12.304688 32.125 11.554688 C 31.960938 11.195313 31.683594 10.835938 31.453125 10.515625 C 31.199219 10.164063 30.917969 9.90625 30.71875 9.476563 C 30.652344 9.328125 30.554688 9.085938 30.660156 8.929688 C 30.691406 8.824219 30.738281 8.78125 30.84375 8.746094 C 31.019531 8.609375 31.511719 8.789063 31.699219 8.867188 C 32.1875 9.070313 32.597656 9.265625 33.011719 9.539063 C 33.210938 9.671875 33.410156 9.925781 33.652344 10 L 33.925781 10 C 34.359375 10.097656 34.839844 10.027344 35.238281 10.152344 C 35.949219 10.367188 36.585938 10.703125 37.160156 11.066406 C 38.921875 12.175781 40.363281 13.757813 41.34375 15.644531 C 41.503906 15.949219 41.574219 16.242188 41.714844 16.5625 C 41.992188 17.210938 42.347656 17.882813 42.628906 18.515625 C 42.90625 19.152344 43.179688 19.789063 43.574219 20.316406 C 43.78125 20.59375 44.585938 20.746094 44.949219 20.898438 C 45.203125 21.007813 45.625 21.121094 45.863281 21.265625 C 46.328125 21.542969 46.773438 21.875 47.207031 22.183594 C 47.425781 22.335938 48.089844 22.667969 48.125 22.945313 C 47.050781 22.917969 46.230469 23.015625 45.53125 23.3125 C 45.332031 23.398438 45.011719 23.398438 44.980469 23.648438 C 45.085938 23.761719 45.105469 23.933594 45.191406 24.074219 C 45.359375 24.34375 45.640625 24.707031 45.894531 24.898438 C 46.171875 25.105469 46.453125 25.328125 46.75 25.511719 C 47.273438 25.828125 47.859375 26.011719 48.367188 26.332031 C 48.664063 26.523438 48.964844 26.761719 49.253906 26.972656 C 49.398438 27.082031 49.492188 27.246094 49.679688 27.3125 L 49.679688 27.28125 C 49.582031 27.15625 49.558594 26.984375 49.46875 26.855469 L 49.066406 26.453125 C 48.679688 25.941406 48.1875 25.488281 47.664063 25.113281 C 47.246094 24.8125 46.3125 24.40625 46.140625 23.921875 L 46.109375 23.890625 C 46.402344 23.859375 46.75 23.75 47.023438 23.675781 C 47.484375 23.554688 47.890625 23.585938 48.363281 23.464844 C 48.578125 23.402344 48.792969 23.339844 49.007813 23.28125 L 49.007813 23.15625 C 48.769531 22.914063 48.597656 22.585938 48.335938 22.363281 C 47.652344 21.78125 46.90625 21.199219 46.136719 20.714844 C 45.710938 20.445313 45.183594 20.269531 44.734375 20.042969 C 44.582031 19.964844 44.316406 19.925781 44.214844 19.796875 C 43.976563 19.496094 43.847656 19.113281 43.664063 18.761719 C 43.28125 18.023438 42.90625 17.21875 42.566406 16.441406 C 42.335938 15.914063 42.183594 15.390625 41.894531 14.914063 C 40.507813 12.636719 39.015625 11.257813 36.703125 9.90625 C 36.210938 9.617188 35.621094 9.507813 34.996094 9.359375 C 34.65625 9.335938 34.324219 9.316406 33.984375 9.296875 C 33.78125 9.210938 33.566406 8.960938 33.375 8.835938 C 32.894531 8.535156 31.949219 8.011719 31.167969 8 Z M 34.476563 11.3125 C 34.253906 11.308594 34.09375 11.339844 33.925781 11.375 L 33.925781 11.40625 L 33.957031 11.40625 C 34.0625 11.625 34.253906 11.765625 34.386719 11.953125 C 34.488281 12.167969 34.585938 12.382813 34.6875 12.597656 L 34.71875 12.566406 C 34.90625 12.433594 34.996094 12.21875 34.996094 11.894531 C 34.917969 11.816406 34.90625 11.714844 34.84375 11.621094 C 34.753906 11.492188 34.585938 11.421875 34.476563 11.3125 Z M 1.867188 23.996094 C 1.566406 24.007813 1.238281 24.066406 0.882813 24.179688 C 0.289063 24.359375 -0.00390625 24.714844 -0.00390625 25.4375 L -0.00390625 33 L 2 33 L 2 25.621094 L 4.777344 31.929688 C 5.121094 32.714844 5.589844 32.996094 6.507813 32.996094 C 7.429688 32.996094 7.878906 32.714844 8.222656 31.929688 L 11 25.78125 L 11 33 L 13 33 L 13 25.4375 C 13 24.714844 12.710938 24.359375 12.113281 24.179688 C 10.691406 23.730469 9.734375 24.117188 9.304688 25.089844 L 6.453125 31.503906 L 3.695313 25.089844 C 3.382813 24.359375 2.757813 23.960938 1.867188 23.996094 Z M 26.246094 24 C 25.457031 24 23 24.09375 23 26 L 23 27.234375 C 23 28.109375 23.769531 28.824219 25.4375 29 C 25.625 29.011719 25.8125 29.027344 26 29.027344 C 26 29.027344 27.945313 28.988281 28 29 C 29.125 29 29 29.875 29 30 L 29 31 C 29 31.136719 28.96875 32 27.988281 32 L 23 32 L 23 33 L 28.007813 33 C 28.664063 33 29.300781 32.863281 29.808594 32.625 C 30.652344 32.238281 31 31.714844 31 31.027344 L 31 29.597656 C 31 28.0625 29.09375 28 28 28 L 26 28 C 25.214844 28 25.09375 27.523438 25 27 L 25 26 C 25.09375 25.601563 25.269531 25.0625 25.964844 25 L 31 25 L 31 24 Z M 33.980469 24 C 32.503906 24.203125 31.984375 24.9375 31.984375 26 L 31.984375 31 C 31.984375 31.972656 32.527344 32.558594 33.644531 32.863281 C 34.019531 32.96875 34.359375 33.011719 34.679688 33.011719 L 36.90625 33 L 38.214844 33 L 39.328125 34 L 41.578125 34 L 40.03125 32.605469 C 40.757813 32.304688 40.984375 31.84375 40.984375 30.980469 L 40.984375 26 C 40.984375 24.9375 40.292969 24.203125 38.816406 24 Z M 42 24 L 42 30.957031 C 42 32.164063 42.683594 32.84375 44.492188 32.980469 C 44.660156 32.988281 44.832031 33 45 33 L 50 33 L 50 32 L 45.378906 32 C 44.347656 32 44 31.566406 44 30.949219 L 44 24 Z M 35.171875 25 L 37.746094 25 C 38.425781 25 38.882813 25.546875 38.984375 26 C 38.984375 26 39 30.65625 39 31 C 39 31.34375 38.808594 31.5 38.808594 31.5 L 38.265625 31 L 36 31 L 37.113281 32 L 35.171875 32 C 34.476563 32 34.085938 31.484375 33.984375 31 L 33.984375 26.101563 C 33.984375 25.570313 34.390625 25 35.171875 25 Z M 14 27 C 14.039063 27.039063 14 31.261719 14 31.34375 C 14.015625 32.21875 15.125 32.984375 16.863281 33 L 20 33 L 20 33.066406 C 20 33.253906 20.136719 33.878906 19 34 C 18.988281 34 14.011719 34 14 34 L 14 35 L 19.214844 35 C 20.097656 34.972656 22.011719 34.773438 22 33.242188 C 22 33.214844 22.007813 27 22 27 L 20 27 L 20 32 C 19.96875 32 17.523438 32.007813 17.03125 32 C 16.066406 31.984375 15.984375 31.433594 16 31.222656 L 16 27 Z"/>
          </svg>
        </div>
        <div className="skill sass">
          <svg version="1.1"
            xmlns="http://www.w3.org/2000/svg" 
            width="50" height="50" viewBox="0 0 50 50" 
            stroke="none"
            fillRule="evenodd"
            fill="rgb(101,111,112)">
              <path  d="M 25.042969 4.199219 C 36.527344 4.199219 45.832031 13.507812 45.832031 24.988281 C 45.832031 36.472656 36.527344 45.777344 25.042969 45.777344 C 13.5625 45.777344 4.253906 36.472656 4.253906 24.988281 C 4.253906 13.507812 13.5625 4.199219 25.042969 4.199219 Z M 25.042969 4.199219 "/>
              <path style={{fillRule:"nonzero",fill:"rgb(100%,100%,100%)"}} d="M 38.085938 13.097656 C 37.144531 9.40625 31.019531 8.191406 25.226562 10.25 C 21.777344 11.476562 18.046875 13.398438 15.363281 15.910156 C 12.167969 18.894531 11.660156 21.492188 11.871094 22.578125 C 12.609375 26.40625 17.859375 28.910156 20.015625 30.769531 L 20.015625 30.78125 C 19.378906 31.09375 14.722656 33.449219 13.632812 35.859375 C 12.484375 38.402344 13.816406 40.226562 14.699219 40.472656 C 17.433594 41.230469 20.238281 39.863281 21.746094 37.617188 C 23.203125 35.445312 23.082031 32.644531 22.449219 31.246094 C 23.320312 31.019531 24.339844 30.914062 25.632812 31.066406 C 29.277344 31.492188 29.992188 33.769531 29.855469 34.722656 C 29.71875 35.675781 28.953125 36.199219 28.699219 36.355469 C 28.441406 36.515625 28.367188 36.570312 28.386719 36.6875 C 28.417969 36.859375 28.535156 36.851562 28.753906 36.816406 C 29.054688 36.765625 30.667969 36.039062 30.738281 34.28125 C 30.824219 32.046875 28.6875 29.550781 24.898438 29.613281 C 23.335938 29.640625 22.355469 29.789062 21.644531 30.054688 C 21.59375 29.996094 21.539062 29.933594 21.484375 29.875 C 19.144531 27.375 14.8125 25.609375 14.996094 22.246094 C 15.0625 21.027344 15.488281 17.808594 23.316406 13.90625 C 29.730469 10.710938 34.867188 11.589844 35.753906 13.539062 C 37.023438 16.324219 33.007812 21.5 26.347656 22.246094 C 23.808594 22.53125 22.472656 21.550781 22.140625 21.183594 C 21.789062 20.796875 21.738281 20.777344 21.609375 20.851562 C 21.394531 20.96875 21.53125 21.308594 21.609375 21.511719 C 21.808594 22.03125 22.625 22.949219 24.015625 23.40625 C 25.238281 23.808594 28.21875 24.027344 31.824219 22.632812 C 35.859375 21.070312 39.011719 16.726562 38.085938 13.097656 Z M 20.914062 31.914062 C 21.214844 33.035156 21.179688 34.078125 20.871094 35.023438 C 20.835938 35.128906 20.796875 35.230469 20.753906 35.332031 C 20.714844 35.433594 20.667969 35.539062 20.621094 35.636719 C 20.378906 36.136719 20.054688 36.605469 19.660156 37.039062 C 18.453125 38.355469 16.765625 38.851562 16.042969 38.433594 C 15.261719 37.980469 15.652344 36.121094 17.050781 34.640625 C 18.558594 33.050781 20.726562 32.023438 20.726562 32.023438 L 20.722656 32.019531 C 20.785156 31.984375 20.847656 31.949219 20.914062 31.914062 Z M 20.914062 31.914062 "/>
            </svg>
          <p>Sass</p>
        </div>
        <div className="skill communications">
          <svg 
          height="50" viewBox="0 0 50 50" width="70" 
          xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m57.15 42.178-6.15-1.025v-2.236c1.828-1.061 3.195-2.823 3.737-4.918h.263c2.206 0 4-1.794 4-4 0-1.84-1.255-3.378-2.95-3.842 1.763-1.046 2.95-2.963 2.95-5.157 0-3.309-2.691-6-6-6-1.129 0-2.145.474-2.873 1.229-1.247-.799-2.682-1.229-4.167-1.229h-1.354c-2.524 0-4.871 1.22-6.32 3.275l-.811.54c-1.55 1.033-2.475 2.762-2.475 4.624 0 .452.056.905.166 1.348l.692 2.767c-.529.679-.858 1.521-.858 2.446 0 2.206 1.794 4 4 4h.263c.542 2.095 1.909 3.856 3.737 4.918v2.236l-6.15 1.024c-3.39.565-5.85 3.468-5.85 6.905v13.917h32v-13.917c0-3.437-2.46-6.34-5.85-6.905zm-13.585.909 2.17 2.894-1.984 2.48-.532-5.317zm3.255 9.913h.361l1.6 8h-3.561zm.503-2h-.646l-.799-1.997 1.122-1.403 1.122 1.402zm.942-5.02 2.17-2.894.346.058-.532 5.317zm8.735-15.98c0 1.103-.897 2-2 2v-4c1.103 0 2 .897 2 2zm-18.416-9.521 1.137-.758.111-.167c1.066-1.6 2.851-2.555 4.773-2.555h1.354c1.137 0 2.237.333 3.183.963l.009.006c-.088.332-.151.673-.151 1.032 0 2.206 1.794 4 4 4h2v-2h-2c-1.103 0-2-.897-2-2s.897-2 2-2c2.206 0 4 1.794 4 4s-1.794 4-4 4h-11c-.552 0-1-.449-1-1s.448-1 1-1h1v-2h-1c-1.654 0-3 1.346-3 3v2c-.495 0-.965.102-1.403.267l-.491-1.964c-.07-.283-.106-.574-.106-.864 0-1.192.592-2.299 1.584-2.96zm-1.584 9.521c0-1.103.897-2 2-2v4c-1.103 0-2-.897-2-2zm4 2v-5.184c.314.112.648.184 1 .184h11v5c0 3.309-2.691 6-6 6s-6-2.691-6-6zm6 8c.692 0 1.359-.097 2-.263v1.931l-2 2.666-2-2.666v-1.931c.641.166 1.308.263 2 .263zm-14 9.083c0-2.454 1.757-4.529 4.178-4.933l4.064-.677 1.007 10.066 2.193-2.741.519 1.298-1.781 8.904h-4.18v-11h-2v11h-4zm28 11.917h-4v-11h-2v11h-4.18l-1.781-8.905.519-1.298 2.193 2.741 1.007-10.066 4.064.677c2.421.405 4.178 2.48 4.178 4.934z"/><path d="m50 33h-2c0 .552-.448 1-1 1s-1-.448-1-1h-2c0 1.654 1.346 3 3 3s3-1.346 3-3z"/><path d="m16 17h-2c-4.963 0-9 4.038-9 9v3.528c0 2.771-.655 5.546-1.895 8.025-1.376 2.755-2.105 5.839-2.105 8.919v.528c0 1.771.776 3.36 2 4.46v11.54h22v-2.515c0-5.593-2.136-10.849-6-14.869v-2.616h1.382c.558 0 1.118-.132 1.618-.382 1.233-.617 2-1.857 2-3.236v-2.661l3-1v-.721c0-2.917-1.712-8.279-2.01-9.188-.101-4.875-4.091-8.812-8.99-8.812zm-13 29.472c0-2.771.655-5.546 1.895-8.024 1.376-2.756 2.105-5.84 2.105-8.92v-3.528c0-3.86 3.141-7 7-7h2c3.519 0 6.432 2.613 6.92 6h-6.776c-1.717 0-3.194 1.282-3.438 2.981l-.576 4.036c-1.754.171-3.13 1.656-3.13 3.455 0 1.323.735 2.514 1.92 3.106l.08.04v5.382 2 1c0 2.206-1.794 4-4 4s-4-1.794-4-4zm2 12.528h6v2h-6zm18 2h-10v-8h-2v4h-6v-4.35c.627.222 1.298.35 2 .35 3.309 0 6-2.691 6-6h4.58c3.498 3.645 5.42 8.418 5.42 13.485zm-1-25.721v4.103c0 .617-.343 1.172-.895 1.447-.223.112-.473.171-.723.171h-5.382v2h2v2h-4v-1-6.618l-1.187-.593c-.501-.251-.813-.756-.813-1.317 0-.812.66-1.472 1.472-1.472h1.396l.82-5.736c.102-.721.729-1.264 1.457-1.264h7.126c.459 1.469 1.496 4.979 1.696 7.29z"/><circle cx="20" cy="31" r="1"/><path d="m21 5h14v2h-14z"/><path d="m21 9h10v2h-10z"/><path d="m33 9h2v2h-2z"/><path d="m35 16.586v-1.586h.166c2.114 0 3.834-1.72 3.834-3.834v-6.166c0-2.206-1.794-4-4-4h-14c-2.206 0-4 1.794-4 4v6.166c0 2.114 1.72 3.834 3.834 3.834h6.752l3.292 3.292c.449.45 1.071.708 1.708.708 1.331 0 2.414-1.083 2.414-2.414zm-2.707.293-3.879-3.879h-7.58c-1.012 0-1.834-.823-1.834-1.834v-6.166c0-1.103.897-2 2-2h14c1.103 0 2 .897 2 2v6.166c0 1.011-.822 1.834-1.834 1.834h-2.166v3.586c0 .337-.469.532-.707.293z"/>
          </svg>
          <p>Empathy/</p>
          <p>Interpersonal</p>
          <p>skills</p>
        </div>
      </div>
    </div>
   );
}
 
export default Skills;