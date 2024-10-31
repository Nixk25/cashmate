"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { UploadButton } from "@/app/lib/uploadthing";
import { toast } from "sonner";
type editFormTypes = {
  user: {
    given_name: string | null;
    family_name: string | null;
    email: string | null;
    profilePicture?: string | null;
    picture: string | null;
  };
};

const formSchema = z.object({
  name: z.string().min(2).max(50),
  surname: z.string().min(2).max(50),
  email: z.string().email(),
  profilePicture: z.any(),
});
const EditForm = ({ user }: editFormTypes) => {
  const fullName = ` ${user.given_name}  ${user.family_name}`;
  const [preview, setPreview] = useState<string>("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      profilePicture: user?.profilePicture || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <div className="flex gap-5">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      //@ts-ignore
                      placeholder={user.given_name}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      //@ts-ignore
                      placeholder={user.family_name}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your email</FormLabel>
                  <FormControl>
                    <Input
                      //@ts-ignore
                      placeholder={user.email}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-center flex-1 ">
            <FormField
              control={form.control}
              name="profilePicture"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center w-full gap-5">
                  <FormLabel>Profile picture</FormLabel>
                  <FormControl>
                    <div>
                      {preview === "" ? (
                        <Avatar className=" size-52 group">
                          <AvatarFallback className="cursor-pointer group-hover:brightness-90">
                            <div className="group-hover:hidden">
                              {fullName
                                .split(" ")
                                .map((word: string) => word[0])
                                .join("")}
                            </div>
                            <div className="items-center justify-center hidden p-5 group-hover:flex">
                              <UploadButton
                                endpoint="imageUploader"
                                className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
                                onClientUploadComplete={(res) => {
                                  //@ts-ignore
                                  setProfileImage(res);
                                  toast.success(
                                    "Profile image succesfully uploaded"
                                  );
                                }}
                                onUploadError={() => {
                                  toast.error(
                                    "Something went wrong with uploading profile image"
                                  );
                                }}
                              />
                            </div>
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <>
                          <div className="flex flex-col items-center justify-center mt-5 rounded-lg">
                            <h3 className="mb-3 text-lg">
                              Nový obrázek receptu
                            </h3>
                            <Avatar className="h-[150px] w-[150px]">
                              <AvatarImage
                                className="object-cover rounded-lg "
                                src={preview}
                              />
                            </Avatar>
                          </div>
                        </>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default EditForm;
