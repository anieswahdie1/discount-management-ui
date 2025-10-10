import DefaultDrawer from "../../atoms/default-drawer";
import useDrawer from "../../../stores/useDrawer";
import FormInput from "../form-input";
import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { Button } from "antd";
import {
  discRules,
  expiryDateRules,
  voucherCodeRules,
} from "../../../validations/addVoucherRules";
import dayjs from "dayjs";

const DrawerForm = ({ saveData, selectedData }) => {
  const isDrawerFormOpen = useDrawer((state) => state.isDrawerFormOpen);
  const { setIsDrawerFormOpenClose } = useDrawer((state) => state);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: "",
      discount: "",
      expiry: "",
    },
  });

  const onSubmit = useCallback(
    (payload) => {
      const dataToSave = {
        code: payload.code,
        discount: payload.discount,
        expiry: payload.expiry,
      };

      saveData(dataToSave, selectedData);
      setIsDrawerFormOpenClose();
    },
    [saveData, selectedData, setIsDrawerFormOpenClose]
  );

  const handleCancel = useCallback(() => {
    reset();
    setIsDrawerFormOpenClose();
  }, [reset, setIsDrawerFormOpenClose]);

  useEffect(() => {
    if (selectedData) {
      reset({
        code: selectedData.code || "",
        discount: selectedData.discount || "",
        expiry: selectedData.expiry ? dayjs(selectedData?.expiry) : "",
      });
    } else {
      reset({
        code: "",
        discount: "",
        expiry: null,
      });
    }
  }, [reset, selectedData]);

  return (
    <DefaultDrawer
      title={"Input Form"}
      openDrawer={isDrawerFormOpen}
      onCloseDrawer={() => {
        setIsDrawerFormOpenClose();
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <FormInput
            label={"Voucher Code"}
            name={"code"}
            placeholder={"Voucher Code"}
            control={control}
            rules={voucherCodeRules}
            errors={errors.code}
          />
          <FormInput
            label={"Discount Percent"}
            name={"discount"}
            placeholder={"Discount Percent"}
            control={control}
            errors={errors.discount}
            rules={discRules}
          />
          <FormInput
            label={"Expiry Date"}
            name={"expiry"}
            placeholder={"Expiry Date"}
            control={control}
            type="date"
            errors={errors.expiry}
            rules={expiryDateRules}
          />
          <div className="flex flex-row justify-between items-center mt-5">
            <Button
              className="w-[100px]"
              size="large"
              danger
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button className="w-[100px]" size="large" htmlType="submit">
              Save
            </Button>
          </div>
        </div>
      </form>
    </DefaultDrawer>
  );
};

export default DrawerForm;
