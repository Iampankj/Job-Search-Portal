import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PlusSquareOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HomeOutlined,
    UserOutlined,
    PlusOutlined,
    CheckOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link} from 'react-router-dom';



const { Header, Sider, Content } = Layout;

// const App = () => {
//     const [collapsed, setCollapsed] = useState(false);
class DefaultLayout extends React.Component {
    constructor(props){
        super();
        this.state = {
            collapsed:false,
        };
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    
    render(){
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">
                {this.state.collapsed ? (<h1>RJ</h1>): (<h1>RojgarJobs</h1>)}
            </div>
            
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
                <Menu.Item key="/" icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key="/profile" icon={<UserOutlined />}>
                    <Link to='/profile'>Profile</Link>
                </Menu.Item>
                <Menu.Item key="/appliedjobs" icon={<PlusSquareOutlined />}>
                    <Link to='/appliedjobs'>Applied Jobs</Link>
                </Menu.Item>

                <Menu.Item key="/postjob" icon={<PlusOutlined />}>
                    <Link to='/postjob'>Post Job</Link>
                </Menu.Item>

                <Menu.Item key="/posted" icon={<CheckOutlined />}>
                    <Link to='/posted'>Posted</Link>
                </Menu.Item>

                <Menu.Item key="/logout" icon={<LogoutOutlined />}>
                    <Link onClick={this.logout}>Logout</Link>
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {this.props.children}
                </Content>
            </Layout>
        </Layout>
    );
    }
}

export default DefaultLayout