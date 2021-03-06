import React, {useState} from 'react';

function Contact () {
  const[status, setStatus] = useState("")

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    // xhr.onreadystatechange = ()=>{
    xhr.onreadystatechange = function(){
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        // this.setState({ status: "SUCCESS" });
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }
  
  return (
    <div className='section contact'>
      <a id="contactlinked"></a>
      <div className="contacts_container">
          
        <div className="contacts_content contacts_bg">
        <div className="rectangle">
        </div>
        <div className="emailMe">
            <h1>Thanks <span>for</span> visiting </h1>
            <h2>Contact me and let's connect!</h2>
          </div>
          
          <div className="emailForm">
            <form
            // onSubmit={submitForm}
            onSubmit={()=>submitForm}
            action="https://formspree.io/f/xrgoddll"
            method="POST"
          >
            {/* <div className="formInner"> */}

            <div className="theirName input-group">
              <label for="name">Name:<input type="text" placeholder="You're name here..."/></label>
            </div>
            <div className="theirEmail input-group">

              <label for="text">Email:</label>
              <input type="email" id="email" name="email input-group" placeholder="dongb909@gmail.com" />
            </div>  
            <div className="theirMsg input-group">
            <label for="msg">Message:</label>
            <textarea name="msg" id="msg" cols="40" rows="10" placeholder="Your message"></textarea>
            </div>
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
            {/* </div> */}
          </form>
          </div>
        </div>
        <div className="contacts_content contacts_icons">
          <div className="icon">
          <a href="https://www.github.com/dongb909">
            <svg fill="#5295b4" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 40 24" width="45" height="65">
                <path d="M 5.6875 5 C 5.6875 5 5 6.207031 5 8.25 C 5 9.605469 5.308594 10.320313 5.53125 10.6875 C 3.96875 
                12.3125 3 14.515625 3 17.34375 C 3 24.585938 7.589844 27 16 27 C 24.410156 27 29 24.585938 29 17.34375 C 29 
                14.417969 28.085938 12.21875 26.59375 10.625 C 26.964844 9.515625 27.382813 7.421875 26.34375 5 C 23.242188 
                5 20.65625 7.382813 20.5625 7.46875 C 19.113281 7.152344 17.574219 7 16 7 C 14.394531 7 12.820313 7.195313 
                11.34375 7.5625 C 9.265625 5.503906 6.757813 5 5.6875 5 Z M 20.6875 15.4375 C 21.53125 15.429688 22.3125 15.5 
                23 15.71875 C 24.832031 16.300781 26 17.984375 26 19.875 C 26 25.109375 23.191406 26 16 26 C 10.65625 26 6.3125 
                25.058594 6.3125 20.0625 C 6.3125 18.15625 7.347656 17.078125 8.09375 16.40625 C 9.734375 14.929688 12.324219 
                15.65625 16 15.65625 C 17.671875 15.65625 19.277344 15.453125 20.6875 15.4375 Z M 10.5 18 C 9.671875 18 9 18.894531 
                9 20 C 9 21.105469 9.671875 22 10.5 22 C 11.328125 22 12 21.105469 12 20 C 12 18.894531 11.328125 18 10.5 18 Z M 
                21.5 18 C 20.671875 18 20 18.894531 20 20 C 20 21.105469 20.671875 22 21.5 22 C 22.328125 22 23 21.105469 23 20 C 
                23 18.894531 22.328125 18 21.5 18 Z M 10.34375 18.84375 C 10.578125 18.84375 10.75 19.042969 10.75 19.28125 C 10.75 
                19.519531 10.578125 19.71875 10.34375 19.71875 C 10.109375 19.71875 9.90625 19.519531 9.90625 19.28125 C 9.90625 
                19.042969 10.109375 18.84375 10.34375 18.84375 Z M 21.34375 18.84375 C 21.578125 18.84375 21.75 19.042969 21.75 
                19.28125 C 21.75 19.519531 21.578125 19.71875 21.34375 19.71875 C 21.109375 19.71875 20.90625 19.519531 20.90625 
                19.28125 C 20.90625 19.042969 21.109375 18.84375 21.34375 18.84375 Z"/>
            </svg>
          </a>
            <a href="https://www.github.com/dongb909"></a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/dongb909">
              <svg fill="#5295b4" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 46 46" width="30" height="30">
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z 
                  M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,
                  11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,
                  10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
              </svg>
            </a>
            <a href="#https://www.linkedin.com/in/dongb909"></a>
          </div>
          {/* <div className="icon">
            <svg fill="#5295b4" height="50" viewBox="0 0 27 24" width="50" 
            xmlns="http://www.w3.org/2000/svg">
              <path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"/><path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"/></svg>
            <a>dongb909@gmail.com</a>
          </div> */}
          {/* <div className="icon">
            <svg fill="#5295b4" version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 600 400" width="50" height="60" >
              <path d="M502.05,407.127l-56.761-37.844L394.83,335.65c-9.738-6.479-22.825-4.355-30.014,4.873l-31.223,40.139
                c-6.707,8.71-18.772,11.213-28.39,5.888c-21.186-11.785-46.239-22.881-101.517-78.23c-55.278-55.349-66.445-80.331-78.23-101.517
                c-5.325-9.618-2.822-21.683,5.888-28.389l40.139-31.223c9.227-7.188,11.352-20.275,4.873-30.014l-32.6-48.905L104.879,9.956
                C98.262,0.03,85.016-2.95,74.786,3.185L29.95,30.083C17.833,37.222,8.926,48.75,5.074,62.277
                C-7.187,106.98-9.659,205.593,148.381,363.633s256.644,155.56,301.347,143.298c13.527-3.851,25.055-12.758,32.194-24.876
                l26.898-44.835C514.956,426.989,511.976,413.744,502.05,407.127z"/>
              <path d="M291.309,79.447c82.842,0.092,149.977,67.226,150.069,150.069c0,4.875,3.952,8.828,8.828,8.828
                c4.875,0,8.828-3.952,8.828-8.828c-0.102-92.589-75.135-167.622-167.724-167.724c-4.875,0-8.828,3.952-8.828,8.828
                C282.481,75.494,286.433,79.447,291.309,79.447z"/>
              <path d="M291.309,132.412c53.603,0.063,97.04,43.501,97.103,97.103c0,4.875,3.952,8.828,8.828,8.828
                c4.875,0,8.828-3.952,8.828-8.828c-0.073-63.349-51.409-114.686-114.759-114.759c-4.875,0-8.828,3.952-8.828,8.828
                C282.481,128.46,286.433,132.412,291.309,132.412z"/>
              <path d="M291.309,185.378c24.365,0.029,44.109,19.773,44.138,44.138c0,4.875,3.952,8.828,8.828,8.828
                c4.875,0,8.828-3.952,8.828-8.828c-0.039-34.111-27.682-61.754-61.793-61.793c-4.875,0-8.828,3.952-8.828,8.828
                C282.481,181.426,286.433,185.378,291.309,185.378z"/>
            </svg>
            <a>(650)273-0584‬</a>
          </div> */}
          <div className="icon">
            <a href="https://drive.google.com/file/d/1xiGPePggV_merqVtRetGtiEcifPpKEp4/view?usp=sharing">
              <svg fill="#5295b4" height="50" viewBox="0 0 500 500" width="33" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="m511.917 189.274h-128.834v-189.274h-271.547l-111.453 111.457v400.543h383v-76.324h128.833v-246.402zm-399.167-148.06v71.456h-71.454zm240.333 440.786h-323v-339.331h112.667v-112.669h210.333v159.274h-283v246.402h283zm128.834-76.324h-381.834v-186.402h381.833v186.402z"/><path d="m162.292 335.761h17.733c24.25 0 43.979-19.729 43.979-43.979s-19.729-43.979-43.979-43.979h-47.733v130.917h30zm0-57.959h17.733c7.708 0 13.979 6.271 13.979 13.979s-6.271 13.979-13.979 13.979h-17.733z"/><path d="m395.763 335.761h41.32v-30h-41.32v-27.959h51.987v-30h-81.987v130.918h30z"/><path d="m339.204 334.233v-42.368c0-24.296-19.767-44.063-44.063-44.063h-47.649v130.494h47.649c24.296 0 44.063-19.766 44.063-44.063zm-61.713-56.431h17.649c7.754 0 14.063 6.309 14.063 14.063v42.368c0 7.754-6.309 14.063-14.063 14.063h-17.649z"/><path d="m178.148 112.669h137.436v30h-137.436z"/></svg>          
            </a>
            <a href="https://drive.google.com/file/d/1lcdM0lZSxN5VulmX6h1hLYpoPOfX0etb/view?usp=sharing"></a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contact;//