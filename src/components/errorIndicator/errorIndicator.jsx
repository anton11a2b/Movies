import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

const ErrorIndicator = ({ errorTitle }) => <Alert message="Error" description={errorTitle} type="error" showIcon />;

ErrorIndicator.defaultProps = {
  errorTitle: '',
};

ErrorIndicator.propTypes = {
  errorTitle: PropTypes.string,
};

export default ErrorIndicator;
