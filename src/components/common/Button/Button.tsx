import React, { memo } from 'react';
import {ButtonStyle} from './styles'
import { Button as PaperButton } from 'react-native-paper';
import {theme} from '../../../core/theme'

type Props = React.ComponentProps<typeof PaperButton>;

const styles = ButtonStyle();

const Button = ({ mode, style, children, ...props }: Props) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: theme.colors.surface },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);



export default memo(Button);