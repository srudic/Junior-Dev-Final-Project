import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

import { ACTIVITY_TYPES } from "../../utils/constants";

export default function MultipleSelectCheckmarks({ tag, handleChangeTag }) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={tag}
          onChange={handleChangeTag}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {ACTIVITY_TYPES.map((el) => (
            <MenuItem key={el.value} value={el.name}>
              <Checkbox checked={tag.indexOf(el.name) > -1} />
              <ListItemText primary={el.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
