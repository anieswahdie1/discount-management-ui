import { Input } from "antd";
import { Controller } from "react-hook-form";

const FormInput = ({
  name,
  control,
  rules,
  placeholder,
  label,
  type = "text",
  errors,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="font-semibold">{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              {...field}
              size="large"
              placeholder={placeholder}
              status={errors ? "error" : ""}
            />
          ) : (
            <Input
              {...field}
              size="large"
              placeholder={placeholder}
              status={errors ? "error" : ""}
            />
          )
        }
      />
      {errors && (
        <span className="text-red-500 text-xs mt-1">{errors.message}</span>
      )}
    </div>
  );
};

export default FormInput;
