import { FormButton } from '@/components/FormBuilder/form-button';
import { FormInput } from '@/components/FormBuilder/form-input';
import { Control, ControllerRenderProps } from 'react-hook-form';
import { ElementsProps } from './types';
import { MultiCheckbox } from '@/components/FormBuilder/form-checkbox-group';
import { FormRadioGroup } from '@/components/FormBuilder/form-radio-group';
import { FormSelectDropDown } from '@/components/FormBuilder/form-select-dropdown';
import { FormTextArea } from '@/components/FormBuilder/form-textarea';
import { FormDatePicker } from '@/components/FormBuilder/form-date-picker';
import { FormDateTimePicker } from '@/components/FormBuilder/form-date-time-picker';
import { TagsInput } from '@/components/FormBuilder/form-tags-input';
import { FormCheckbox } from '@/components/FormBuilder/form-checkbox';

export const renderElement = (
  element: ElementsProps,
  field: ControllerRenderProps,
  control: Control<Record<string, unknown>, unknown, unknown>
) => {
  switch (element.elementType) {
    case 'button':
      return (
        <FormButton
          className={element.className ?? ''}
          type={element.buttonType}
          buttonText={element.label ?? ''}
        />
      );

    case 'text':
      return (
        <FormInput
          element={element}
          placeholder={element.placeholder ?? ''}
          field={field}
        />
      );

    case 'tags-input':
      return <TagsInput field={field} element={element} />;

    case 'email':
      return (
        <FormInput
          element={element}
          type="email"
          placeholder={element.placeholder ?? ''}
          field={field}
        />
      );

    case 'textarea':
      return <FormTextArea element={element} field={field} />;

    case 'date':
      return <FormDatePicker element={element} field={field} />;

    case 'datetime-local':
      return <FormDateTimePicker element={element} field={field} />;

    case 'number':
      return (
        <FormInput
          element={element}
          type="number"
          placeholder={element.placeholder ?? ''}
          field={field}
        />
      );

    case 'password':
      return (
        <FormInput
          element={element}
          type="password"
          placeholder={element.placeholder ?? ''}
          field={field}
        />
      );

    case 'tel':
      return (
        <FormInput
          element={element}
          type="tel"
          placeholder={element.placeholder ?? ''}
          field={field}
        />
      );

    case 'search':
      return (
        <FormInput
          element={element}
          type="search"
          placeholder={element.placeholder ?? ''}
          field={field}
        />
      );

    case 'url':
      return (
        <FormInput
          element={element}
          type="url"
          placeholder={element.placeholder ?? ''}
          field={field}
        />
      );

    case 'checkbox':
      return <FormCheckbox element={element} field={field} />;

    case 'checkboxCombo':
      return <MultiCheckbox element={element} control={control} />;

    case 'radiogroup':
      return <FormRadioGroup element={element} control={control} />;

    case 'select':
      return <FormSelectDropDown element={element} control={control} />;

    default:
      return null;
  }
};
