"use client";

import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

const formSchema = z.object({
  name: z.string().min(1, { message: "The server name is required" }),
  imageUrl: z.string().min(1, { message: "The server imageUrl is required" }),
});

export const InitialModal = (props: Props) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  return (
    <Dialog open={true}>
      <DialogContent
        className="bg-white text-black p-0 overflow-hidden"
        // asChild
      >
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Customize Your Server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your server a personality with a name and an image. You can
            always change it later
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InitialModal;
