import { ElementsProps } from '@/lib/types';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ControllerRenderProps } from 'react-hook-form';
import { useState, forwardRef } from 'react';
import { CheckIcon, ChevronDown, XCircle, XIcon } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Command, CommandGroup, CommandItem, CommandList } from '../ui/command';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export const TagsInput = forwardRef<
  HTMLDivElement,
  {
    element: ElementsProps;
    field: ControllerRenderProps;
  }
>(({ element, field }, ref) => {
  const [selectedValues, setSelectedValues] = useState<
    (string | number | null)[]
  >(field.value as []);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const MAX_COUNT = 3;

  function toggleOption(option: string | number) {
    const newSelectedValues = selectedValues.includes(option)
      ? selectedValues.filter((value) => value !== option)
      : [...selectedValues, option];
    setSelectedValues(newSelectedValues);
    field.onChange(newSelectedValues);
  }

  function handleClear() {
    setSelectedValues([]);
    field.onChange([]);
  }
  function handleClearExtra() {
    const remainingValues = [...selectedValues].slice(0, MAX_COUNT);
    setSelectedValues(remainingValues);
  }
  function handleTogglePopover() {
    setIsPopoverOpen((prev) => !prev);
  }
  return (
    <Popover onOpenChange={setIsPopoverOpen} open={isPopoverOpen}>
      <PopoverTrigger asChild>
        <div
          ref={ref}
          onClick={handleTogglePopover}
          className={`${cn(
            'py-2 px-2 flex items-center border rounded-sm justify-between',
            element?.slots?.PopoverTrigger
          )}`}
        >
          <div className="w-full flex items-center gap-2">
            {field.value.length === 0 && (
              <p className={`${cn('text-sm', element?.slots?.placeholder)}`}>
                {element.placeholder ?? 'Select options'}
              </p>
            )}
            {selectedValues
              .slice(0, MAX_COUNT)
              .filter((value) =>
                field.value.some((item: string | number) => item === value)
              )
              .map((value, index) => (
                <Badge
                  onClick={(e) => {
                    toggleOption(value!);
                    e.stopPropagation();
                  }}
                  key={index}
                  variant={'default'}
                  className={`${cn(
                    'flex items-center gap-1',
                    element.slots?.badge
                  )}`}
                >
                  {
                    element.options?.find((option) => option?.value === value)
                      ?.label
                  }
                  <XCircle className="h-10 w-10 shrink-0 cursor-pointer" />
                </Badge>
              ))}

            {selectedValues.length > MAX_COUNT && (
              <Badge
                onClick={(e) => {
                  handleClearExtra();
                  e.stopPropagation();
                }}
                variant={'default'}
                className={`${cn(
                  'flex items-center gap-1',
                  element.slots?.badge
                )}`}
              >
                {selectedValues.slice(MAX_COUNT).length} more
                <XCircle className="h-10 w-10 shrink-0 cursor-pointer" />
              </Badge>
            )}
          </div>

          <div className="flex items-center">
            <button>
              <ChevronDown size={20} />
            </button>
            <Separator
              className="bg-neutral-50 flex min-h-6 w-full"
              orientation="vertical"
            />
            <Button
              variant={'ghost'}
              disabled={selectedValues.length === 0}
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
            >
              <XIcon size={20} />
            </Button>
          </div>
        </div>
      </PopoverTrigger>

      <PopoverContent>
        <Command className={`${cn(element.slots?.popoverContent)}`}>
          <CommandList
            className={`${cn('grid gap-2 px-0 w-full', element.slots?.list)}`}
          >
            {element.options?.map((option, index) => {
              const isSelected = selectedValues.includes(option.value);
              return (
                <CommandItem
                  key={index}
                  onSelect={() => toggleOption(option.value)}
                  className={`${cn('cursor-pointer', element.slots?.listItem)}`}
                >
                  <div
                    className={cn(
                      'mr-2 flex h-5 w-5 items-center justify-center rounded-sm border border-primary',
                      element.slots?.checkbox,
                      isSelected
                        ? `${cn(
                            'bg-primary text-primary-foreground',
                            element?.slots?.selectedValue
                          )}`
                        : 'opacity-50 [&_svg]:invisible'
                    )}
                  >
                    <CheckIcon className="h-4 w-4 text-white" />
                  </div>

                  <span
                    className={`${cn(
                      'text-base',
                      element.slots?.listItemLabel
                    )}`}
                  >
                    {option.label}
                  </span>
                </CommandItem>
              );
            })}
          </CommandList>

          <CommandGroup>
            <div className="flex justify-center items-center gap-4">
              {selectedValues.length > 0 && (
                <>
                  <Button
                    variant={'ghost'}
                    onClick={handleClear}
                    className={`${cn(
                      'flex-1 justify-center cursor-pointer',
                      element.slots?.actionButton as string
                    )}`}
                  >
                    Clear
                  </Button>
                  <Separator
                    orientation="vertical"
                    className="flex min-h-6 h-full"
                  />
                </>
              )}
              <Button
                variant={'ghost'}
                onClick={() => {
                  setIsPopoverOpen(false);
                }}
                className={`${cn(
                  'flex-1 justify-center cursor-pointer',
                  element.slots?.actionButton as string
                )}`}
              >
                Close
              </Button>
            </div>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
});

TagsInput.displayName = 'TagsInput';
