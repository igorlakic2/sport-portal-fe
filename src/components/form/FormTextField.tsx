import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { SharedFormProps } from "../../types/CommonTypes";
import ValidationMessage from "../ValidationMessage";

type Props<T> = SharedFormProps<T> & TextFieldProps;

export const FormTextField = <T,>({ controlKey, ...rest }: Props<T>) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={controlKey}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField
            {...field}
            value={field.value ?? ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(!!e.target.value ? e.target.value : null)}
            error={!!error}
            {...rest}
          />
          {error?.message && <ValidationMessage text={error.message} />}
        </>
      )}
    />
  );
};
