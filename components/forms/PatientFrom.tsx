"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFromField from "../CustomFromField";

export enum FormfieldTypes {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKbOX = "checkbox",
  SELECT = "select",
  SKELETON = "skeleton",
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function PatientForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4 ">
          <h1 className="text-xl font-bold">Hi there ;)</h1>
          <p className="text-sm">Schedule your first appointment</p>
        </section>
        <CustomFromField
          control={form.control}
          fieldType={FormfieldTypes.INPUT}
          name="username"
          label="Username"
          placeholder="john doe"
          iconSrc="/file.svg"
          iconAlt="user"
        />
        <CustomFromField
          control={form.control}
          fieldType={FormfieldTypes.INPUT}
          name="email"
          label="Email"
          placeholder="example@gmail.com"
          iconSrc="/window.svg"
          iconAlt="mail"
        />
        <CustomFromField
          control={form.control}
          fieldType={FormfieldTypes.INPUT}
          name="phone"
          label="Phone"
          placeholder="+(123)45678"
          iconSrc="/globe.svg"
          iconAlt="phone"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
