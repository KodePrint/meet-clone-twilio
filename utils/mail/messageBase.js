const msgBase = (user, email) => `
<div>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&display=swap');
  div {
    font-family: 'Heebo', sans-serif;
  }
  </style>
  <div class="wrapper"
    style="
      background: #f7fff7;
      max-width: min(100%, 600px);
      margin-left: auto;
      margin-right: auto;
      height: auto;
      border-bottom: none;
    "
  >
    <div
      style="
        display: flex;
        border-bottom: 2px solid #191363;
        padding: 30px ;
      "
      class="logo-cotainer"
    >
      <img 
        style="height: 50px;"
        src="https://yt3.ggpht.com/j7We2IbzRz3IwgqrRKcWxBpOcJIXUBkA7sqe-YD-zY9Cw_8RqL0gKhbstAIb1BZpqfBYf9sUYg=s108-c-k-c0x00ffffff-no-rj"
        alt="Logo"
      >
      <h1 style="color: #191363;line-height: 10px; margin-left: 10px;">KodeMeet</h1>
    </div>
    <div
      style="
        border-bottom: 2px solid #191363;
        padding: 30px ;
      "
      class="content-info"
    >
      <p style="
        color: rgb(126, 132, 132);
        font-size: 16px;
        margin: 0;
        padding: 0;
        margin-bottom: 30px;
      ">
        Hello, <b>${user}</b>
      </p>
      <p style="
        color: rgb(126, 132, 132);
        font-size: 16px;
        margin: 0;
        padding: 0;
      ">
        We received a request to reset your password
      </p>
      <p style="
        color: rgb(126, 132, 132);
        font-size: 16px;
        margin: 0;
        padding: 0;
        margin-bottom: 30px;
      ">
        If you were the one who made this request, click on the following button
      </p>
      <a 
        style="
          line-height: 45px;
          width: 100%;
          display: block;
          text-decoration: none;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          height: 45px;
          color: #f7fff7;
          background: #f99034;
          border-radius: 5px;
        " 
        class="link-btn" 
        href="https://kevin-palma.com"
      >
        Restore password
      </a>
    </div>
    <div 
      style="
        border-bottom: 2px solid #191363;
        padding: 30px ;
      "
      class="send-info"
    >
      <p style="
        color: rgb(126, 132, 132);
        font-size: 16px;
      ">This message was sent to ${email} at the request of the user.
        KodePrint, Attention: Community Support, KodeMeet</p>
    </div>
    <div
      style="
        padding: 30px;
        text-align: center;
      "
      class="footer">
      <p style="
        color: rgb(126, 132, 132);
        font-size: 16px;
        margin: 0;
        padding: 0;
      ">Copyright © 2022 KodeMeet by KodePrint</p>
      <p style="
        color: rgb(126, 132, 132);
        font-size: 16px;
        margin: 0;
        padding: 0;
      ">Created by Kevin Palma</p>
    </div>
  </div>
</div>
`
module.exports = {msgBase}