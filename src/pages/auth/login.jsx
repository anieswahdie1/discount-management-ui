import { Button } from "antd";
import { useForm } from "react-hook-form";
import LayoutLogin from "../../components/atoms/layouts/layout-login";
import FormInput from "../../components/molecules/form-input";
import { useCallback, useState } from "react";
import { emailRules, passwordRules } from "../../validations/authRules";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loadingBtn, setLoadingBtn] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    (payload) => {
      console.log("payload: ", payload);
      setLoadingBtn(true);
      navigate("/voucher");
    },
    [navigate]
  );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <LayoutLogin>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-semibold">Masuk</span>
            <div className="flex flex-col gap-2">
              <FormInput
                label="Email"
                name="email"
                control={control}
                rules={emailRules}
                placeholder="Masukkan email Anda"
                errors={errors.email}
              />
            </div>
            <div className="flex flex-col gap-2">
              <FormInput
                label="Password"
                name="password"
                control={control}
                rules={passwordRules}
                placeholder="Masukkan password Anda"
                type="password"
                errors={errors.password}
              />
            </div>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              loading={loadingBtn}
            >
              Masuk
            </Button>
          </div>
        </form>
      </LayoutLogin>
    </div>
  );
};

export default Login;
