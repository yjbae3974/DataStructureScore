import React, { useEffect, useState } from "react";
import { Table } from "antd";
import styled from "styled-components";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./api";

const Container = styled.div`

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
      dataIndex: "0",
      key: "name",
    },
    {
      title: "1주차",
      dataIndex: "1",
      key: "fistweek",
    },
    {
      title: "2주차",
      dataIndex: "2",
      key: "2ndweek",
    },
    {
      title: "3주차",
      dataIndex: "3",
      key: "2ndweek",
    },
    {
      title: "4주차",
      dataIndex: "4",
      key: "2ndweek",
    },
    {
      title: "5주차",
      dataIndex: "5",
      key: "2ndweek",
    },
    {
      title: "6주차",
      dataIndex: "6",
      key: "2ndweek",
    },
    {
      title: "7주차",
      dataIndex: "7",
      key: "2ndweek",
    },
    {
      title: "8주차",
      dataIndex: "8",
      key: "2ndweek",
    },
    {
      title:"합계",
      dataIndex: "sum",
      key: "9"
    }
  ];
  const [bae, setBae] = useState([]);
  const [urim, setUrim] = useState([]);
  const [kim, setKim] = useState([]);
  const [shin, setShin] = useState([]);
  const [um, setUm] = useState([]);
  const [yuen, setYuen] = useState([]);
  const [kihun, setKihun] = useState([]);
  const [zero, setZero] = useState([]);
  const [yong, setYong] = useState([]);
  const [kyungkeun, setKyunKeun] = useState([]);
  const [jayun, setJayun] = useState([]);
  const [minjae, setMinjae] = useState([]);
  const [hwang, setHwang] = useState([]);
  const [na, setNa] = useState([]);
  const [park, setPark] = useState([]);
  const [minyoung, setMinyoung] = useState([]);
  const [shim, setShim] = useState([]);
  const finSource = [
    bae,
    urim,
    kim,
    shin,
    um,
    yuen,
    kihun,
    zero,
    yong,
    kyungkeun,
    jayun,
    minjae,
    hwang,
    na,
    park,
    minyoung,
    shim
  ]
  finSource.map((a,i)=>{
    let count = 0;
    a.map((a,i)=>{
      if( i > 0){
        count +=parseInt(a);
      }
      
    })
    a.sum = count;
  })
  useEffect(() => {
    onSnapshot(collection(db, "배연준"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["배연준", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setBae(targetData);
    });
    onSnapshot(collection(db, "조유림"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["조유림", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setUrim(targetData);
    });
    onSnapshot(collection(db, "김현빈"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["김현빈", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setKim(targetData);
    });
    onSnapshot(collection(db, "신우현"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["신우현", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setShin(targetData);
    });
    onSnapshot(collection(db, "엄지혜"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["엄지혜", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setUm(targetData);
    });
    onSnapshot(collection(db, "윤재원"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["윤재원", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setYuen(targetData);
    });
    onSnapshot(collection(db, "이기훈"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["이기훈", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setKihun(targetData);
    });
    onSnapshot(collection(db, "이영일"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["이영일", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setZero(targetData);
    });
    onSnapshot(collection(db, "이용준"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["이용준", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setYong(targetData);
    });
    onSnapshot(collection(db, "정경근"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["정경근", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setKyunKeun(targetData);
    });
    onSnapshot(collection(db, "정재윤"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["정재윤", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setJayun(targetData);
    });
    onSnapshot(collection(db, "최민재"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["최민재", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setMinjae(targetData);
    });
    onSnapshot(collection(db, "황현호"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["황현호", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setHwang(targetData);
    });
    onSnapshot(collection(db, "나두환"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["나두환", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setNa(targetData);
    });
    onSnapshot(collection(db, "박병민"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["박병민", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setPark(targetData);
    });
    onSnapshot(collection(db, "심하민"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["심하민", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setShim(targetData);
    });
    onSnapshot(collection(db, "최민영"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        name: doc.id,
        ...doc.data(),
      }));
      const targetData = ["최민영", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      data.forEach((target) => {
        let cnt = 0;
        let week = +target.name[0];
        if (target.pt) cnt++;
        if (target.solve) cnt++;
        targetData[week] = cnt;
      });
      // console.log(targetData);
      setMinyoung(targetData);
    });
  }, []);
  console.log(bae);
  console.log(urim);
  console.log();
  return (
    <Container>
      <Table dataSource={finSource} columns={columns}></Table>
    </Container>
  );
}
