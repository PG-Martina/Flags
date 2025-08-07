import Select from "react-select";
import "./_select.scss";
import type { Option } from "../../types/flagTypes";
import { useController, useFormContext } from "react-hook-form";

interface SelectProps {
  options: Option[];
  name: string;
}

function SelectDropdown({ options, name }: SelectProps) {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
    defaultValue: null,
  });
  return (
    <Select
      options={options}
      value={field.value}
      onChange={field.onChange}
      placeholder="Filter by region..."
      isSearchable={false}
      classNamePrefix="dropdown"
    />
  );
}

export default SelectDropdown;
