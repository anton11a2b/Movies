import React from 'react';
import { Alert } from 'antd';

const ErrorIndicator = () => (
  <Alert message="Error" description="The reqest you sent is invalid. Try again." type="error" showIcon />
);

export default ErrorIndicator;
