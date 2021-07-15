import React, { useState } from "react";
import "./Gallery.css";
import ApiExampleTile from "./ApiExampleTile";
import GeolocationApi from "../ApiPages/geolocation/GeolocationApi";
import ContactsApi from "../ApiPages/contacts/ContactsApi";
import sign from "../../assets/img/sign_1.svg";
// import i1 from "../../assets/img/1.jpg";
// import i2 from "../../assets/img/2.jpg";
// import i3 from "../../assets/img/3.png";
// import i4 from "../../assets/img/4.jpg";
// import i5 from "../../assets/img/5.jpeg";
// import i6 from "../../assets/img/6.jpeg";
// import i7 from "../../assets/img/7.jpg";

const pages = [
  {
    id: 1,
    title: "Geolocation API",
    description: [
      "Display geolocation info as text",
      "Show a plotted map with coordinates",
    ],
    logourl: "../../assets/img/geolocation.png",
  },
  {
    id: 2,
    title: "Bluetooth API",
    description: [
      "View paired devices info as list",
      "Connect to soundbar and play music.",
    ],
    logourl: "../../assets/img/bluetooth.png",
  },
  {
    id: 3,
    title: "Barcode Detection API",
    description: ["Read barcodes and display"],
    logourl: "../../assets/img/barcode.png",
  },
  {
    id: 4,
    title: "File System Access API",
    description: ["Read a text file and view it."],
    logourl: "../../assets/img/file.png",
  },
  {
    id: 5,
    title: "Contact Picker API",
    description: ["Read a bunch of contacts and view on page 😕"],
    logourl: "../../assets/img/contacts.png",
  },
];

export default function Gallery() {
  // const images = [i1, i2, i3, i4, i5, i6, i7];
  const [selectedApiId, setSelectedApiId] = useState(0);

  function setApiPageId(id) {
    setSelectedApiId(id);
  }

  function resetApiId() {
    setSelectedApiId(0);
  }

  function getApiPage(id) {
    switch (id) {
      case 1:
        return <GeolocationApi />;
      case 2:
        return <ApiExampleTile title="222" />;
      case 5:
        return <ContactsApi />;
      default:
        return <ApiExampleTile title="Oops, No API Page Found" />;
    }
  }

  return (
    <div>
      <button onClick={resetApiId}>Back</button>
      <div className="galleryPage">
        {Boolean(selectedApiId) && getApiPage(selectedApiId)}
        {!Boolean(selectedApiId) &&
          pages.map((page) => (
            <ApiExampleTile
              id={page.id}
              title={page.title}
              description={page.description}
              logourl={page.logourl}
              setApiPageId={setApiPageId}
            />
          ))}
      </div>
      <svg width="300" height="auto" viewBox="0 0 577 247" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="sign_2">
          <path id="line" d="M2 245C19.2251 231.933 31.9988 212.258 43.6667 194.444C67.8124 157.582 93.5363 117.525 103.889 74.1111C107.604 58.5318 115.02 35.234 109.889 18.8889C108.626 14.8662 99.6925 -0.157997 93.4444 2.22222C91.8978 2.81141 90.2487 10.3602 89.5556 11.9444C87.8776 15.7798 88.6598 22.6478 90 26.3333C90.6044 27.9954 96.9566 26.9032 97.9444 26.7778C109.555 25.3034 119.504 18.5256 129.889 13.6667C156.025 1.43799 189.637 1.97137 206.889 28.6667C214.474 40.403 215.569 59.3245 213.889 72.6667C211.79 89.3394 199.784 101.605 188.444 113.167C165.766 136.29 131.285 140.738 100.333 139.944C93.4315 139.767 73.0959 136 80 136C133.199 136 189.615 134.891 239.778 155C249.856 159.04 254.739 163.008 257.889 173.556C261.199 184.638 263.106 197.305 262.444 208.889C262.057 215.666 259.623 217.436 253.444 219.556C246.418 221.965 229.816 229.561 227.111 217.667C221.445 192.753 236.003 166.487 254.056 150.833C258.219 147.223 276.422 128.774 283.556 136C287.217 139.709 293.643 148.121 289.444 153.444C286.387 157.321 282.384 158.127 277.889 158.944C271.057 160.187 291.753 157.412 298.444 155.556C305.266 153.663 318.667 149.92 318.667 140.556C318.667 132.448 313.808 156.15 313.056 164.222C311.552 180.356 306.125 204.624 317.556 218.667C323.774 226.307 332.294 216.868 336.778 212C340.849 207.58 344.078 202.953 346.333 197.333C355.752 173.864 361.895 148.378 366.889 123.667C371.024 103.206 373.512 81.8244 372.778 60.8889C372.486 52.5611 373.349 38.8903 366.222 32.5555C364.638 31.1477 360.197 49.9538 360.056 50.5C354.428 72.2291 353.037 94.8534 352.222 117.222C351.109 147.79 353.026 176.919 367.222 204.333C378.668 226.436 405.871 230.523 423.111 211.278C434.191 198.909 442.778 182.418 442.778 165.556C442.778 156.438 441.452 147.277 438.333 138.667C436.025 132.294 429.541 115.105 419.667 117C403.583 120.086 390.834 142.53 387.889 156.944C385.627 168.015 388.009 178.957 394.222 188.333C400.812 198.278 410.651 208.168 423.5 206.944C429.228 206.399 431.394 199.596 431.778 194.778C431.942 192.723 431.922 173.955 433.444 184.611C435.18 196.76 435.749 214.8 449.889 219.778C464.474 224.912 468.503 201.677 470.889 192.333C475.644 173.711 476.447 154.519 479 135.556C479.382 132.716 479.623 128.791 480.778 126C481.092 125.24 481.915 127.301 482.056 128.111C485.044 145.296 483.003 162.922 484.444 180.222C485.384 191.498 487 202.661 487 214C487 225.011 487.428 191.963 488.444 181C489.577 168.787 488.704 153.578 498.111 144.222C502.378 139.979 508.686 135.452 515.111 136.278C523.115 137.307 524.25 159.139 525 163.389C527.537 177.768 529.512 192.211 530.556 206.778C530.835 210.681 530.872 213.616 531 217.333C531.042 218.555 531 214.889 531 213.667C531 194.16 528.998 173.257 533.222 154.056C535.208 145.028 538.183 137.672 548.5 137.167C565.167 136.35 571.384 154.507 572.778 168.111C574.261 182.584 574 197.246 574 211.778C574 213.611 573.311 216.156 575 217" stroke="black" stroke-width="3" stroke-linecap="round"/>
          <path id="dashont" d="M289 77C340.852 77 392.551 83 444.444 83C449.362 83 451.707 83.3835 455.389 80.1111C456.866 78.7977 452.573 81.6181 452 82" stroke="black" stroke-width="3" stroke-linecap="round"/>
        </g>
      </svg>
    </div>
  );
}
