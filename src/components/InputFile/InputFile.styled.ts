import styled from "@emotion/styled";
import {
  IconButton as IconButtonMUI,
  TextField as TextFieldMUI,
} from "@mui/material";

export const TextField = styled(TextFieldMUI)`
  .MuiInputBase-root {
    display: flex;
    padding-right: 0;
    justify-content: space-between;
    margin-top: 12px;
    align-items: flex-start;
  }
  .MuiInputBase-input {
    width: 0;
  }
  .MuiFormLabel-root {
    margin-top: 12px;
  }
`;

export const ButtonContainer = styled("div")`
  width: 80px;
  display: flex;
  justify-content: end;
  margin-right: 6px;
`;

export const IconButton = styled(IconButtonMUI)`
  margin-top: 8px;
  padding: 8px;
`;
