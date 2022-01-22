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
  const [point, setpoint] = useState(false);
  const [each, setEach] = useState([]);
  const [nanWeek, setNanWeek] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    const Each = onSnapshot(collection(db, props.name), (snapshot) => {
      const EachArray = snapshot.docs.map((doc) => ({
        week: doc.id,
        ...doc.data(),
      }));
      setEach(EachArray);
    });
  }, [props.name]);
  useEffect(() => {
    console.log(nanWeek, category);
  });
  console.log(each);
  const ForEach = async (name, week, cat) => {
    const eachWeek = doc(db, name, week);
    console.log(name, week, cat);
    if (cat === "발표") {
      try {
        await updateDoc(eachWeek, {
          pt: 1,
        });
        console.log(`${name}'s pt point updated!`);
      } catch (error) {
        await setDoc(eachWeek, {
          pt: 1,
        });
        console.log(`${name}'s pt point created!`);
      }
    } else if (cat === "문제 해결") {
      try {
        await updateDoc(eachWeek, {
          solve: 1,
        });
        console.log(`${name}'s solve point updated!`);
      } catch (error) {
        await setDoc(eachWeek, {
          solve: 1,
        });
        console.log(`${name}'s solve point created!`);
      }
    }
  };
  const ForTotal = async (name, cat, point) => {
    const total = doc(db, "Total", name);
    if (cat === "발표") {
      await updateDoc(total, {
        pt: increment(1),
        solve: 0,
        total: increment(1),
      });
    } else if (cat === "문제 해결") {
      await updateDoc(total, {
        pt: 0,
        solve: increment(1),
        total: increment(1),
      });
    }
  };

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
            <Cascader
              options={weekAndContent}
              onChange={(value) => {
                setNanWeek(value[0]);
                setCategory(value[1]);
              }}
            />
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
              // onClick={() => {
              //   alert("제출되었습니다");
              //   setpoint(false);
              // }}
              onClick={() => {
                ForEach(props.name, "6주차", "문제 해결");
                // ForTotal(props.name, "발표");
              }}
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
