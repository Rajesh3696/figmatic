import React, { useEffect } from 'react'
import { Layout, Drawer, Modal } from 'antd'
import './Header.css'

function AppContent(props) {
    const { toggle, treeData } = props
    const { Content } = Layout
    console.log(props)
    // useEffect(() => {

    // }, [toggle])
    return (
        
            <Content>
                <div className="container-fluid col-lg-3" style={{height:100, marginLeft:600, backgroundColor:"darkgray" }}>
                    <h1>hello welcome</h1>
                </div>
            </Content>
        



        //     <Drawer
        //     title="Basic Drawer"
        //     placement="right"
        //     closable={false}
        //     // onClose={onClose}
        //     // visible={visible}
        //     toggle={toggle}
        //   >
        //     <p>Some contents...</p>
        //     <p>Some contents...</p>
        //     <p>Some contents...</p>
        //   </Drawer>

        //     <Modal title="Basic Modal" toggle={toggle} >
        //     <p>Some contents...</p>
        //     <p>Some contents...</p>
        //     <p>Some contents...</p>
        //   </Modal>



    )
}

export default AppContent

