"use client";
type Props = {
  endpoint: "messageFile" | "serverImage";
  value: string;
  onChange: (url?: string) => void;
};

const FileUpload = ({ endpoint, value, onChange }: Props) => {
  return <div>FileUpload</div>;
};

export default FileUpload;
