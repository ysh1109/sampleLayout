import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { Drawer, Button, Radio, Space,Popover } from 'antd';
import React,{useState,useEffect,useRef} from 'react'

import "antd/dist/antd.css";
import "./index.css";
import Layout from 'antd/lib/layout/layout';
import LumernoreLayout from './LumernoreLayout.js'
import LumernoreResult from './LumernoreResult';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {

  const [visible,setVisible] = useState(false);
  const [placement,setPlacement] = useState('left')
  const [name,setName] = useState('')
  // const [renderCount,setRenderCount] = useState(0)
  const inputRef = useRef()
  const renderCount = useRef(0)
  useEffect(()=>{
    renderCount.current = renderCount.current + 1
  })
   const showDrawer = () => {
   setVisible(true);
   }
   const onClose = () => {
    setVisible(false);
  };
  const focus =()=>{
    // inputRef.current.focus()
    console.log("name ref----->",inputRef.current.value)
    console.log("name----->",name)
  }

  const content = (
    <div>
      <h1>Summary</h1>
    </div>
  )
  return (
    <div>
      {/* <h1>react</h1>
      <input value={name} ref={inputRef} onChange={(e)=> setName(e.target.value)}/>
      <h1> RenderCount : {renderCount.current}</h1> */}
      {/* <Table/> */}
      {/* <button onClick={focus}>Focus</button> */}
      {/* <Popover content={content} title="Title" trigger="hover">
      <div onClick={()=>{showDrawer()}} className="floatingBtn">

  </div>
     </Popover> */}
      {/* <Space>
      <Drawer
          title="Basic Drawer"
          placement={'left'}
          closable={false}
          height={1000}
          onClose={onClose}
          // style={{height:250}}
          visible={visible}
          key={placement}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        </Space> */}
        {/* <LumernoreLayout/> */}
        <LumernoreResult/>
    </div>
  );
}

export default App;
