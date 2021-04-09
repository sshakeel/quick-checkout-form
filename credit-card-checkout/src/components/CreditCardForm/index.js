import styled from 'styled-components';

import Form from '../common/Form';
import { Card, clearfix, Heading1 } from '../common/styledComponents';

const ImageWrapper = styled.div`
  margin-bottom: 30px;
  ${clearfix}
`;

const CreditCardLogos = styled.img`
  display: block;
  float: right;
  height: 18px;
`;


function CreditCardForm() {
  return (
    <Card>
      <ImageWrapper>
        <CreditCardLogos alt="Credit Card Logos" title="Credit Card Logos" src="http://www.credit-card-logos.com/images/multiple_credit-card-logos-1/credit_card_logos_10.gif" />
      </ImageWrapper>
      <Heading1>Enter your credit card information</Heading1>
      <Form />
    </Card>
  );
}

export default CreditCardForm;