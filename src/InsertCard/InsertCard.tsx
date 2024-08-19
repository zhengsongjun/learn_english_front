import { Button, Divider, Form, Input, InputRef, Select, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { getAllType } from "../service/insertCard";
const InsertCard = () => {
  const [typeList, setTypeList] = useState<{ value: string; label: string }[]>(
    [],
  );
  const [addType, setAddType] = useState("");
  const [addTypeState, setAddTypeState] = useState(true);
  const inputRef = useRef<InputRef>(null);
  const addItem = () => {};

  const initType = async () => {
    const result = await getAllType();
    setTypeList(result);
  };

  useEffect(() => {
    initType();
  }, []);

  return (
    <>
      <Form>
        <Form.Item label={"问题"}>
          <Input />
        </Form.Item>
        <Form.Item label={"答案"}>
          <Input />
        </Form.Item>
        <Form.Item label={"选择分类"}>
          <Select
            options={typeList.map((item) => {
              return (
                <>
                  <Select.Option key={item.label}>{item.value}</Select.Option>
                </>
              );
            })}
            dropdownRender={(menu) => {
              return (
                <>
                  {menu}
                  <Divider style={{ margin: "8px 0" }} />
                  <Space style={{ padding: "0 8px 4px" }}>
                    <Input
                      placeholder="Please enter item"
                      ref={inputRef}
                      value={addType}
                      onChange={(e) => {
                        setAddType(e.target.value);
                      }}
                      onKeyDown={(e) => e.stopPropagation()}
                    />
                    <Button
                      type="text"
                      icon={<PlusOutlined />}
                      onClick={addItem}>
                      Add item
                    </Button>
                  </Space>
                </>
              );
            }}></Select>
        </Form.Item>
      </Form>
    </>
  );
};

export default InsertCard;
