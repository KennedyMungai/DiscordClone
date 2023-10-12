"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";

type Props = {
  endpoint: "messageFile" | "serverImage";
  value: string;
  onChange: (url?: string) => void;
};

const FileUpload = ({ endpoint, value, onChange }: Props) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};

export default FileUpload;
