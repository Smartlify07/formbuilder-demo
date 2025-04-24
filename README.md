# 🧰 Form Builder

A flexible, headless form builder for React powered by **Zod**, **React Hook Form**, **ShadCN**, and **Radix UI**.  
Create dynamic forms with full control over layout, styling, and validation — all from a simple config.

---

## ✨ Features

- 🎯 **Schema-first config** with Zod
- 🧩 **Customization** — add your fields, and customize.
- ⚙️ **Custom layout support** (grid, flex, etc.)
- 🪄 Built with Tailwind CSS + ShadCN UI
- ✅ Built-in validation, error handling & helper text
- ♻️ Controlled by `useForm`, powered by `react-hook-form`

---

## 📦 Installation

```bash
npm install @your-org/form-builder
# or
pnpm add @your-org/form-builder
```

## Usage

To use the FormBuilder, you need three things:

- A zod schema for validation
- Your formelements array
-

## Define your form schema

```js
// src/lib/schema.ts

import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  company: z.string().min(1, 'Company name is required'),
  role: z.string().min(1, 'Role is required'),
  message: z.string().optional(),
  newsletter: z.boolean().optional(),
});
```

## Create your form elements

```js
// src/lib/formElements.ts

import { ElementsProps } from '@/lib/types';

export const formElements: ElementsProps[] = [
  {
    id: 'name',
    name: 'name',
    placeholder: 'John Doe',
    elementType: 'text',
    dataType: 'string',
    label: 'Full Name',
    helperText: 'Please enter your full name.',
  },
  {
    id: 'email',
    name: 'email',
    placeholder: 'you@example.com',
    elementType: 'email',
    dataType: 'string',
    label: 'Email',
    helperText: 'We’ll never share your email.',
  },
  {
    id: 'company',
    name: 'company',
    placeholder: 'Acme Inc.',
    elementType: 'text',
    dataType: 'string',
    label: 'Company',
  },
  {
    id: 'role',
    name: 'role',
    elementType: 'select',
    dataType: 'string',
    label: 'Role',
    options: [
      { label: 'Frontend Developer', value: 'frontend' },
      { label: 'Backend Developer', value: 'backend' },
      { label: 'Fullstack Developer', value: 'fullstack' },
    ],
  },
  {
    id: 'message',
    name: 'message',
    placeholder: 'Your message...',
    elementType: 'textarea',
    dataType: 'string',
    label: 'Message',
    rows: 4,
  },
  {
    id: 'newsletter',
    name: 'newsletter',
    elementType: 'checkbox',
    dataType: 'boolean',
    label: 'Subscribe to newsletter',
  },
  {
    id: 'submitBtn',
    name: 'submitBtn',
    elementType: 'button',
    dataType: 'string',
    buttonType: 'submit',
    label: 'Submit',
  },
];
```

## Use the FormBuilder component

```jsx
<FormBuilder
  form={form}
  elements={formElements}
  onSubmit={onSubmit}
  className="grid grid-cols-2 gap-4"
/>
```

## Api Reference

### `<FormBuilder/>`

A reusable form renderer powered by `react-hook-form` and `Zod`. It dynamically renders fields based on your formElements config array.

### Props

| Prop          | Type                                        | Required | Description                                         |
| ------------- | ------------------------------------------- | -------- | --------------------------------------------------- |
| `elements`    | `ElementProps[]`                            | ✅       | Configuration for each form element to be rendered. |
| `onSubmit`    | `(data: SubmissionData) => void`            | ✅       | Callback function when the form is submitted.       |
| `formData`    | `formData: Record<string, unknown>`         | ✅       | State to store the form values                      |
| `className`   | `string`                                    | ❌       | Optional className to customize layout of the form  |
| `setFormData` | `Dispatch<SetStateAction<FormSetterProps>>` | ✅       | State setter for the form data                      |
| `formSchema`  | `ZodTypeAny`                                | ✅       | Zod schema for the form                             |

## Interfaces

### `ElementProps`

This defines the structure of each form element

```ts
export type ElementsProps = {
  id: string;
  name: string;
  placeholder?: string;
  className?: string;
  slots?: Record<string, any>;
  helperText?: string;
  elementType: ElementType;
  dataType: DataType;
  metaData?: MetaData;
  buttonType?: ButtonType;
  label?: string;
  options?: { label: string; value: string | number }[];
  rows?: number;
  cols?: number;
};
```

## Supported `ElementType` values

Below is a list of all `elementType` strings supported in the `ElementsProps` config:

| Element Type     | Description                                 |
| ---------------- | ------------------------------------------- |
| `button`         | Renders a `<button>` element                |
| `text`           | Standard text input                         |
| `number`         | Numeric input field                         |
| `email`          | Email input field                           |
| `password`       | Password input field                        |
| `search`         | Search input field                          |
| `tel`            | Telephone number input                      |
| `url`            | URL input field                             |
| `checkbox`       | Single checkbox input                       |
| `checkboxCombo`  | Group of multiple checkbox inputs           |
| `radiogroup`     | Group of radio buttons                      |
| `select`         | Dropdown select menu                        |
| `textarea`       | Multiline text area                         |
| `date`           | Date picker input                           |
| `time`           | Time picker input                           |
| `datetime-local` | Combined date and time picker input         |
| `week`           | Week picker input                           |
| `month`          | Month picker input                          |
| `tags-input`     | Multi-tag entry component (like a chips UI) |

### `MetaData`

This defines the meta data of a field

```ts
export type MetaData = {
  align?: string;
  variant?: string;
  color?: string;
  rows?: number;
  accept?: string;
  options?: Array<{ value: string | number; label: string }>;
  readOnly?: boolean;
  width?: number;
  preview_upload?: boolean;
  custom_label?: string;
  disabled?: boolean;
};
```

### `DataType`

This defines the data type of a field

```ts
export type DataType = 'string' | 'number' | 'boolean';
```

### Customization.

For now, we only have config based layout, which means you can't position items flexibly like children. It's being worked on as we speak.

Regardless, you can still fully customize the way your input looks and the way nested elements in it look, using

## `slots`

Slots allow you to customize nested elements like labels, containers , buttons.

### Example usage

```js
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
```

## 🎛️ Available `slots` Properties

The `slots` object allows you to customize the styling and layout of individual subcomponents inside form elements. Below is a breakdown of the available slot keys by component:

---

### 🏷️ `form-tags-input.tsx`

| Slot Key         | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| `badge`          | Class applied to individual tag/badge items                 |
| `popoverContent` | Styles the dropdown or suggestions panel                    |
| `list`           | Wrapper around the list of options                          |
| `listItem`       | Style for each individual list item                         |
| `checkbox`       | Checkbox inside each list item (if applicable)              |
| `listItemLabel`  | Label text within each list item                            |
| `actionButton`   | Optional action button (e.g., add new item, clear all, etc) |

---

### 🔽 `form-select-dropdown.tsx`

| Slot Key        | Description                              |
| --------------- | ---------------------------------------- |
| `selectedValue` | Custom styles for the selected value box |

---

### ✏️ `form-input.tsx`

| Slot Key    | Description                               |
| ----------- | ----------------------------------------- |
| `container` | Wrapper element for the input field group |
| `label`     | Style for the label of the input          |
| `field`     | Style for the actual input field element  |

---

### 🗓️ `form-date-picker.tsx`

| Slot Key      | Description                                       |
| ------------- | ------------------------------------------------- |
| `placeholder` | Style applied to the placeholder inside the input |
| `icon`        | Style for the calendar/date icon                  |

---

### ☑️ `form-checkbox.tsx`

| Slot Key    | Description                       |
| ----------- | --------------------------------- |
| `container` | Wraps the checkbox and its label  |
| `label`     | Style for the checkbox label text |

---

## ✅ Customizing Checkbox `checked` State

You can customize how checkboxes appear when they are checked using the `data-[state=checked]` attribute. This is especially useful when using utility-first CSS frameworks like Tailwind CSS.

### Example

```tsx
<Checkbox className="border border-slate-300 data-[state=checked]:bg-slate-900 data-[state=checked]:text-white" />
```

### What it does

- `data-[state=checked]:bg-slate-900`: Applies a dark background when the checkbox is checked.
- `data-[state=checked]:text-white`: Changes the checkmark color when checked.

You can use this pattern with any Tailwind or custom utility class to fully control the visual state of your checkboxes.
