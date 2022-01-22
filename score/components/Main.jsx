import React, { useEffect, useState } from "react";
import { Table } from "antd";
import styled from "styled-components";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./api";

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
      dataIndex: "firstTot",
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
  const [bae, setBae] = useState([]);
  const [shim, setShim] = useState([]);
  const [each, setEach] = useState([]);
  useEffect(() => {
    // const total = onSnapshot(collection(db, "Total"), (snapshot) => {
    //   const totalArray = snapshot.docs.map((doc) => ({
    //     name: doc.id,
    //     ...doc.data(),
    //   }));
    //   setArray(totalArray);
    // });
    const bae = onSnapshot(collection(db, "배연준"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      setBae(data);
    });
    const shim = onSnapshot(collection(db, "심하민"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      setShim(data);
    });
  }, []);
  console.log("배연준 : ");
  console.log(bae);
  console.log("심하민 : ");
  console.log(shim);
  return (
    <Container>
      <Table dataSource={dataSource} columns={columns}></Table>
    </Container>
  );
}
