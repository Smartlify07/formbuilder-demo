import { ElementsProps } from '../types';

export const formElements: ElementsProps[] = [
  {
    id: 'name',
    name: 'name',
    placeholder: 'John Doe',
    className: 'col-span-2',
    elementType: 'text',
    dataType: 'string',
    label: 'Full Name',
    helperText: 'Please enter your full name.',
    metaData: {},
    slots: {
      input: 'rounded-md px-4 py-2',
    },
  },
  {
    id: 'email',
    name: 'email',
    placeholder: 'john@example.com',
    className: '',
    elementType: 'email',
    dataType: 'string',
    label: 'Email Address',
    helperText: 'We’ll never share your email.',

    slots: {
      input: 'border border-neutral-300',
    },
  },
  {
    id: 'company',
    name: 'company',
    placeholder: 'Acme Inc.',
    className: '',
    elementType: 'text',
    dataType: 'string',
    label: 'Company',
    helperText: 'The company you work for.',
  },
  {
    id: 'role',
    name: 'role',
    elementType: 'select',
    dataType: 'string',
    label: 'Role',
    placeholder: 'Select your role',
    options: [
      { label: 'Frontend Developer', value: 'frontend' },
      { label: 'Backend Developer', value: 'backend' },
      { label: 'Fullstack Developer', value: 'fullstack' },
    ],
    helperText: 'Select your current role',
    slots: {
      trigger: 'w-full',
      selectItem: 'py-2 px-2 hover:bg-accent',
    },
  },
  {
    id: 'message',
    name: 'message',
    placeholder: 'Your message here...',
    className: '',
    elementType: 'textarea',
    dataType: 'string',
    label: 'Message',
    rows: 6,
    cols: 40,
    helperText: 'Optional. Let us know your thoughts.',
  },
  {
    id: 'newsletter',
    name: 'newsletter',
    elementType: 'checkbox',
    dataType: 'boolean',
    label: 'Subscribe to newsletter',
    helperText: 'Get updates in your inbox.',
  },
  {
    id: 'submitBtn',
    name: 'submitBtn',
    className:
      'w-full bg-neutral-800 py-2 px-4 text-white hover:bg-neutral-700',
    elementType: 'button',
    dataType: 'string',
    buttonType: 'submit',
    label: 'Submit Form',
  },
];
