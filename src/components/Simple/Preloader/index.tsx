import React, { FC } from 'react';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import { isLoading as isLoadingSelector } from '../../../redux/preloader/selectors';

const Preloader: FC = ({ children }) => {
  const isLoading = useSelector(isLoadingSelector);

  return (
    <Spin tip="Loading..." spinning={isLoading}>
      {children}
    </Spin>
  );
};

export default Preloader;
