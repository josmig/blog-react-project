import React from 'react';
import './MenuTop.scss';
import Logo from '../../../assets/logo-white.png';
//importando componentes de la libreria antdesign
import {Button} from 'antd';
import { MenuOutlined, PoweroffOutlined } from '@ant-design/icons';

export default function MenuTop(){
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                {/* logo de la web */}
                <img  className="menu-top__left-logo"
                    src={Logo}
                    alt="José Miguel Pantigoso Puraca"
                />
                <Button type="link" onClick={()=> console.log('Me diste click')}>
                    <MenuOutlined />
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