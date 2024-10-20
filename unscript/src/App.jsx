import { useState } from "react";
import "./App.css"; // Ensure you have your CSS styles here

function App() {
  // Array of image URLs
  const imageUrls = [
    "https://via.placeholder.com/150?text=Image+2  ",
    "https://via.placeholder.com/150?text=Image+2",
    "https://via.placeholder.com/150?text=Image+3",
    "https://via.placeholder.com/150?text=Image+4",
    "https://via.placeholder.com/150?text=Image+5",
    "https://via.placeholder.com/150?text=Image+6",
    "https://via.placeholder.com/150?text=Image+7",
    "https://via.placeholder.com/150?text=Image+8",
    "https://via.placeholder.com/150?text=Image+9",
    "https://via.placeholder.com/150?text=Image+10",
    "https://via.placeholder.com/150?text=Image+11",
    "https://via.placeholder.com/150?text=Image+12",
    "https://via.placeholder.com/150?text=Image+13",
    "https://via.placeholder.com/150?text=Image+14",
    "https://via.placeholder.com/150?text=Image+15",
    "https://via.placeholder.com/150?text=Image+16",
    "https://via.placeholder.com/150?text=Image+17",
    "https://via.placeholder.com/150?text=Image+18",
  ];

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://cdn.prod.website-files.com/6643532c58c89f83c4fcd358/66435cbb1e8a3fb4dd89a6b1_unscript%20Logo.webp"
            alt="Logo"
            width="148"
            height="34"
          />
        </div>
        <div className="dropdowns">
          <div className="dropdown">
            <button className="dropbtn">Use Cases</button>
            <div className="dropdown-content">
              <a href="#">Learning and Development</a>
              <a href="#">Marketing Teams</a>
              <a href="#">Personalise Videos</a>
              <a href="#">Debugging</a>
              <a href="#">Customer Service</a>
              <a href="#">Enterprise</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Features</button>
            <div className="dropdown-content">
              {/* Add options if needed */}
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Resource</button>
            <div className="dropdown-content">
              {/* Add options if needed */}
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Company</button>
            <div className="dropdown-content">
              <a href="#">About us</a>
              <a href="#">Contact us</a>
            </div>
          </div>
        </div>
        <button className="navbar-button">Contact Sales</button>
      </nav>
      <div className="container">
        <h1>
          Create{" "}
          <span className="colorr">
            professional videos at a fraction of the cost
          </span>
        </h1>
      </div>
      <div className="para">
        <p>
          Produce life-like videos at scale in 140+ regional and global
          Languages—no filming setup or teams required
        </p>
      </div>
      <div className="textbox">
        <input
          style={{ padding: "10px" }}
          type="email"
          className="email-textarea"
          placeholder="E-Mail"
        />
        <button
          style={{ padding: "10px", margin: "10px" }}
          className="email-button"
        >
          Get a Demo
        </button>
      </div>
      <div className="video">
        <iframe
          width="100%"
          height="715"
          src="https://www.youtube.com/embed/p5ID33gk3TE?si=64FkQimh4Qg1D-5U"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="heading2">
        <h1>Trusted by 10,000+ customers worldwide</h1>
      </div>
      {/* <div className="heading3">
        <h1>Number of videos created using Unscript</h1>
      </div> */}
      <div className="image-gallery">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <div className="heading4">
        <h1>Explore our solutions for effortless video creation</h1>
      </div>
      <div class="section">
        <div class="content">
          <div class="text">
            <h1>Minutes, not hours</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio. Praesent libero.
            </p>
          </div>
          <div class="image">
            <img
              src="data:image/jpeg;base64,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"
              alt="Image 1"
            ></img>
          </div>
        </div>
        <div class="content reversed">
          <div class="text">
            <h1>80% cost reduction</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio. Praesent libero.
            </p>
          </div>
          <div class="image">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEBUSEhIPFRIWFRgXGBEWFRUTFRcWFxgXFhUXFRYbHSggGBolGxcVITEhJSkrLy4uFyAzODMwNygtLisBCgoKDg0OGxAQGy0lICU1LS0tLS0rLS0tLy0wLS0vLS0tLS0vLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAD4QAAIBAgQDBQYFAQcEAwAAAAABAgMRBBIhMQVBUQYTImFxMoGRobHRI0JSYsHwFBVDkrLh8QeiwuIzcoL/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQMCBAUGB//EADARAQACAgAEBAUDBAMBAAAAAAABAgMRBBIhMQVBUWETIoGRsXHB0QYyoeEjUvBC/9oADAMBAAIRAxEAPwC+NhwwAAAAAAAAAAAAAAAAAAUva2lfD3/TNP43j/KMqd1mKfmcaWtoAAAAGuoiJIYBL6JwGtnw1J/sS98fC/oVT3aeSNWlPIYAAAAAAAAAAAAAAAAAAAAAAETi9LNQqR/Y2vVar5omvdlSdWh8+Lm4AAAADCpsJIayEu17GVr4dx/TN/BpP63K7d2tmj5l8YqQAAA14msoRcn8OrK8uWMdeaW3wPB34vNGKv1n0j1U88fUbvmt5JI5FuLyzPfT3OLwPgsddTTm952mYDHOTyy3ez/hm5w3FzeeS/f1cPxjwSmDHObB2jvH7wsDfeXAAAAAAAAAAAAAALAfNq9LLKUf0ycfg7F7didwwCQAAAxnsBqIS6XsRW8dSHWKl/ldn/qRhZRnjpEuuMGuAAAEHjEXkT5J/wAGjx0TNIn3ej/pm9a8Tas95jp91Qcp7hvwNKUqkVFNu97JX0j4m/ck2W4ImclderS8RvFeEyTb/rP+YXx3nzEAAAAAAAAAAAAAAA4TtFSy4mp5tS/zJN/O5dWejaxzusK4lYAAAADQQledkqNTv4zUJd3aSc7eG1ns+fiS2MbdlWbXK7craoAAAeSimrNXT5EWrFo1LPHktjvF6TqY7Sr58KV9JNLo1f8Ak0LcBG/ll6fD/VF4rrJj3PrE6/xqXadhMHh4JuN3iLWblb2f2Lktr8/kWU4aMX8qM3i1+N6T0iPKPz7su0nAst6tJeHeUFy6yj5dVy+mxW3lLk8Rw+vmq5osaQAAAAAAAAAAAAADk+2NK1WEv1Ra/wAr/wDYsp2bGGejnmzNcyowc3aCcn0inJ/BAW+D7K42r7GExHrKDpr4zsjGb1jzZRS0+S9wX/THHTtn7ikueaeaS90E0/iYTmqyjFZ0PD/+k1Na18TUn5U4xpr0vLNf5GE558oZxhjzlZUuy3D8NJ2o0nJO+ao3Vl6pSvb3I178TEf3WX4+Hmf7YRONYqM5xyp2irX2vzVl0LMNotXmjs5/HRy5OWY6wri1pgAAAAAZ0asoSUotqSd00O6YmYncO74HxiNeNnZVEvFHr+6Pl9Cm1dOphzRkj3UnaPgWS9WkvBvKC/L5r9v09Ns628pa3EcPr5qucM2mAAAADGpNJNvZK5ja0VibStwYbZslcdO8zpTVsfOT0biui+5x8nF5LT0nUPfcL4HwmGkRavNPnM/w2YTiEk7Td49eaLMHGWidXncNTxLwHDkxzfBHLaPKO0/xK3Os8OAAAGuvh4TVpwhK22aKlb4hMTMdnZYJcOUVKOHw0Xb8uHinfntHqaeTia0ty2l3MGG2SkXrHSU7++6MVaKlbpGKS+diieNx+7Zjg8ns01O0S/LTfvdvpcrnjo8oWRwU+colXj1V7ZI+iu/mU24zJPbULq8HjjvuUDEYupP2qk/S9l8EU2zXt3mV1cNK9oQpRsVrEbER5nV8PydJp9XA8Zw6tXLH6T+zSdJxAAAAAAAGzD1pQkpwbUk7poiYTW01ncO74JxaNeGtlUS8UP5XVfQqtXTqYc0ZI93L9rcFSw8lNTjFT/wr+JecVvl+hE56Uj5pRHhmbPb/AIK7/b6yoaOMhJ2UtejTQpxOO86iWPE+E8Xw9ea9OnrHX8JEVd2V2+i1Ze5sdVjhuBYie1NpdZeH5PX5GM2iF1eHyW8lthuyL/xKnugv/J/Yxm6+vB/9pedo+zlOODq91FuokpZm23aMlKVlt7KeyNfiJtbHMOv4Vjx4eKpb6feNPmZyHtxK+i3fIRG+kItaKRNrdo6ukitD0URqNPlGS0WvNo85l6SwAAAb0mImekLWnGyS6I81kvz3m3q9pgx/Dx1p6Q9MFoAAAGgI9anyLcOT4d4sp4nDGbFNPX8+SCeiiYnrDxkxMTqQlAAAAAAADZh8RKnJTg2pLVP+t0RPZlSZi0cvdz3EMbOtVlVqO8pO/ouUV5JaHn72m07l9Uw4a4ccY6+SOYrX1Xslj6f9ip1J91B6xk/DDM4txv5t2T9Tr4LTekTLxPiGHHw2e1a6iO/36pGJ7T0I+y5Tf7Vp8XYuikubbiscduqpxPa2o/YhCK6u8n/CM4pCi3GWntCpxPFK1T26k2uieVfBWRlERDXtlvbvKmrcMi3dNx8t0aeTgqWncTp3uF/qPPipFMkRbXn2n6+rrexHBcOl3vinWjp4rWjfZxXmubvzIpwtcc77rcvjGTjKcuuWPOI/lG7R8K7mpmivw57ftfOP2/2NyttuBxGHktuO0qgya4AA3YWF5Ly1NXjMnJin36N7w7F8TiK+kdft/tYHBesAAAAAA8nG6Ar68bP1O3wOXmx8s+TzPiuD4eXnjtb8+bUbrlgAAAAAAAFFjMK4N6eHk/4Zw8+C2OfZ9H8M8Tx8Xjjr8/nH7x6w1UqTk7RV3/W/QrpjtedVhu8RxOLh6c+W2o/92jzX2Go5YqPTn57s7mLH8OkVfNuO4qeKz2yz5/jybCxqAAABK4ZjpUainH0ceseaImNs8eSaW3DvKsKeJodYTV0+afJ+TTKesS6sxXLT2lwGOwkqVR05brnya5NeTLonbk3pNLaloJYgE3Aw0bOT4jk3aKej0Pg2LVLZJ8+n2STmuyAAAAAAAjYqH3Nrg8nJlj0no0fEcHxcE67x1hCO88mAAAAAAAAACEJmZnuBAAAAAAF72X4r3c+7m/w5vR/pl9n9jC9d9W1w2blnlntK97R8K76nmivxI7fuXOP28/UwrOpbXEYueu47w4UucsAtKULJI83mvz3mz2nDYvhYq09IZX1sVrgAAAAAAGFVaEwT7qw9NDw0630CUAAAAAAAAAAAAAAAAAB2vZfiveQ7ub/EitG/zR6+q+xVeuurpcNm5o5Z7q3tXwrLLvoLwyfjXST/ADej+vqZUt5KeKw6nnhz0Hqn5k3iZrMQ1sVoretp8phaHmez28TE9YYT9qL9V8f+AMwAAAAANiI2TOkOvibqy+J1eG4KazF7/ZweN8Tras48Xn3n+EU6bhgAAAAAAAAAAAAAAAAAA24avKE1OLtKLun/AFyE9U1tNZ3D6BgcVDEUb2TUk1KD5PmmUTGpdal4yU24jjPDnQquOri9Yy6r7r+ty6s7c3NjnHbT3B1Lq3NfQ43H4uS/NHafy9D4VxHxMXJPev4bK+1+jTNF1GYAAAA018Rl05l2Hh75Z+VrcTxePh4+eevp5o9XFNq1rHTwcDGO3NaduJxXitstJpSNRP3RzfckAAAAAAAAAAAAAAAAAAAABZcC4m6FS7/+OWkl9JLzX3MbRtdgy/Dt7Ox4tgI4ila6v7UJ9Hy9zKonUujlxxkrr7OCSdObUk007SX1Jz4oy45r9mjw2eeHzRafr+i0xWFajycZLSS1TutDg3xWp3etx5a5I3Vqpu6T8jCVkTvs9IEapi7OyRtYeEvljmjpDR4nxDDgtyzuZ9mMsb0XxNqvhvX5rfZoZPGunyU+8o0pXd2dGmOtI5auNly2y2m153LEzVgAAAAAAAAAAAAAAAAAAAAPY7q4Syl/WxCZdL2S4r/gTf8A9G/nH+V/wYXr5tzhc3/xP0b+1fCc0e+gvFFeJdYrn6r6ehFLeTLisO454UFHijVF0mr/AKZX2W9irNw3xDhePnDXUxv0/wBmEleJy+MpyZZ07fhuWcnDxM9423Gq6Crqbv1Z6PDERjrr0eL4qZnNeZ9ZYlqgAAAAAAAAAAAAAAA9QICGQCAHm9Bp4gBJ2PsQH2CXqdndaNap80+VgO54HxLv4atZ46SXXo15P7lVo1Lp4cnxK+7m+0PDO6nmgvwpPT9r3cf5X+xnW24aPEYeSdx2lDwEt17zneI1/tt9HW8Fyf30/SUs5buK3ELxv1PQcLbeGryHH15eIvHv+Ws2GoAAAAAAAAAAAAAAAAAAAAAAAAAABK4bjZUainHlvHquaImNs8eSaW3DvJwp4ih1hNXT5p9fJp/Qp7S6sxXLT2lw8sNKjWdOW60vya3TXqVcbXmw79Oqvw7eLiorPnuEg4b0yDjV4vcdvgJ3i16S8x4vXXEb9YhHN1zAAAAAAAAAAAAAAAAAAAAAAAAAAAAF52Y4t3U+7m/w5vf9Muvo9n7jC1dtrhs3LPLPZ0PH+Gd7BSivxIarzXOP28ym0brNfVvWr81bx3iduZSOA9FuEPHrZ+p1fDbdLQ4PjVOtLfrCIdNwwAAAAAAAAAAscHw1On3tWfd072WmaU3+1fyYzPXULqYomvNadQwxmGoqGelVza2cJRyz9VyaJiZ80XpTW6yg3JVAC4EilhHKlOrdWg4prm8ztoRvrpnFN1m3ojksAAAAAAAAAAA7TstxbvId1N+OK0f6o/dfYqvXXV0eGzc0cs9zDUslSqtnn/7XqvqcyleW1o93ZvbmrX9HO9sZKDg07OU43Xlrf+CIvOPL8vnrf3X4uGpxGK3PG+WJmP10rTsvHAAAAAAAAAABcdoNI4eK9lUIter9r6Ixr5tjP2rEeinMmuv8diZYVQpUcsZZFKdTKnKTfLVbaGEde7ayXnDqtPq08ShCdOjiMqjnk41Ix0TcXq0uTaT+RMecIyRFq1yfdO4hVrayoqlUwttIRjCUYq35o2umjGNefdZkm/eupq08Px844Ko1lvCUIrwxeja3678yZj5mOPJMYZ9lDWquUnJ2u3d2Vl8DNq2mZncsAgAAAAAAAAAYS4j3MlNPxp3SW/v8ijPnpjjr39HT8O8Oz8VfePpEd7T2/wBtGK7U4idV1M0Y3VlBKyS5K+79bnHyZJvbme5x+G4KUimt+6rxmNnUlmnJt8vL0K4bVMFKV5awvrno4nfV8qtHLMwBAAAAAAAAAAtqGLpVKUaVdyg4XyVUs1k/yyW9tvgvfjqYncNit62rFb+XaWjF08PGDUJzq1G14srhGK56PVt/15o2wvGOI1E7lJq16NeMHUqOlVhFRbyOcZpbPTZkamGc2pkiOadTDVj8ZTkqVKGfuae8tFKTbvJpPbnb1JiJRkvWdVjtCTgJ0KNTvY15yST/AAsklJ3WkZP2f+CJ3PTTOk46W5ot9NNPD8VTdKrSqS7tTkpKSi5JNO9rLW2iJmJ3tjjvWazW3TatrxipNRlmitpWcb+dnsZKJiIno1hAAAAAAAAABCsxPDXduMr+Ut/ic3NwUzPNWd/q9dwH9RY61jHmpyxHnXt9v4V9Sm4u0k0/M0LUtSdWjT0+DiMWevNitEx7MTFe6KhK8IvrFfQ9BindIn2h8s4ynJxGSvpafyzM2sAAAAAAAAAAAABKpYS9CdW/syjHLbfNzuRvrpnFN0myKSwAAG2vQlDLmVs0VJap3i9n8gmazHdljKEYSSjUjNZU80dk3y9URCb1is9J20EsQAAAAAAADycE1ZpNdGY2rFo1MLMWbJitzY7TE+yBX4YnrB28nqvjyNLLwNZ60nT0nB/1Lkr8vEV3HrHSft2n/CXhYNQinulY2sNZrjis+Th+IZaZeJvkx9pncNpa0wAAAAAAAABdcVqRpqMIUqV50YOU3FN+KNvD+l6Xvu2/IwiNtnLMV1ERHWIS62FdKapxp4aVNWUnOVPPNtJyd3K8d9CN76rJpNZ5YiNe+kWGGp0u/q2jUVOSjTT8Ubye8v1WRPWdK4pWnNbvrsSxOfB1W4U4vvIXcI5U/VbXGupNubFPTzhF4xSjGNDKkr0It2SV273b6smPNhmiIiuvROq4Cm8W4uKVONNTlGKy3Sgm1p1ZG+i2cdZy68tbV1fiWZW7nDpXTVoWas72vzT2dzLSm2XfTUfZN7QYrw045KKzUKcsyglKO7tF8o6bebMawsz36RGo7Q2VMBCWKhBxSgqUZyUVa9o3e3VjfRlOOs5Ijy01YCvHEVO5lSoxUlLJKEVGUGk5LXmtNbiY11Y0tGSeWYj2a8K4wwneOnTnPv8AKnJXSvTT1X5lo9Nru5PeUV1GLm1udseKZZUaNXJCMpZ4yyrKnlaSduojvMIy6mtba9VWZKAAAAAAAAAAAAAAAAAAAS+JYtVHFpNZacYa9Y31IiNLMl+aY/RJrYyjVtOtCr3lkm4ONp20Td9nboRqY7MpvS3W0Tv2asFjYRVSnOEnRqflT8UbO8Wm92vmJjaKXiNxMdJZ1cbSVGdGnColKUZZ5NNu290tF7hqd7TOSsUmtYZSx1GdOmqkKjnTjlWWSUZRWylzXuGp8k89JrHNHWCpxd/2hVoxXsqLg9msuWS9By9NE5v+TnhpxM8PlfdwrZntmlHLHW7tbWXTUnqxtOPXyxLLGYunUpwuqiqwgoJpxyNR2b53tciImE2vW1Y33jp7M6nFvx4VoR9mMYuL5pKzXoxy9NJnN88WhlTx1GnedGFVVGmlnlFxp33cbat8tRqZ7kZKV60jr+EX+1L+z9zZ373vL8rZMtvUnXXbDn/4+X32V8WpUadOzvBzbfJ5ndWGuuy190ivptEJVgAAAAAAAAAAAAAAAAAAmQ4fJ2s07xhJPq5yUFH1zXX/AOWRtZ8OW2pwmS52j4rylGUbZFduzV2ult/IjmZThmGEMHB05SjNuSnCMVlavmUnbyd1b3eZO+qIpExMxLKPDG5ZYzjJqahLRpRk723Wsbpq45j4W56T7NFGgnKaTUlGEpKXiitFe65/EbYxWNyn4jh8W3GKUX3kYp66J0s7+ZEStnHEzqPX9kPDYBzUXf2lN2Sbl4LXSS3eu3qTMq645tr6/wCGyHD4yjTyz8c6koWaaXhy29N/mRtlGKJiNT1lhSwGZScJZlFN3ySUXljmfitZPeyfTlcbRGPcTMS21cDFXUHmfcxnrdNOTp7db5tmNpnHHl16fwwXDG5ZYzi2qkactH4XJ5U9faV01cbR8Lc6ifZoxGGyxjJSjKLbjdJq0o2bWu6tJak7Y2pqN72jksAAAAAAAAAAAAAAAAAAASI42ahGCdlGWdPndXa16Jtv3sjTOMlojTJY1qWZQpRbTUklK0lLdSTk9PSw0n4nXenixbSklGCUnF2WbwyjfLKLcr31e99xpHP6Q2f3lJSUlGnF51N2T8Ulezlr5vRWWo0n4s94/VGoVXG9raxcXfpJWfvDCJ0kf3lPNm8N88Z7c4xyLntYcsM/i23tjLG3yru6WWN8sfGkszTbupXvddRo+J26R0ZLiU7qTUHJVHUUmndSlbNs7Wdl8Bo+Lbe/qxo46UYqKjB2UkpNO6U1aSWtvkNIjJMRr/3UeOla1op5FTcle7jFxcedrrKtRo+JP7M/7ylmzKNNPPGcmk/HKLunLXrd2VlqRpPxZ3v6ozrPIoaWUnLzvJJP/SidMOadaayUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=="
              alt="Image 2"
            ></img>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="content">
          <div class="text">
            <h1>A crew of 15 vs 1 AI Tool</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio. Praesent libero.
            </p>
          </div>
          <div class="image">
            <img
              src="data:image/png;base64,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"
              alt="Image 1"
            ></img>
          </div>
        </div>
        <div class="content reversed">
          <div class="text">
            <h1>140+ languages</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio. Praesent libero.
            </p>
          </div>
          <div class="image">
            <img
              src="data:image/jpeg;base64,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"
              alt="Image 2"
            ></img>
          </div>
        </div>
      </div>
      <footer class="unique-footer">
        <div class="footer-inner">
          <div class="footer-logo">Unscript</div>
          <div class="footer-divider"></div>
          <div class="footer-columns">
            <div class="footer-column">
              <h4>Usecase</h4>
              <hr />
              <p>Learning and deployment</p>
              <p>Debugging</p>
              <p>Marketing team</p>
              <p>Personalised video</p>
            </div>
            <div class="footer-column">
              <h4>Features</h4>
              <hr />
              <p>AI Avtar</p>
              <p>Video Debugging</p>
              <p>AI Face Swap</p>
            </div>
            <div class="footer-column">
              <h4>Resources</h4>
              <hr />
              <p>Blog</p>
              <p>Support</p>
              <p>FAQ</p>
            </div>
            <div class="footer-column">
              <h4>Company</h4>
              <hr />
              <p>Get in touch with us.</p>
              <p>About US</p>
              <p>Contacting</p>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <p>© 2023 Unscript. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
