"use client";

import React, { useState } from "react";
import { UploadButton, UploadDropzone } from "@/app/lib/uploadthing";
import Image from "next/image";
import { toast } from "sonner";

const Upload = () => {
  const [profileImage, setProfileImage] = useState<null | string>(null);

  return (
    <>
      <UploadButton
        className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          //@ts-ignore
          setProfileImage(res);
          toast.success("Profile image succesfully uploaded");
        }}
        onUploadError={() => {
          toast.error("Something went wrong with uploading profile image");
        }}
      />

      {profileImage ? (
        <Image
          //@ts-ignore
          src={profileImage[0].url}
          height={50}
          width={50}
          alt="profileImage"
        />
      ) : null}
    </>
  );
};

export default Upload;
