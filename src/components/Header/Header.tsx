import React from 'react';
import {  Text } from 'react-native';
import { HeaderStyle } from './styles'

type Props = {
  children: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  const styles= HeaderStyle();
  return (
    <Text
    style={styles.header}
    >{children}</Text>
  )
}