# Checkout form available at:
https://quick-checkout.netlify.app/

## Time Spent

Total: ~ 5-6 hours

Coming up with a mock with UX considerations: 1-2 hours
Followed by coding: 3-4 hours

## UI/UX Considerations

Please see screenshot below for UI/UX improvements
![checkout form mock](https://github.com/sshakeel/quick-checkout-form/blob/master/credit-card-checkout/mock.png?raw=true)

## Form Submission
- For the purpose of this example, only basic validation has been implemented
- Ideally, we'd like to escape dangerous character submissions and keep our payload to a minimum
- payload would look something like 
```
{
    "data":
      {
          "name": "",
          "credit_card": "",
          "exp_month": "",
          "exp_year": "",
          "cvv": ""
      }
}
```
- Of course, we should send this over SSL
- In case of a failed response from the API, we can use the space at the top of the form to display the error(s). Possible example could be in the instance of payment declined

## Styling Considerations

- Styling has been kept to a bare minimum
- Most of the focus was on readability while filling out the form
- Inputs/button have been sized large enough to be usable on mobile devices
- Styles are implemented using `styled-components` which can be extensible if theming were ever applicable in the future
- The form has been set to a static width but behaves well for different sizes
- The form is keyboard navigable
- Ideally, credit card field would have some text masking to improve readability of credit card numbers 
