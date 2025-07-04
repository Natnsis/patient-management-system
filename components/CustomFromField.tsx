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
import React from "react";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Checkbox } from "@radix-ui/react-checkbox";

interface CustomProps {
  control: Control<any>;
  fieldType: FormfieldTypes;
  name: string;
  placeholder?: string;
  label?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  options?: { label: string; value: string }[];
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) {
    case FormfieldTypes.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {props.iconSrc && (
            <img
              src={props.iconSrc}
              alt={props.iconAlt}
              height={24}
              width={24}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              disabled={props.disabled}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );
    case FormfieldTypes.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            disabled={props.disabled}
            {...field}
            className="shad-input border border-dark-500 bg-dark-400"
          />
        </FormControl>
      );
    case FormfieldTypes.CHECKbOX:
      return (
        <FormControl>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={props.disabled}
              id={props.name}
            />
            {props.label && (
              <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
            )}
          </div>
        </FormControl>
      );
    case FormfieldTypes.SELECT:
      return (
        <FormControl>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={props.disabled}
          >
            <SelectTrigger className="shad-input border border-dark-500 bg-dark-400">
              <SelectValue placeholder={props.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {props.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormfieldTypes.SKELETON:
      return props.renderSkeleton ? (
        props.renderSkeleton(field)
      ) : (
        <div>Loading...</div>
      );
    default:
      return null;
  }
};

const CustomFromField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormfieldTypes.CHECKbOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFromField;
