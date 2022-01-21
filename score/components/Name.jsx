import React, { useEffect, useState } from "react";
import {
  Table,
  Form,
  Button,
  Input,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./api";
export default function Name(props) {
  const weekAndContent = [
    {
      value: "1주차",
      label: "1주차",
      children: [
        {
          value: "발표",
          label: "발표",
        },
        {
          value: "문제해결",
          label: "문제해결",
        },
      ],
    },
    {
      value: "2주차",
      label: "2주차",
      children: [
        {
          value: "발표",
          label: "발표",
        },
        {
          value: "문제해결",
          label: "문제해결",
        },
      ],
    },
    {
      value: "3주차",
      label: "3주차",
      children: [
        {
          value: "발표",
          label: "발표",
        },
        {
          value: "문제해결",
          label: "문제해결",
        },
      ],
    },
    {
      value: "4주차",
      label: "4주차",
      children: [
        {
          value: "발표",
          label: "발표",
        },
        {
          value: "문제해결",
          label: "문제해결",
        },
      ],
    },
    {
      value: "5주차",
      label: "5주차",
      children: [
        {
          value: "발표",
          label: "발표",
        },
        {
          value: "문제해결",
          label: "문제해결",
        },
      ],
    },
    {
      value: "6주차",
      label: "6주차",
      children: [
        {
          value: "발표",
          label: "발표",
        },
        {
          value: "문제해결",
          label: "문제해결",
        },
      ],
    },
    {
      value: "7주차",
      label: "7주차",
      children: [
        {
          value: "발표",
          label: "발표",
        },
        {
          value: "문제해결",
          label: "문제해결",
        },
      ],
    },
    {
      value: "8주차",
      label: "8주차",
      children: [
        {
          value: "발표",
          label: "발표",
        },
        {
          value: "문제해결",
          label: "문제해결",
        },
      ],
    },
  ];
  const [point, setpoint] = useState(false);
  const Finished = async (name, week, cat) => {
    //name에 이름 받아와주고, week에 주차 받아오고, cat에 발표인지 문제해결인지 받아주세요~
    const presentation = doc(db, name, "pt");
    const solve = doc(db, name, "solve");
    if (cat === "발표") {
      //발표면 pt라는 doc에 n주차 1 뜨게끔 했습니다.
      await updateDoc(presentation, {
        week: 1,
      });
    } else if (cat === "문제 해결") {
      //문제 해결이면 solve라는 doc에 n주차 1 뜨게끔 했습니다.
      await updateDoc(solve, {
        week: 1,
      });
    }
  };
  useEffect(() => {}, []);
  return (
    <div>
      <Button
        type="primary"
        onClick={() => setpoint(true)}
        style={{ marginBottom: "30px" }}
      >
        포인트 추가하기
      </Button>
      <Table></Table>
      {point ? (
        <Form
          style={{ marginTop: "30px" }}
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 10,
          }}
          layout="small"
          initialValues={{
            size: "large",
          }}
          size="large"
        >
          <Form.Item label="주차/내용 선택">
            <Cascader options={weekAndContent} />
          </Form.Item>
          <Form.Item label="날짜 선택">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Input">
            <Input />
          </Form.Item>
          <Form.Item label=":">
            <Button
              type="primary"
              onClick={() => {
                alert("제출되었습니다");
                setpoint(false);
              }}
              // onClick={() => Finished(props.name, week, cat)}
              // name은 props에서 받아왔고 form 입력값에 따라 weekt, category(문제/발표) 받아서 값 넣어주세요!
            >
              제출
            </Button>
          </Form.Item>
        </Form>
      ) : (
        ""
      )}
    </div>
  );
}
