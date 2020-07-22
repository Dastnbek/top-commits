import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const RadioBtn = ({ onChange }) => {
  return (
    <RadioGroup
      row
      aria-label="position"
      name="position"
      defaultValue="public"
      onChange={onChange}
    >
      <FormControlLabel
        value="public"
        control={<Radio color="primary" />}
        label="Public"
        labelPlacement="start"
      />

      <FormControlLabel
        value="private"
        control={<Radio color="primary" />}
        label="Private"
        labelPlacement="start"
      />
    </RadioGroup>
  );
};

export default RadioBtn;
