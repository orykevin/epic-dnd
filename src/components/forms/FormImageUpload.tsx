import { useDropzone } from "react-dropzone";
import { Label } from "./FormWrapper";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { useConvexUploadFile } from "@/lib/convex-functions";
import { api } from "@convex/_generated/api";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";

type Images = {
  url: string;
  uploaded: boolean;
  percent: number;
  id: string;
};

type Props = {
  name: string;
  label: string;
  isRequired?: boolean;
  tooltip?: string;
  defaultImages?: string[];
};

const r2Url = import.meta.env.VITE_R2_URL;

export const FormImageUpload = ({
  name,
  label,
  isRequired,
  tooltip,
  defaultImages,
}: Props) => {
  const defaultImagesData = defaultImages?.map((url) => ({
    url,
    uploaded: true,
    percent: 100,
    id: crypto.randomUUID(),
  }));
  const [images, setImages] = useState<Images[]>(defaultImagesData || []);
  const { setValue } = useFormContext();
  const { upload } = useConvexUploadFile(api.v1.upload, true);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const files = acceptedFiles.map((file) => {
        return {
          file: file,
          url: URL.createObjectURL(file),
          id: crypto.randomUUID(),
        };
      });

      setImages((prevImages) => [
        ...prevImages,
        ...files.map((file) => ({
          url: file.url,
          uploaded: false,
          percent: 0,
          id: file.id,
        })),
      ]);

      files.forEach(async (file) => {
        upload(file.file, {
          prefix: "projects/",
          onUploadProgress: (percent) => {
            setImages((prevImages) =>
              prevImages.map((image) => {
                if (image.id === file.id && !image.uploaded) {
                  return { ...image, percent: percent.percentage };
                } else {
                  return image;
                }
              })
            );
          },
        }).then((key) => {
          setImages((prevImages) =>
            prevImages.map((image) => {
              if (image.id === file.id) {
                return {
                  url: key,
                  uploaded: true,
                  percent: 100,
                  id: image.id,
                };
              }
              return image;
            })
          );
        });
      });
    },
  });

  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.url));
    };
  }, []);

  useEffect(() => {
    if (images.length > 0 && images.every((image) => image.uploaded)) {
      {
        setValue(
          name,
          images.map((image) => image.url)
        );
      }
    }
  }, [images]);

  return (
    <div className="space-y-2">
      {label && (
        <Label isRequired={isRequired} tooltip={tooltip}>
          {label}
        </Label>
      )}
      <div
        className="flex flex-col items-center justify-center w-full h-28 p-4 border border-gray-300 border-dashed rounded-lg cursor-pointer"
        {...getRootProps()}
      >
        <input {...getInputProps()} type="file" />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p className="text-center">
            Drag & drop some files here, <br /> or click to select files
          </p>
        )}
      </div>
      {images.length > 0 && (
        <div className="flex gap-2 items-center">
          {images.map((image, index) => {
            return (
              <div key={index} className="relative w-24 h-20">
                <img
                  src={r2Url + image.url}
                  alt=""
                  className="w-full h-full object-contain"
                />
                {!image.uploaded && (
                  <div className="relative -top-1/2 h-1.5 w-full bg-gray-200 rounded-md overflow-hidden my-1">
                    <span
                      className="absolute top-0 left-0 h-full bg-blue-500 transition-all"
                      style={{ width: `${image.percent}%` }}
                    />
                  </div>
                )}
                {image.uploaded && (
                  <Button
                    size="icon"
                    variant="destructive"
                    className="absolute top-0 right-0 h-6 w-6 cursor-pointer"
                    onClick={() =>
                      setImages((prev) =>
                        prev.filter(
                          (selectedImage) => selectedImage.id !== image.id
                        )
                      )
                    }
                  >
                    <Trash />
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
