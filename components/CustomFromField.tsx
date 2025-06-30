"use client";

import { FormfieldTypes } from "./forms/PatientFrom";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control } from "react-hook-form";

interface CustomProps {
  control: Control<any>;
  fieldType: FormfieldTypes;
  name: String;
  placeholder: String;
  label:String
}

const CustomFromField = ({
  control,
  fieldType,
  name,
  placeholder,
  label
}: CustomProps) => {
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem className="flex-1 ">
          {fieldType !== FormfieldTypes.CHECKBOX && (
            <FormLabel>{label}</FormLabel>
          )}
        </FormItem>
      )}
    />
  );
};

export default CustomFromField;
