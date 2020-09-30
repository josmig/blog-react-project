import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Importando el componente layout de la libreria antdesign
import {Layout} from "antd";
//importando estilos del layout
import "./LayoutAdmin.scss";
//importando components /views
import MenuTop from '../components/Admin/MenuTop'

export default function LayoutAdmin(props){
    /* console.log(props); */
    //haciendo destructurin de Layout trayendo los demas components del layout
    const {Header,Content,Footer} = Layout; 
    //destructuracion trayendo solamente los routes de los props
    const { routes}= props

    return(
        <Layout>
            {/* TO DO: Menu Sider */}
            <Layout className="layout-admin">
                <Header className="layout-admin__header">
                    {/* TO DO: Menu top */}
                    <MenuTop />
                </Header>
                <Content className="layout_admin__content">
                    <LoadRouter routes={routes}/>
                </Content>
                <Footer className="layout_admin__footer">
                    José Miguel Pantigoso &copy; 2020
                </Footer>
            </Layout>
        </Layout>        
    );
}

function LoadRouter({routes}){
    return(
        <Switch>
            {routes.map((route,index) => (
            <Route            
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}                
                />        
            ))} 
        </Switch>
    );
}

