import React, { useState } from "react";
import "./Gallery.css";
import ApiExampleTile from "./ApiExampleTile";
import GeolocationApi from "./ApiPages/geolocation/GeolocationApi";
import ContactsApi from "./ApiPages/contacts/ContactsApi";
import pages from "./pages.json";
import backButton from "../utils/ReusableComponents";
import BluetoothApi from "./ApiPages/bluetooth/BluetoothApi";
import BarcodeApi from "./ApiPages/barcode/BarcodeApi";


export default function Gallery() {
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
        return <BluetoothApi />;
      case 3:
        return <BarcodeApi />;
      case 5:
        return <ContactsApi />;
      default:
        return <ApiExampleTile title="Oops, No API Page Found" />;
    }
  }

  return (
    <div>
      <button className="back-button" onClick={resetApiId}>
        {backButton()}
      </button>
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
              key={page.id}
            />
          ))}
      </div>
    </div>
  );
}
