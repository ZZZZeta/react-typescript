import { notification } from 'antd';
import { ArgsProps } from 'antd/es/notification';

export const notificationSuccess = (config: ArgsProps) =>
  notification.success(config);
export const notificationError = (config: ArgsProps) =>
  notification.error(config);
