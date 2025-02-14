"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="Hive tool logo"
        />
      )}
      <CldUploadWidget
        uploadPreset="lznyljpk"
        // display images
        onSuccess={(results, widget) => {
          if (results.event !== "success") return;
          const info = results.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        // customize theme
        options={{
          sources: ["local", "camera"],
          cropping: true,
          multiple: false,
          maxFiles: 5,
          styles: {
            palette: {
              window: "#10173a",
              sourceBg: "#20304b",
              windowBorder: "#7171D0",
              tabIcon: "#79F7FF",
              inactiveTabIcon: "#8E9FBF",
              menuIcons: "#CCE8FF",
              link: "#72F1FF",
              action: "#5333FF",
              inProgress: "#00ffcc",
              complete: "#33ff00",
              error: "#cc3333",
              textDark: "#000000",
              textLight: "#ffffff",
            },
            fonts: {
              default: null,
              "'IBM Plex Sans', sans-serif": {
                url: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans",
                active: true,
              },
            },
          },
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
