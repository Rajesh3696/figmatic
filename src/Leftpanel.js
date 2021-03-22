import React, { useState,useEffect } from 'react'
import { Tree, Typography, Layout } from 'antd';
import { HomeFilled, FolderFilled } from '@ant-design/icons';
 import AppContent from './AppContent'


function Leftpanel(props) {
    const [toggle, setToggle] = useState(false)
    // const [title,setitle]=useState()
    const { DirectoryTree } = Tree;
    const { Title } = Typography
    const { Sider } = Layout

    const handleClick = () => {
        setToggle(!toggle)
        
        // console.log(!toggle)
    };
    
    const treeData = [
        {
            title: 'Tasks',
            key: '0-0',
            children: [
                {
                    title: 'Marketing', key: '0-1',
                    children: [
                        {
                            title: 'Awesome Website',
                            key: '0-0-0',
                            children: [
                                { title: 'ContactForm' , key:'0-0-1'}
                            ]
                        },
                        {
                            title: 'Social Media Assests', key: '0-2',
                            children: [
                                {
                                    title: "files"  , key:'0-2-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'budget Approval',
                    key: '0-3',
                    children: [{
                        title: "files",key:'0-3-1'
                    }]
                }

            ]
        }
    ]
    return (
        <div >
            <div className="row">
                <HomeFilled style={{ color: "darkcyan", marginLeft: 30, marginTop: 30, fontSize: 20 }} />
                <Title level={2} style={{ color: "darkblue", marginTop: 20 }}>/Documents</Title>
            </div>
            <Tree
                 multiple
                 defaultExpandall
                onClick={handleClick}
                treeData={treeData}
                style={{ marginTop: 20, color: "darkblue" }}
            />
            
            {toggle&&(<AppContent toggle={toggle} treeData={treeData}/>)} 
           
           
        </div >
    )
}

export default Leftpanel
