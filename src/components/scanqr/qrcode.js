import React from 'react';
import QRCode from 'qrcode.react';
import styles from './QRCode.module.css';

const QRCodeComponent = ({ qrValue }) => {
  const qrCodeValue = qrValue || 'any string';

  return <QRCode value={qrCodeValue} className={styles.qrCode} />;
};

export default QRCodeComponent;
