import React from 'react';
import {Layout} from "antd";
import { Route } from 'react-router-dom';
import "./LayoutAdmin.scss";

export default function LayoutAdmin(props){
    /* console.log(props); */
    //haciendo destructurin de Layout trayendo los demas components del layout
    const {Header,Content,Footer} = Layout; 
    //destructuracion trayendo solamente los routes de los props
    const { routes}= props

    return(
        <Layout>
            <h2>Menu Sider</h2>
            <Layout>
                <Header>Cabecera</Header>
                <Content>
                    <LoadRouter routes={routes}/>
                </Content>
                <Footer>
                    José Miguel Pantigoso &copy; 2020
                </Footer>
            </Layout>
        </Layout>        
    );
}

function LoadRouter({routes}){
    
    return routes.map((route,index) => (
        <Route            
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
            
        />        
    ));
}



