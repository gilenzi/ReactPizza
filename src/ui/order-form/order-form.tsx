import {Form, redirect, useActionData, useNavigation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../../state/store';
import {Row} from '../row/row';
import Button from '../button/button';
import {
  FieldWrapper,
  FormLabel,
  FormInput,
  FormCheckbox,
  ErrorMessage,
} from './styled-components';
import {createNewOrder} from '../../services/api-restaurant';
import {useState} from 'react';

const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const formStyles = {
  maxWidth: '48rem',
};

export function OrderForm() {
  const [withPriority, setWithPriority] = useState(false);
  const {username} = useSelector((state: RootState) => state.user);
  const {total, items} = useSelector((state: RootState) => state.cart);
  const formErrors = useActionData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const totalPrice = withPriority ? (total * 1.2).toFixed(2) : total.toFixed(2);

  console.log('items', items);

  const priorityHandler = () => {
    setWithPriority(!withPriority);
  };

  return (
    <Form style={formStyles} method="POST">
      <FieldWrapper>
        <Row>
          <FormLabel htmlFor="username">First Name</FormLabel>
          <FormInput
            type="text"
            name="customer"
            id="username"
            defaultValue={username}
          />
        </Row>
        {formErrors?.customer && (
          <ErrorMessage>{formErrors.customer}</ErrorMessage>
        )}
      </FieldWrapper>
      <FieldWrapper>
        <Row>
          <FormLabel htmlFor="phone-number">Phone Number</FormLabel>
          <FormInput type="text" name="phone-number" id="phone-number" />
        </Row>
        {formErrors?.phone && <ErrorMessage>{formErrors.phone}</ErrorMessage>}
      </FieldWrapper>
      <FieldWrapper>
        <Row>
          <FormLabel htmlFor="address">Address</FormLabel>
          <FormInput type="text" name="address" id="address" />
        </Row>
        {formErrors?.address && (
          <ErrorMessage>{formErrors.address}</ErrorMessage>
        )}
      </FieldWrapper>
      <Row>
        <FormCheckbox
          onChange={priorityHandler}
          type="checkbox"
          name="priority"
          id="priority"
        />
        <FormLabel htmlFor="priority">
          Want to yo give your order priority?
        </FormLabel>
      </Row>
      <FormInput type="hidden" name="cart" value={JSON.stringify(items)} />
      <Button disabled={isSubmitting} style={{marginTop: '2rem'}} type="submit">
        {isSubmitting ? 'Placing order....' : `Order now from ${totalPrice}`}
      </Button>
    </Form>
  );
}

interface Errors {
  customer?: string;
  address?: string;
  phone?: string;
}

export async function createOrder({request}: {request: Request}) {
  const formData = await request.formData();
  const {address, cart, customer, priority, ...restData} = Object.fromEntries(
    formData
  ) as {[key: string]: string};
  const phone = restData['phone-number'];

  const errors: Errors = {};

  if (customer.trim() === '') {
    errors.customer = 'Field is required.';
  }

  if (!isValidPhone(phone)) {
    errors.phone = 'Enter valid phone number.';
  }

  if (address.trim() === '') {
    errors.address = 'Field is required.';
  }

  if (Object.keys(errors).length > 0) return errors;

  const order = {
    address,
    cart: JSON.parse(cart as string),
    customer,
    phone,
    priority: priority === 'on' ? true : false,
    position: '',
  };

  const newOrder = await createNewOrder(order);
  console.log('newOrder', newOrder);
  return redirect(`/order/${newOrder.id}`);
}
