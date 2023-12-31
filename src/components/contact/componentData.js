const input = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    placeholder: 'Full Name',
    errorMessage: 'Username should be 3-16 characters, and must not include special characters',
    label: 'Name',
    isTextarea: false,
    pattern: '^[A-Za-z0-9 ]{3,16}$',
    required: true,
  },
  {
    id: 2,
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Email',
    isTextarea: false,
    errorMessage: 'Enter a valid email',
    required: true,
  },
  {
    id: 3,
    type: 'textarea',
    name: 'message',
    label: 'Message',
    isTextarea: true,
    placeholder: 'Leave your valuable messsage here!',
    errorMessage: 'characters must be 10-28 , and cannot include special character',
    pattern: '^[A-Za-z0-9]{2,100}$',
    required: true,
  },
];

export default input;
