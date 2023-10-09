import * as yup from 'yup';
import { VoterDetails } from './interfaces';

export class FormValidator {
  public static schema: yup.Schema<VoterDetails> = yup.object().shape({ 
    firstName: yup.string().required('First Name is required').min(2, 'First Name must be at least 2 characters'),
    lastName: yup.string().required('Last Name is required').min(2, 'Last Name must be at least 2 characters'),
    email: yup.string().email('Invalid email').required('Email is required'),
    identity_id: yup.string().required('Identity ID is required').test('is-exactly-7', 'Identity ID must be exactly 7 characters', (value) => {
      return value.length === 7;
    }),
  });
}