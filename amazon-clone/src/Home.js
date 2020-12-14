import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="111"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
            price={109.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US240_QL65_.jpg"
          />
          <Product
            id="222"
            title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6' Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, Wi-Fi 6, RGB Keyboard, PH315-53-72XD"
            price={1156.31}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51UQDEuqoiL._AC_US240_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="333"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games"
            price={36.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61NZPCYSeVL._AC_UY327_QL65_.jpg"
          />
          <Product
            id="444"
            title="2020 AutoFocus 1080p Streaming Webcam with Stereo Microphone and Privacy Cover, NexiGo FHD USB Web Camera, for Online Class, Zoom Meeting Skype Facetime Teams, PC Mac Laptop Desktop"
            price={54.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41nOOq0gsgL._AC_UY327_QL65_.jpg"
          />
          <Product
            id="555"
            title="Minecraft - Nintendo Switch"
            price={59.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71dIHv1zh7L._AC_UY327_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="666"
            title="AmazonBasics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display"
            price={9.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61j17FjPhtL._AC_UL480_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
