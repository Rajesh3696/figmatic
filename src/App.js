import AppHeader from './Header';
import {Layout} from 'antd'
 import 'antd/dist/antd.css';
 import Leftpanel from './Leftpanel'
 import AppContent from './AppContent'


function App() {
  const {Header} =Layout
  return (
      <Layout className="layout" style={{color:"blueviolet",backgroundColor:"cadetblue"}} >
        <AppHeader/> 
        {/* <Leftpanel/> */}
        {/* <AppContent/> */}
      </Layout> 
  );
}

export default App;
