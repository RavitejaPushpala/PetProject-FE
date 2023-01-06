import React from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: 'black',
        }}
    />
);
const onSearch = (value) => console.log(value);
export default function SearchLogo() {
    return (
        <Search
            placeholder="Search for restaurants, cuisine or a dishes"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
        />
    )
}
