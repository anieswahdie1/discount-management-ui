import { useCallback, useEffect, useMemo, useState } from "react";
import DefaultLayout from "../../components/organisms/default-layout";
import { Button, Input, Table } from "antd";
import useDrawer from "../../stores/useDrawer";
import DrawerForm from "../../components/molecules/drawer-form";
import voucherApi from "../../apis/voucher.api";
import { useNavigate } from "react-router-dom";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalConfirmation from "../../components/atoms/modals";

const Voucher = () => {
  const navigate = useNavigate();

  const { setIsDrawerFormOpen } = useDrawer((state) => state);

  const [listData, setListData] = useState([]);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(null);

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
      {
        title: "Aksi",
        dataIndex: "aksi",
        key: "aksi",
        fixed: "right",
        render: (aksi) => aksi,
      },
    ];

    return cols;
  }, []);

  const getList = useCallback(async (updatedData) => {
    if (updatedData) {
      setListData((prev) => [...prev, ...updatedData]);
      return;
    }

    const { success, data } = await voucherApi.getListVoucher();

    if (success) {
      setListData(data?.vouchers);
      return;
    }
    setListData([]);
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

  const onClickAddVoucher = useCallback(() => {
    setIsDrawerFormOpen();
  }, [setIsDrawerFormOpen]);

  const onClickSave = useCallback(
    async (body) => {
      const payload = {
        code: body?.code,
        discount: Number(body?.discount),
        expiry: body?.expiry.format("YYYY-MM-DD"),
      };

      const { success, data } = await voucherApi.addNewVoucher(payload);
      if (success) {
        navigate("/voucher");
        getList(data);
        return;
      }
    },
    [getList, navigate]
  );

  const onClickDelete = useCallback((el) => {
    setIdDelete(el?.id);
    setIsModalDelete(true);
  }, []);

  const actionDeleteData = useCallback(async () => {
    const { success, data } = await voucherApi.deleteVoucher(idDelete);

    console.log("data: ", data);

    if (success) {
      setIsModalDelete(false);
      setIdDelete(null);
      getList();
      return;
    }
    return;
  }, [getList, idDelete]);

  const dataSource = useMemo(() => {
    if (listData.length === 0) return [];

    const list = listData.map((el, idx) => {
      return {
        no: idx + 1,
        code: el?.code,
        discount: el?.discount,
        expiry: el?.expiry,
        aksi: (
          <div className="flex flex-row gap-1">
            <FontAwesomeIcon
              icon={faEdit}
              color="#2e5b36"
              className="cursor-pointer"
              onClick={() => {
                console.log(el);
              }}
            />

            <FontAwesomeIcon
              icon={faTrash}
              color="red"
              className="cursor-pointer"
              onClick={() => {
                onClickDelete(el);
              }}
            />

            <FontAwesomeIcon
              icon={faEye}
              color="#2e5b36"
              className="cursor-pointer"
              // onClick={() => {
              //   actionOpenModalViewDetail(el);
              // }}
            />
          </div>
        ),
      };
    });
    return list;
  }, [listData, onClickDelete]);

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
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </DefaultLayout>
      <DrawerForm saveData={onClickSave} />
      <ModalConfirmation
        openModal={isModalDelete}
        actionCancel={() => {
          setIsModalDelete(false);
          setIdDelete(null);
        }}
        actionOk={actionDeleteData}
        title={"Konfirmasi Hapus Data"}
        text={"Apakah Anda yakin akan menghapus data ini?"}
      />
    </>
  );
};

export default Voucher;
