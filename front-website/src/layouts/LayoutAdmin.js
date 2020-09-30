import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

//Importando el componente layout de la libreria antdesign
import {Layout} from "antd";
//importando estilos del layout
import "./LayoutAdmin.scss";
//importando components /views
import MenuTop from '../components/Admin/MenuTop';
import MenuSider from '../components/Admin/MenuSider';

export default function LayoutAdmin(props){
    /* console.log(props); */
    //haciendo destructurin de Layout trayendo los demas components del layout
    const {Header,Content,Footer} = Layout; 
    //destructuracion trayendo solamente los routes de los props
    const { routes }= props

    //useState es un hook de react que trae funcionalidades para usar
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    return(
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout 
                className="layout-admin" 
                style={{marginLeft:menuCollapsed ? "80px" : "200px"}}>
                <Header className="layout-admin__header">                    
                    <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>
                </Header>
                <Content className="layout-admin__content">
                    <LoadRouter routes={routes}/>
                </Content>
                <Footer className="layout-admin__footer">
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

