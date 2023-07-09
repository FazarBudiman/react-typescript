import { Button, Card, Space, Typography } from "antd";
import Navbar from "../components/Navbar"
import Footbar from "../components/Footbar";
import { useNavigate } from "react-router-dom";

const {Text, Title} = Typography

interface HomeProps {
    
}
 
const Home: React.FunctionComponent<HomeProps> = () => {
    const navigate = useNavigate()
    return ( 
        <>
            <Navbar />
            <div
            style={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                justifyContent: 'center', 
                height: '98vh', 
                marginTop: -50,
            }}>
                <Title level={1} style={{fontSize: 80}}>Ruangguru</Title>
                <Title level={4} style={{marginTop: -30}}>Let's Explore The World With Us</Title>
                <Space size={30} style={{marginTop: 50}}>
                    <Button size="large"  style={{backgroundColor: '#292c9c', color: '#ffefe1'}}>Explore</Button>
                    <Button size="large" onClick={() => {navigate('/login')}}>Get Started</Button>
                </Space>
            </div>

            <div 
            style={{
                height: '82vh', 
                paddingLeft: 250, 
                backgroundColor: '#ffefe1', 
                borderTop: '3px solid #0f0d35'
            }}>
                <Title level={2} style={{fontSize: 50}}>Subscription Plans</Title>
                <Space size={50}  style={{marginTop: 40, marginLeft: 200}} >
                    <Card 
                    title="BRILIAN" 
                    bordered={false}
                    hoverable
                    style={{
                        padding: 10,
                        height: 350
                    }}
                    headStyle={{
                        fontSize: 22
                    }}
                    bodyStyle={{
                        textAlign: 'center'
                    }}
                    >
                        <Space size={20} direction="vertical" style={{width: 250, marginTop: 20}}>
                            <Text strong style={{fontSize: 18}}>6 Bulan</Text>
                            <Text style={{fontSize: 14}} >Konsultasikan semua tantangan dalam belajar bersama mentor</Text>
                            <Text code style={{fontSize: 16 }}>Rp 50.000</Text>
                        </Space>
                        
                    </Card>
                    <Card 
                    title="JENIUS" 
                    bordered={false}
                    hoverable
                    style={{
                        padding: 10,
                        height: 350
                    }}
                    headStyle={{
                        fontSize: 22
                    }}
                    bodyStyle={{
                        textAlign: 'center'
                    }}
                    >
                        <Space size={20} direction="vertical" style={{width: 250, marginTop: 20}}>
                            <Text strong style={{fontSize: 18}}>3 Bulan</Text>
                            <Text style={{fontSize: 14}}>Sudah termasuk akses ke semua bahan belajar </Text>
                            <Text code style={{fontSize: 16}}>Rp 30.000</Text>
                        </Space>
                        
                    </Card>
                </Space>
            </div>
            <Footbar />
        </>
        
     );
}
 
export default Home;