import React from 'react';
import ReactSwitch from 'react-switch';
import { useTheme } from '../../contexts/theme';

export default function Switch() {
  const { toggleTheme, theme } = useTheme();
  return (
    <ReactSwitch
      onChange={toggleTheme}
      checked={theme.title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      offColor={'#ddd'}
      onColor={'#ff8d3b'}
    />
  );
}
