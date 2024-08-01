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
        options={{
          sources: ["local", "camera"],
          multiple: false,
          maxFiles: 5,
          styles: {
            palette: {
              window: "#5D005D",
              sourceBg: "#3A0A3A",
              windowBorder: "#AD5BA3",
              tabIcon: "#ffffcc",
              inactiveTabIcon: "#FFD1D1",
              menuIcons: "#FFD1D1",
              link: "#ffcc33",
              action: "#ffcc33",
              inProgress: "#00e6b3",
              complete: "#a6ff6f",
              error: "#ff1765",
              textDark: "#3c0d68",
              textLight: "#fcfffd",
            },
            fonts: {
              default: null,
              "'Kalam', cursive": {
                url: "https://fonts.googleapis.com/css?family=Kalam",
                active: true,
              },
            },
          },
        }}
        onSuccess={(results, widget) => {
          if (results.event !== "success") return;
          const info = results.info as CloudinaryResult;
          setPublicId(info.public_id);
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
