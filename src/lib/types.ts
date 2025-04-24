import { Dispatch, SetStateAction } from 'react';
import { ZodTypeAny } from 'zod';

export type ElementType =
  | 'button'
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'checkbox'
  | 'checkboxCombo'
  | 'radiogroup'
  | 'select'
  | 'textarea'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'week'
  | 'month'
  | 'tags-input';

export type DataType = 'string' | 'number' | 'boolean';
export type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
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

export type FormBuilderProps<SubmissionData, FormSetterProps> = {
  elements: ElementsProps[];
  onSubmit: (data?: SubmissionData) => void;
  formSchema: ZodTypeAny;
  formData: Record<string, unknown>;
  className?: string;
  setFormData: Dispatch<SetStateAction<FormSetterProps>>;
};
