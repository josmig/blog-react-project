import React from 'react';
import { Layout } from 'antd';

//importando liberia para las rutas
import { Route } from 'react-router-dom';
//importando estilos
import "./LayoutBasic.scss";


export default function LayoutBasic(props){
    const { routes } = props;
    const { Content , Footer} = Layout;
    return(        
        <Layout>
            <h1>Menu...</h1>
            <Layout>
                <Content>
                    <LoadRouter routes={routes}/>
                </Content>
                <Footer>
                    <p>José Miguel Pantigoso Puraca &copy; 2020 </p>
                </Footer>
            </Layout>
        </Layout>
    ); 
}

function LoadRouter({routes}){
    console.log(routes);
    return routes.map((route,index) => (
        <Route            
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
            
        />        
    ));
}


