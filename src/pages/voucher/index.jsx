import { useCallback, useMemo, useState } from "react";
import DefaultLayout from "../../components/organisms/default-layout";
import { Button, Input, Table } from "antd";
import useDrawer from "../../stores/useDrawer";
import DrawerForm from "../../components/molecules/drawer-form";

const Voucher = () => {
  const { setIsDrawerFormOpen } = useDrawer((state) => state);

  const [listData, setListData] = useState([
    {
      no: 1,
      code: "VOC001",
      discount: 10,
      expiry: "10 Oktober 2025",
    },
    {
      no: 2,
      code: "VOC001",
      discount: 10,
      expiry: "10 Oktober 2025",
    },
    {
      no: 3,
      code: "VOC001",
      discount: 10,
      expiry: "10 Oktober 2025",
    },
    {
      no: 4,
      code: "VOC001",
      discount: 10,
      expiry: "10 Oktober 2025",
    },
    {
      no: 5,
      code: "VOC001",
      discount: 10,
      expiry: "10 Oktober 2025",
    },
  ]);

  const columns = useMemo(() => {
    const cols = [
      {
        title: "No",
        dataIndex: "no",
        key: "no",
      },
      {
        title: "Voucher Code",
        dataIndex: "code",
        key: "code",
      },
      {
        title: "Discount (%)",
        dataIndex: "discount",
        key: "discount",
      },
      {
        title: "Expiry Date",
        dataIndex: "expiry",
        key: "expiry",
      },
    ];

    return cols;
  }, []);

  const onClickAddVoucher = useCallback(() => {
    setIsDrawerFormOpen();
  }, [setIsDrawerFormOpen]);

  const onClickSave = useCallback(
    (body) => {
      listData.push({
        no: 6,
        ...body,
      });

      setListData(listData);
    },
    [listData]
  );

  return (
    <>
      <DefaultLayout>
        <div className="flex bg-white rounded-lg min-w-[90vw] max-w-[95vw] min-h-[80vh] max-h-[90vh] p-5 flex-col gap-5">
          <div className="flex flex-row justify-between items-center gap-5">
            <Input
              placeholder="Search By Code"
              size="large"
              className="max-w-[200px]"
            />
            <Button type="primary" size="large" onClick={onClickAddVoucher}>
              Add Voucher
            </Button>
          </div>
          <div className="overflow-x-auto">
            <Table dataSource={listData} columns={columns} pagination={false} />
          </div>
        </div>
      </DefaultLayout>
      <DrawerForm saveData={onClickSave} />
    </>
  );
};

export default Voucher;
