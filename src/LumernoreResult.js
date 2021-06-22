import './LumernoreResult.css'
import React,{useState,useEffect} from 'react'
import { Drawer, Button, Radio, Space,Popover,Menu,Dropdown } from 'antd';
import Aos from 'aos'
import report from './report1.png'
import more from './more.svg'
import star from './star.png';
import expand from './expand.svg';
import envelop from './envelope.svg';
import download from './down-arrow.png'
import './App.css'
import 'aos/dist/aos.css'
import "antd/dist/antd.css";
import "./index.css";
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

function LumernoreResult() {

    
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    },[])

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
    const [sumVisible,setSumVisible] = useState(false);
    const [atnVisible,setAtnVisible] = useState(false);
    const [visible,setVisible] = useState(false)
    const [placement,setPlacement] = useState('left')
    const [openAnalytics,setOpenAnalytics] = useState(true)
    const [openAnalyticsRight,setOpenAnalyticsRight] = useState(true)
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
     const Dropdown = () => (
       <div className="dropdown">
           <div style={{display:'flex'}} >
           <img src={download} height={20} width={20}/>
            <span style={{marginLeft:10}}>
              Download
            </span>
           </div>
            <div style={{marginTop:5,display:'flex'}}>
           <img src={expand} height={20} width={20} style={{fill:'black'}}/>
           <span target="_blank" style={{marginLeft:10}}>
              Expand
            </span>
           </div>
           <div style={{marginTop:5,display:'flex'}}>
           <img src={envelop} height={20} width={20}/>
           <span target="_blank" style={{marginLeft:10}}>
              E-mail
            </span>
           </div>
           <div style={{marginTop:5,display:'flex'}}>
           <img src={star} height={20} width={20}/>
           <span target="_blank" style={{marginLeft:10}}>
              Favorite
            </span>
           </div>

         
       </div>
     )
     const hide = () => {
         setVisible(false)
     }

     const handleVisibleChange = visible => {
        setVisible( visible );
      };

      const menu = (
        <Menu>
          <Menu.Item style={{display:'flex'}}>
              <img src={report} height={20} width={20}/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          </Menu.Item>
        </Menu>
      );
    return (
        <div  className="mainContainer">
            <div  style={{height:'6vh',background:'#3F51B5'}}>

            </div>
            <div style={{display:'flex',height:'94vh'}}>
                <div style={{flex:1,height:'100%'}}>
                    <div  style={{height:'24vh'}}>
                            <div style={{height:'10vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <div className="box" style={{height:50,background:'white',width:'98%',borderRadius:20}}>

                                </div>
                            </div>
                            <div style={{height:'5vh',display:'flex',justifyContent:'space-between',alignItems:'center',width:'95%',margin:'auto'}}>
                                <h2>some random text</h2>
                                <button style={{background:'#3F51B5',padding:5,borderRadius:5,color:'white'}}>Help</button>
                            </div>
                            <div className="box" style={{height:'7vh',display:'flex',justifyContent:'space-between',alignItems:'center',background:'#3F51B5',width:'98%',borderRadius:5,margin:'auto',marginTop:5}}>
                                <h3 style={{color:'white',fontWeight:'700',marginLeft:5}}>Anny sql command</h3>
                                {/* <h3 style={{color:'white',fontWeight:'700',marginRight:5}}>ICON ICON ICON ICON</h3> */}
                                  <Popover
                                    content={Dropdown
                                    }
                                    // title="Title"
                                    trigger="click"
                                    placement="bottomRight"
                                    visible={visible}
                                    onVisibleChange={()=>handleVisibleChange()}
                                  >
                              <img src={more} height={25} width={25} style={{marginRight:10}}/>

                            </Popover>
                                {/* <Dropdown overlay={menu}>
                                
                                </Dropdown> */}
                            </div>
                    </div>
                    <div  style={{height:'70vh',display:'flex'}}>
                      {windowDimensions.width>720?<Popover
                    content={<div style={{height:'40vh',width:'20vw'}}><a onClick={()=>hide()}>Close</a></div>}
                    title="Summary"
                    placement="topLeft"
                    trigger="click"
                    visible={visible}
                    onVisibleChange={()=>handleVisibleChange()}
                    >
                  <div className="box" style={{height:50,width:50,position:'absolute',bottom:'5vh',borderTopRightRadius:5,borderBottomRightRadius:5,borderRadius:'50%',
                  borderColor:'transparent',borderStyle:'solid',background:'#3F51B5',borderWidth:0.5,display:'flex',
                  justifyContent:'center',alignItems:'center',left:'5vh'}}>
                        <img  style={{color:'white',alignSelf:'center'}} src={report} height={25} width={25} color={'white'} />
                  </div>
                  </Popover>:<div onClick={()=>showSumDrawer()} className="btnGreen" style={{zIndex:5}}>
                            <span style={{fontWeight:'700',color:'white'}}>Summary</span>
                        </div>}
{/* 
                        {windowDimensions.width>720?<div style={{height:'70vh',flex:0.25,padding:10,display:'block'}}>
                            <div className="box" style={{background:'#233044',height:'100%',}}>
                                <h1 style={{textAlign:'center',color:'white',fontSize:'1.25rem'}}>summary</h1>
                            </div>
                        </div>:<div onClick={()=>showSumDrawer()} className="btnGreen" style={{zIndex:5}}>
                            <span style={{fontWeight:'700',color:'white'}}>Summary</span>
                        </div>} */}
{/* 
                        {windowDimensions.width>720?<div style={{height:'70vh',flex:0.25,padding:10,display:openAnalytics?'block':'none'}}>
                            <div className="box" style={{background:'#233044',height:'100%',}}>
                                <h1 style={{textAlign:'center',color:'white',fontSize:'1.25rem'}}>summary</h1>
                                <button onClick={()=>setOpenAnalytics(false)}>Close</button>
                            </div>
                        </div>:<div onClick={()=>showSumDrawer()} className="btnGreen" style={{zIndex:5}}>
                            <span style={{fontWeight:'700',color:'white'}}>Summary</span>
                        </div>} */}

                        
                        <div  style={{height:'70vh',flex:1,padding:10}}>
                             <div className="box" style={{background:'white',height:'100%',display:'flex',justifyContent:'center'}}>
                                    <h1 style={{alignSelf:'center'}}>Graphs</h1>
                            </div>
                        </div>

                    </div>
                </div>


                {/* //anaytics */}
                {windowDimensions.width>720? <div  style={{flex:0.25,height:'100%',padding:10,display:openAnalyticsRight?'block':'none'}}>
                     <div className="box" style={{background:'#233044',height:'100%',}}>
                        <h1 style={{textAlign:'center',color:'white'}}>analytics</h1>
                        <button onClick={()=>setOpenAnalyticsRight(false)}>Close</button>
                    </div>
                </div>:<div onClick={()=>showAtnDrawer()} className="btnRed">
                     <span style={{fontWeight:'700',color:'white'}}>Actions</span>
                  </div>}

                  {windowDimensions.width>720?
                  <div onClick={()=>setOpenAnalyticsRight(true)} className="box" style={{height:50,width:50,position:'absolute',bottom:'5vh',borderTopRightRadius:5,borderBottomRightRadius:5,borderRadius:'50%',
                  borderColor:'transparent',borderStyle:'solid',background:'#3F51B5',borderWidth:0.5,display:openAnalyticsRight?'none':'flex',
                  justifyContent:'center',alignItems:'center',right:'5vh'}}>
                        <img  style={{color:'white',alignSelf:'center'}} src={report} height={25} width={25} color={'white'} />
                  </div>:<></>}        





                  {/* {windowDimensions.width>720?<Popover
                    content={<div style={{height:'40vh',width:'20vw'}}><a onClick={()=>hide()}>Close</a></div>}
                    title="Summary"
                    placement="topLeft"
                    trigger="click"
                    visible={visible}
                    onVisibleChange={()=>handleVisibleChange()}
                    >
                  <div className="box" style={{height:50,width:50,position:'absolute',bottom:'5vh',borderTopRightRadius:5,borderBottomRightRadius:5,borderRadius:'50%',
                  borderColor:'transparent',borderStyle:'solid',background:'#3F51B5',borderWidth:0.5,display:'flex',
                  justifyContent:'center',alignItems:'center',left:'5vh'}}>
                        <img  style={{color:'white',alignSelf:'center',background:'white'}} src={report} height={25} width={25} color={'white'} />
                  </div>
                  </Popover>:<></>} */}

                  {windowDimensions.width>720?
                  <div onClick={()=>setOpenAnalytics(true)} className="box" style={{height:50,width:50,position:'absolute',bottom:'5vh',borderTopRightRadius:5,borderBottomRightRadius:5,borderRadius:'50%',
                  borderColor:'transparent',borderStyle:'solid',background:'#3F51B5',borderWidth:0.5,display:openAnalytics?'none':'flex',
                  justifyContent:'center',alignItems:'center',left:'5vh'}}>
                        <img  style={{color:'white',alignSelf:'center',background:'white'}} src={report} height={25} width={25} color={'white'} />
                  </div>:<></>}
               
            </div>
            <Space>
            <Drawer
                title="Action Drawer"
                placement={'right'}
                closable={false}
                height={1000}
                onClose={onClose}
                drawerStyle={{backgroundColor:'#233044'}}
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
                drawerStyle={{backgroundColor:'#233044'}}
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

export default LumernoreResult
