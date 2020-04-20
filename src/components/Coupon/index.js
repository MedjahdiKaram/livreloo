import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { withNavigation } from 'react-navigation';

import {
  CouponButton,
  Divisor,
  Logo,
  Content,
  CouponInfo,
  Title,
  Validity,
} from './styles';
import { red } from '../../utils/colors';

function Coupon({ navigation }) {
  return (
    <CouponButton onPress={() => {}}>
      <Divisor>
        <Content>
          <Logo />
          <CouponInfo>
            <Title>Coupon de 10 DA</Title>
            <Validity>Valide jusqu'à 16:29</Validity>
          </CouponInfo>
        </Content>
        <MaterialIcons name="keyboard-arrow-right" color={red} size={20} />
      </Divisor>
    </CouponButton>
  );
}

export default withNavigation(Coupon);
