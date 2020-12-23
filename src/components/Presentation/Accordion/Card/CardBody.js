/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react';
import classNames from 'classnames/bind';
import animation from '../../../../../../gatsby-theme-scroll-reveal/animation';

import styles from './index.module.css';

const cx = classNames.bind(styles);

const CardBody = ({ children, className, ...props }) => {
  return (
    <Box className={cx('CardBody', className)} {...props}>
      <Box>{children}</Box>
    </Box>
  );
};

export default CardBody;
