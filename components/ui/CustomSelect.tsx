import * as Select from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';

interface OptionValue {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: OptionValue[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onValueChange,
  options,
}) => {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
        <Select.Value />
        <Select.Icon asChild>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          className="relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
        >
          <Select.Viewport className="p-1 h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]">
            {options.map(option => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  <Select.ItemIndicator>
                    <Check className="h-4 w-4" />
                  </Select.ItemIndicator>
                </span>
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default CustomSelect;
