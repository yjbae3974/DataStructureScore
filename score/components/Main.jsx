import React from "react";
import { Table } from "antd";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
`;

export default function Main() {

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      first: "3",
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "이름",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "1주차",
      dataIndex: "first",
      key: "fistweek",
    },
    {
      title: "2주차",
      dataIndex: "2",
      key: "2ndweek",
    },
    {
        title: "3주차",
        dataIndex: "2ndweek",
        key: "2ndweek",
      },
      {
        title: "4주차",
        dataIndex: "2ndweek",
        key: "2ndweek",
      },
      {
        title: "5주차",
        dataIndex: "2ndweek",
        key: "2ndweek",
      },
      {
        title: "6주차",
        dataIndex: "2ndweek",
        key: "2ndweek",
      },
      {
        title: "7주차",
        dataIndex: "2ndweek",
        key: "2ndweek",
      },
      {
        title: "8주차",
        dataIndex: "2ndweek",
        key: "2ndweek",
      },
  ];

  return (
    <Container>
      <Table dataSource={dataSource} columns={columns}></Table>
    </Container>
  );
}
