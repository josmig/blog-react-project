import React from 'react';
import { Layout } from 'antd';

export default function LayoutBasic(){
    const {Header , Content , Footer} = Layout;
    return(
        <Layout>
            <Header>
                
            </Header>
            <Content>

            </Content>
            <Footer>
                <p>José Miguel Pantigoso Puraca &copy; 2020 </p>
            </Footer>
        </Layout>
    );
}