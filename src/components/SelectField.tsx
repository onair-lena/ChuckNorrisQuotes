import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

type TProps = {
  open: boolean;
  handleOpen: () => void;
  handleChange: (event: SelectChangeEvent<string>) => void;
  options: string[];
  value: string;
};

export const SelectField = ({
  open,
  handleOpen,
  handleChange,
  options,
  value,
}: TProps) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 250 }}>
      <InputLabel id="categories">Select category</InputLabel>
      <Select
        labelId="categories"
        id="categories"
        open={open}
        onClose={handleOpen}
        onOpen={handleOpen}
        value={value}
        label="Select category"
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
