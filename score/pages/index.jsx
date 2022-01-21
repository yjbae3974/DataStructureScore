import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  BarChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import {app, analytics} from '../components/api';
import { collection, addDoc, setDoc } from "firebase/firestore";
import Main from "../components/Main";
import Name from "../components/Name";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
`;

export default function Home() {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapse, setCollapse] = useState(false);
  const [selectedKey, setselectedKey] = useState("main");
  const [name,setName] = useState("Main");
  const Names = ['배연준','조유림','김현빈','신우현','엄지혜','윤재원','이기훈','이영일','이용준','정경근','정재윤','최민재','황현호','나두환','박병민','심하민','최민영']
  useEffect(() => {
    console.log(name,selectedKey);
  
    
  }, [name]);
  // await setDoc(doc(db, "cities", "LA"), {
  //   name: "Los Angeles",
  //   state: "CA",
  //   country: "USA"
  // });
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapse} onCollapse={()=>setCollapse(!collapse)}>
          <img style={{width: '80px'}} className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png"/>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<BarChartOutlined />} onClick={()=>{setselectedKey("main");setName("Main")}}>
              Table 
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              {
                Names.map((a,i)=>{
                  return (
                    <Menu.Item key={i+2} onClick={()=>{setselectedKey("name");setName(a)}}>{a}</Menu.Item>
                  )
                })
              }
              <Menu.Item key="20" onClick={()=>{setselectedKey("name");setName("test")}}>test</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {
                name === "Main"
                ?<Breadcrumb.Item>Main</Breadcrumb.Item>
                :<><Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>{name}</Breadcrumb.Item></>
              }
              
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* {
                {
                  "main":<div>1</div>,
                  'name':<Name name ={name}></Name>,
                }[{selectedKey}]
              } */}
              {
                selectedKey == "main"
                ?<Main></Main>
                :<Name name={name}></Name>
              }
            </div>
            
          </Content>
          <Footer style={{ textAlign: "center" }}>
            DataStructure Chart Created by 배연준 in 2022.
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
