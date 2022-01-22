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
import {
  addDoc,
  collection,
  doc,
  increment,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./api";
import { async } from "@firebase/util";
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
  const columns = [
    {
      title: "주차수",
      dataIndex: "week",
      key: "1",
    },
    {
      title: "발표",
      dataIndex: "pt",
      key: "2",
    },
    {
      title: "문제해결",
      dataIndex: "solve",
      key: "3",
    },
    {
      title: "날짜",
      dataIndex: "date",
      key: "4",
    },
    {
      title: "발표설명",
      dataIndex: "발표 설명",
      key: "5",
    },
    {
      title: "문제설명",
      dataIndex: "문제 설명",
      key: "6",
    },
  ];
  const [point, setpoint] = useState(false);
  const [each, setEach] = useState([]);
  const [nanWeek, setNanWeek] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const Each = onSnapshot(collection(db, props.name), (snapshot) => {
      const EachArray = snapshot.docs.map((doc) => ({
        week: doc.id,
        ...doc.data(),
      }));
      setEach(EachArray);
    });
  }, [point,props.name]);
  const ForEach = async (name, week, cat, date, input) => {
    const eachWeek = doc(db, name, week);
    if (cat === "발표") {
      try {
        await updateDoc(eachWeek, {
          pt: 1,
          date,
          "발표 설명": input,
        });
      } catch (error) {
        await setDoc(eachWeek, {
          pt: 1,
          date,
          "발표 설명": input,
        });
      }
    } else if (cat === "문제해결") {
      try {
        await updateDoc(eachWeek, {
          solve: 1,
          date,
          "문제 설명": input,
        });
      } catch (error) {
        await setDoc(eachWeek, {
          solve: 1,
          date,
          "문제 설명": input,
        });
      }
    }
  };
  const ForTotal = async (name, cat, whatWeek) => {
    const total = doc(db, "Total", name);
    setDoc(total, { merge: true });
    if (cat === "발표") {
      await updateDoc(total, {
        pt: increment(1),
        solve: 0,
        total: increment(1),
        week: whatWeek,
      });
    } else if (cat === "문제해결") {
      await updateDoc(total, {
        pt: 0,
        solve: increment(1),
        total: increment(1),
        week: whatWeek,
      });
    }
  };
  const dataSource = [];
  for (let i = 0; i < 8; i++) {
    dataSource.push({
      key: i,
      ...each[i],
    });
  }
  return (
    <div>
      <Button
        type="primary"
        onClick={() => setpoint(true)}
        style={{ marginBottom: "30px" }}
      >
        포인트 추가하기
      </Button>
      <Table dataSource={each} columns={columns}></Table>
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
            <Cascader
              options={weekAndContent}
              onChange={(value) => {
                setNanWeek(value[0]);
                setCategory(value[1]);
              }}
            />
          </Form.Item>
          <Form.Item label="날짜 선택">
            <DatePicker
              onChange={(value) => setDate(value.format("YY-MM-DD"))}
            />
          </Form.Item>
          <Form.Item label="Input">
            <Input onChange={(e) => setInput(e.target.value)} />
          </Form.Item>
          <Form.Item label=":">
            <Button
              type="primary"
             
              onClick={() => {
                ForEach(props.name, nanWeek, category, date, input);
                ForTotal(props.name, category, nanWeek);
                alert("제출되었습니다");
                setpoint(false);
              }}
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
