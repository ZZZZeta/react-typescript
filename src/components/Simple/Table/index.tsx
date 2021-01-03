import React from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

type TableProps<Item> = {
  dataSource: Item[];
  columns: ColumnProps<Item>[];
  rowKey: (item: Item) => number;
};

function TableWrapped<Item extends {}>({
  dataSource,
  columns,
  ...rest
}: TableProps<Item>) {
  return <Table {...rest} dataSource={dataSource} columns={columns} />;
}

export default TableWrapped;
