import styled, { css } from 'styled-components';

// reuseable clearfix CSS to avoid floating components from collapsing within a container
const clearfix = css`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Card = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; // "borrowed" from Stripe
  margin: 30px auto 0;
  max-width: 400px;
  padding: 30px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 30px;
  ${clearfix}
`;

const CreditCardLogos = styled.img`
  display: block;
  float: right;
  height: 18px;
`;

const Heading1 = styled.h1`
  font-size: 22px;
  margin-bottom: 30px;
`;

const FieldLabel = styled.label`
  color: #666;
  display: block;
  font-size: 0.9em;
  padding-bottom: 5px;
  padding-left: 10px;
`;

const FieldValidationMessage = styled.p`
  color: #e00;
  display: none;
  font-size: 0.9em;
  padding-left: 10px;
`;

const FormField = styled.input`
  border-color: #ccc;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  color: inherit;
  font-size: inherit;
  height: 45px;
  outline: 0;
  padding: 10px;
  width: 100%;
  &:focus {
    border-color: #0f72e5;
  }
  &::placeholder {
    color: #AAA;
  }
`;

const FormFieldRow = styled.div`
  margin-bottom: 20px;
  ${clearfix}
`;

const ExpiryFieldWrapper = styled.span`
  float: left;
  width: 60%;
  ${FormField} {
    width: 46%;
    margin-right: 4%;

  }
`;

const CVVFieldWrapper = styled.span`
  float: right;
  width: 30%;
`;

const Form = styled.form`

`;

const Button = styled.button`
  background: #0f72e5;
  border: 0;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-size: inherit;
  height: 45px;
  margin-top: 30px;
  width: 100%;
`;

function CreditCardForm() {
  return (
    <Card>
      <ImageWrapper>
        <CreditCardLogos alt="Credit Card Logos" title="Credit Card Logos" src="http://www.credit-card-logos.com/images/multiple_credit-card-logos-1/credit_card_logos_10.gif" />
      </ImageWrapper>
      <Heading1>Enter your credit card information</Heading1>
      <Form>
        <FormFieldRow>
          <FieldLabel for="fullName">Full Name</FieldLabel>
          <FormField id="fullName" type="text" placeholder="As it appears on the card" />
          <FieldValidationMessage>validation messages go here</FieldValidationMessage>
        </FormFieldRow>
        <FormFieldRow>
          <FieldLabel for="cardNumber">Card Number</FieldLabel>
          <FormField id="cardNumber" type="text" placeholder="0000  0000  0000  0000" />
          <FieldValidationMessage>validation messages go here</FieldValidationMessage>
        </FormFieldRow>
        <FormFieldRow>
          <ExpiryFieldWrapper>
            <FieldLabel for="expMonth">Expiry Date (MM/YYYY)</FieldLabel>
            <FormField id="expMonth" type="text" placeholder="MM" />
            <FormField id="expYear" type="text" placeholder="YYYY" />
          <FieldValidationMessage>validation messages go here</FieldValidationMessage>
          </ExpiryFieldWrapper>
          <CVVFieldWrapper>
            <FieldLabel for="cvv">CVV2</FieldLabel>
            <FormField id="cvv" type="text" placeholder="3-4 digits" />
          <FieldValidationMessage>validation messages go here</FieldValidationMessage>
          </CVVFieldWrapper>
        </FormFieldRow>
        <Button>Submit</Button>
      </Form>
    </Card>
  );
}

export default CreditCardForm;