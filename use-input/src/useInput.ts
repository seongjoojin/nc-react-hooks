import { useState } from "react";

export const useInput = (
  initialValue: string | string[] | undefined,
  validator?: (value: string | string[]) => boolean
) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (validator) {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
