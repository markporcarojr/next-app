import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}

const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <>
      <div>User {id} Photos </div>
      <h1>Photo ID {photoId}</h1>
    </>
  );
};

export default PhotoPage;
