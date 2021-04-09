import React from 'react';
import styled from 'styled-components';

import { clearfix } from '../styledComponents';

const FieldLabel = styled.label`
  color: #666;
  display: block;
  font-size: 0.9em;
  padding-bottom: 5px;
  padding-left: 10px;
`;

const FieldValidationMessage = styled.p`
  color: #e00;
  font-size: 0.85em;
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

const Button = styled.button`
  background: #0f72e5;
  border: 0;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-size: inherit;
  height: 50px;
  margin-top: 30px;
  width: 100%;
`;

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formErrors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateCardNumber() {
    const { cardNumber, cvv } = this.state;

    if (!cardNumber || cardNumber.length < 15 || cardNumber.length > 16) {
      // fail validation if card number isn't between 15 or 16 digits
      this.setState(prevState => ({
        formErrors: {...prevState.formErrors, cardNumber: true},
      }));
    } else {
      // card type: Visa
      if (cardNumber.charAt(0) === '4' && cardNumber.length === 16) {
        // make sure our CVV2 is exact at 3 chars
        if (cvv && cvv.length !== 3) {
          this.setState(prevState => ({
            formErrors: {...prevState.formErrors, cvv: true},
          }));
        }
      }

      // card type: AmEx
      if ((cardNumber.substring(0, 2) === '34' || cardNumber.substring(0, 2) === '37') && cardNumber.length === 15) {
        // make sure our CVV2 is exact at 4 chars
        if (cvv && cvv.length !== 4) {
          this.setState(prevState => ({
            formErrors: {...prevState.formErrors, cvv: true},
          }));
        }
      }
    }
  }

  validateCVV() {
    const { cvv } = this.state;

    if (!cvv || cvv.length < 3 || cvv.length > 4) {
      // fail validation if CVV2 isn't between 3 or 4 digits
      this.setState(prevState => ({
        formErrors: {...prevState.formErrors, cvv: true},
      }));
    }

    this.validateCardNumber(); // we need to further validate if CVV2 match their corresponding card types

  }

  validateExpiryDate() {
    const { expMonth, expYear } = this.state;

    // parse user input in to int
    let intUserMonth = parseInt(expMonth, 10);
    let intUserYear = parseInt(expYear, 10);

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth()+1;

    if (isNaN(intUserMonth)) {
      this.setState(prevState => ({
        formErrors: {...prevState.formErrors, expMonth: true},
      }));
    }
    
    if (isNaN(intUserYear)) {
      this.setState(prevState => ({
        formErrors: {...prevState.formErrors, expYear: true},
      }));
    }
    
    if (intUserYear < currentYear) {
      // if user expiry year is in the past, fail validation
      this.setState(prevState => ({
        formErrors: {...prevState.formErrors, expYear: true},
      }));
    }
    
    if (intUserYear === currentYear) {
      // if user expiry year is the same as current year, and their month is in the past, fail validation
      if (intUserMonth <= currentMonth || intUserMonth > 12 || intUserMonth < 1) {
        this.setState(prevState => ({
          formErrors: {...prevState.formErrors, expMonth: true},
        }));
      }
    }

  }
  
  handleChange(event) {
    const field = event.target;

    if (field.value.trim() !== '') {
      this.setState(prevState => ({
        formErrors: {...prevState.formErrors, [field.name]: false},
        [field.name]: field.value.trim()
      }), () => {
        if (field.name === 'cardNumber') {this.validateCardNumber();}
        if (field.name === 'cvv') {this.validateCVV();}
        if (field.name === 'expMonth' || field.name === 'expYear' ) {this.validateExpiryDate();}
      });
    } else {
      this.setState(prevState => ({
        formErrors: {...prevState.formErrors, [field.name]: true},
      }));
    }
  }

  handleSubmit(event) {
    const { formErrors } = this.state;

    // iterate through formErrors
    for (const field in formErrors) {
      // if there is at least one error, don't submit the form and alert the user instead
      if (formErrors[field]) {
        alert('Please make sure to fix all errors on the form.');
        break;
      } else {
        // otherwise, submit the form
      }
    }
    event.preventDefault();
  }

  render() {
    const { formErrors } = this.state;

    return (
      <form>
        <FormFieldRow>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <FormField id="fullName" name="fullName" type="text" placeholder="As it appears on the card" onChange={(e) => this.handleChange(e)} />
          
          {formErrors.fullName && <FieldValidationMessage>Please enter a valid name</FieldValidationMessage>}
        </FormFieldRow>
        <FormFieldRow>
          <FieldLabel htmlFor="cardNumber">Card Number</FieldLabel>
          <FormField id="cardNumber" name="cardNumber" type="text" placeholder="0000  0000  0000  0000" onChange={(e) => this.handleChange(e)} />
          {formErrors.cardNumber && <FieldValidationMessage>Please enter a valid card number</FieldValidationMessage>}
        </FormFieldRow>
        <FormFieldRow>
          <ExpiryFieldWrapper>
            <FieldLabel htmlFor="expMonth">Expiry Date (MM/YYYY)</FieldLabel>
            <FormField id="expMonth" name="expMonth" type="text" placeholder="MM" onChange={(e) => this.handleChange(e)} />
            <FormField id="expYear" name="expYear" type="text" placeholder="YYYY" onChange={(e) => this.handleChange(e)} />
            {(formErrors.expMonth || formErrors.expYear) && <FieldValidationMessage>Please double check your card's expiry date</FieldValidationMessage>}
          </ExpiryFieldWrapper>
          <CVVFieldWrapper>
            <FieldLabel htmlFor="cvv">CVV2</FieldLabel>
            <FormField id="cvv" name="cvv" type="text" placeholder="3-4 digits" onChange={(e) => this.handleChange(e)} />
            {formErrors.cvv && <FieldValidationMessage>Please double check your card's CVV2</FieldValidationMessage>}
          </CVVFieldWrapper>
        </FormFieldRow>
        <div>
          {/* {formErrors} */}
          <p>{this.state.fullName}</p>
          <p>{this.state.cardNumber}</p>
          <p>{this.state.expMonth}</p>
          <p>{this.state.expYear}</p>
          <p>{this.state.cvv}</p>
        </div>
        <Button onClick={(e) => this.handleSubmit(e)}>Submit</Button>
      </form>
    );
  }
}

export default Form;