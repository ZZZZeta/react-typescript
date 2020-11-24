import React from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

interface ITable<Item> {
  dataSource: Array<Item>;
  columns: ColumnProps<Item>[];
  rowKey: (item: Item) => number;
}

const TableWrapped = <Item extends {}>({
  dataSource,
  columns,
  ...rest
}: ITable<Item>) => {
  return <Table<Item> {...rest} dataSource={dataSource} columns={columns} />;
};

export default TableWrapped;
