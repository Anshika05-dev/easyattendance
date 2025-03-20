// import {QRCodeSVG} from 'qrcode.react';
// import { useEffect, useState } from "react";

// const getRandomInterval = () => Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000; // 5-10 seconds

// const generateQRData = () => {
//   const sessionId = Math.random().toString(36).substr(2, 9);
//   const validFrom = new Date().toISOString();
//   const validTo = new Date(Date.now() + 5 * 60 * 1000).toISOString(); // 5 minutes valid
  
//   return { sessionId, validFrom, validTo };
// };

// const Createsession = () => {
//   const [qrData, setQrData] = useState(generateQRData());

//   const regenerateQR = () => {
//     setQrData(generateQRData());
//   };

//   useEffect(() => {
//     const interval = getRandomInterval();
//     const timer = setTimeout(regenerateQR, interval);

//     return () => clearTimeout(timer);
//   }, [qrData]); 

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Dynamic QR Code Generator</h2>
//       <QRCodeSVG value={JSON.stringify(qrData)} size={200} />
//       <p>Session ID: {qrData.sessionId}</p>
//       <p>Valid From: {qrData.validFrom}</p>
//       <p>Valid To: {qrData.validTo}</p>
//       <button onClick={regenerateQR} style={{ marginTop: "20px", padding: "10px 20px" }}>
//         Generate New QR
//       </button>
//     </div>
//   );
// };

// export default Createsession;

import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

const getRandomInterval = () => Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000; // 5-10 seconds
const getRandomValidityDuration = () => Math.floor(Math.random() * (25000 - 10000 + 1)) + 10000; // 10-25 seconds

const generateQRData = () => {
  const sessionId = Math.random().toString(36).substr(2, 9);
  const validFrom = new Date();
  const validTo = new Date(validFrom.getTime() + getRandomValidityDuration()); // 10-25 seconds validity

  // Construct the URL with query parameters
  const url = new URL("https://yoururl.com/attendance");
  url.searchParams.append("sessionId", sessionId);
  url.searchParams.append("validFrom", validFrom.toISOString());
  url.searchParams.append("validTo", validTo.toISOString());

  return { sessionId, validFrom: validFrom.toISOString(), validTo: validTo.toISOString(), url: url.toString() };
};

const QRGenerator = () => {
  const [qrData, setQrData] = useState(generateQRData());

  const regenerateQR = () => {
    setQrData(generateQRData());
  };

  useEffect(() => {
    const interval = getRandomInterval();
    const timer = setTimeout(regenerateQR, interval);

    return () => clearTimeout(timer);
  }, [qrData]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Dynamic QR Code Generator</h2>
      <QRCodeSVG value={qrData.url} size={200} />
      <p>Session ID: {qrData.sessionId}</p>
      <p>Valid From: {qrData.validFrom}</p>
      <p>Valid To: {qrData.validTo}</p>
      <p>URL: <a href={qrData.url} target="_blank" rel="noopener noreferrer">{qrData.url}</a></p>
      <button onClick={regenerateQR} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Generate New QR
      </button>
    </div>
  );
};

export default QRGenerator;