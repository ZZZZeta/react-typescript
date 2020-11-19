import React from 'react';
import { Table } from 'antd';
import {ColumnProps} from "antd/es/table";

interface TableInterface<Item> {
    dataSource: Array<Item>,
    columns: ColumnProps<Item>[]
    
}

const TableWrapped = <Item extends {}>({ dataSource, columns, ...rest }: TableInterface<Item>) => {
    return <Table<Item> {...rest} dataSource={dataSource} columns={columns} />;
};

export default TableWrapped;
