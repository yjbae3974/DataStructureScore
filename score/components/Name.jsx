import React, { useState } from "react";
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
export default function Name() {
    const weekAndContent = [
        {
          value: '1주차',
          label: '1주차',
          children: [
            {
              value: '발표',
              label: '발표',
            },
            {
                value: '문제해결',
                label: '문제해결'
            }
          ],
        },
        {
            value: '2주차',
            label: '2주차',
            children: [
              {
                value: '발표',
                label: '발표',
              },
              {
                  value: '문제해결',
                  label: '문제해결'
              }
            ],
          },
          {
            value: '3주차',
            label: '3주차',
            children: [
              {
                value: '발표',
                label: '발표',
              },
              {
                  value: '문제해결',
                  label: '문제해결'
              }
            ],
          },
          {
            value: '4주차',
            label: '4주차',
            children: [
              {
                value: '발표',
                label: '발표',
              },
              {
                  value: '문제해결',
                  label: '문제해결'
              }
            ],
          },
          {
            value: '5주차',
            label: '5주차',
            children: [
              {
                value: '발표',
                label: '발표',
              },
              {
                  value: '문제해결',
                  label: '문제해결'
              }
            ],
          },
          {
            value: '6주차',
            label: '6주차',
            children: [
              {
                value: '발표',
                label: '발표',
              },
              {
                  value: '문제해결',
                  label: '문제해결'
              }
            ],
          },
          {
            value: '7주차',
            label: '7주차',
            children: [
              {
                value: '발표',
                label: '발표',
              },
              {
                  value: '문제해결',
                  label: '문제해결'
              }
            ],
          },
          {
            value: '8주차',
            label: '8주차',
            children: [
              {
                value: '발표',
                label: '발표',
              },
              {
                  value: '문제해결',
                  label: '문제해결'
              }
            ],
          },
      ]
  const [point, setpoint] = useState(false);
  return (
    <div>
      <Button type="primary" onClick={() => setpoint(true)} style={{marginBottom: '30px'}}>
        포인트 추가하기
      </Button>
      <Table></Table>
      {point ? <Form
      style={{marginTop: '30px'}}
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
        />
      </Form.Item>
      <Form.Item label="날짜 선택">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label=":">
        <Button type="primary" onClick={()=>{alert("제출되었습니다");setpoint(false)}}>제출</Button>
      </Form.Item>
    </Form> : ""}
    </div>
  );
        }
