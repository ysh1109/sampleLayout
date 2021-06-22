import React,{useState,useEffect} from 'react'
import './App.css'
import { Drawer, Button, Radio, Space,Popover } from 'antd';

import "antd/dist/antd.css";
import "./index.css";
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const LumernoreLayout=()=> {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
  const [sumVisible,setSumVisible] = useState(false);
  const [atnVisible,setAtnVisible] = useState(false);
  const [placement,setPlacement] = useState('left')
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(()=>{
    
  },[windowDimensions])
  
  const showSumDrawer = () => {
    setSumVisible(true);
    }
    const showAtnDrawer = () => {
        setAtnVisible(true);
        }
    const onClose = () => {
     setAtnVisible(false);
     setSumVisible(false)

   };


    return (
        <div className="App" style={{display:'flex',flexDirection:'column'}}>
            <div style={{height:'6vh',background:'#24292e'}}>
                
            </div>
            <div style={{height:'34vh',background:'red'}}>
              
            </div>
            <div style={{display:'flex',flex:1,height:'60vh'}}>

                {windowDimensions.width>720?<div style={{display:'flex',flex:0.25,height:'50vh',background:'#3f51b5',marginTop:'44vh'}}>

                    </div>:<div onClick={()=>showSumDrawer()} className="btnGreen">
                        <span style={{}}>Summary</span>
                        </div>}

                    <div style={{display:'flex',flex:1,background:'aliceblue',borderColor:'black',borderWidth:5,borderStyle:'solid',justifyContent:'center',alignItems:'center'}}>
                        <h1>Graphs</h1>
                    </div>
                    {windowDimensions.width>720?<div style={{display:'flex',flex:0.25,height:'94vh',background:'#3f51b5'}}>

                    </div>:<div onClick={()=>showAtnDrawer()} className="btnRed">
                         <span>Actions</span>
                             </div>}

{/*                  
                    
                             background: linear-gradient(
45deg
, #aab7ff8c, transparent); */}

{/* background: linear-gradient(
45deg
, #d8e8f9, transparent); */}

            </div>

            <Space>
            <Drawer
                title="Action Drawer"
                placement={'right'}
                closable={false}
                height={1000}
                onClose={onClose}
                // style={{height:250}}
                visible={atnVisible}
                key={placement}
                >
                <p>Analytics</p>
                <p>Recent Searches.</p>
                <p>Trending</p>
                </Drawer>
        </Space>
        <Space>
            <Drawer
                title="Summary Drawer"
                placement={'left'}
                closable={false}
                height={1000}
                onClose={onClose}
                // style={{height:250}}
                visible={sumVisible}
                key={placement}
                >
                <p>Summary</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                </Drawer>
        </Space>
        </div>
    )
}

export default LumernoreLayout
