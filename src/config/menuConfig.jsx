import React from 'react';
import {
    AppstoreOutlined,
    HomeOutlined,
    SafetyOutlined,
    BarsOutlined,
    ToolOutlined,
    UserOutlined,
    AreaChartOutlined,
    PieChartOutlined,
    BarChartOutlined,
    LineChartOutlined
  } from '@ant-design/icons';


const menuList = [
    {
        title: "首页",
        key: "/home",
        icon: <HomeOutlined />
    },
    {
        title: "商品",
        key: "/products",
        icon: <AppstoreOutlined />,
        children: [
            {
                title: "品类管理",
                key: "/category",
                icon: <BarsOutlined />
            },
            {
                title: "商品管理",
                key: "/product",
                icon: <ToolOutlined />
            }
        ]
    }, 
    {
        title: "用户管理",
        key: "/user",
        icon: <UserOutlined />
    },
    {
        title: "角色管理",
        key: "/role",
        icon: <SafetyOutlined />
    },
    {
        title: "图形图表",
        key: "/charts",
        icon: <AreaChartOutlined />,
        children: [
            {
                title: "饼状图",
                key: "/charts/pie",
                icon: <PieChartOutlined />
            },
            {
                title: "柱状图",
                key: "/charts/bar",
                icon: <BarChartOutlined />
            },
            {
                title: "线形图",
                key: "/charts/line",
                icon: <LineChartOutlined />
            }
        ]
    }
]

export default menuList;