"use client";
import AdSense from "react-adsense";
const AdBanner = () => {
  return (
    <>
      <div>
        {/*  responsive and native ads */}
        <AdSense.Google
          client="ca-pub-1436861775123746"
          slot="6835567205"
          style={{ display: "block" }}
          layout="in-article"
          format="fluid"
        />
      </div>
    </>
  );
};

export default AdBanner;
