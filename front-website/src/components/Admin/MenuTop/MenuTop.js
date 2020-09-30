import React from 'react';
import './MenuTop.scss';
import Logo from '../../../assets/logo-white.png';
//importando componentes de la libreria antdesign
import {Button} from 'antd';
import { MenuOutlined, PoweroffOutlined ,CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';



export default function MenuTop(props){
    console.log(props);
    const { menuCollapsed , setMenuCollapsed } = props; //para traer los datos
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                {/* logo de la web */}
                <Link to ={"/admin"}>
                    <img  className="menu-top__left-logo"
                            src={Logo}
                            alt="José Miguel Pantigoso Puraca"
                        />
                </Link>
                <Button type="link" onClick={()=> setMenuCollapsed(!menuCollapsed) }>
                    {/* <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"}/> */}
                    <MenuOutlined/>
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={()=> console.log('Desconectado')}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}