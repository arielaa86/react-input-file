import { IconButton } from "@mui/material";
import React, { forwardRef, useRef } from "react";
import { Chip } from "./FileChip/Chip.styled";
import * as S from "./InputFile.styled";

interface InputFileProps {
  variant: "filled" | "standard" | "outlined";
  label?: string;
  icon: React.ReactNode;
  multiple?: boolean;
  files: File[];
  error: boolean;
  helperText: React.ReactNode;
  onChange: (files: File[]) => void;
  onDelete: (file: File) => void;
}

export const InputFile = ({
  variant,
  label,
  icon,
  multiple,
  files,
  error,
  helperText,
  onChange,
  onDelete,
}: InputFileProps) => {
  const ref = useRef<any>(null);

  return (
    <>
      <S.TextField
        type={"file"}
        fullWidth
        label={label}
        inputRef={ref}
        variant={variant}
        onChange={() => {
          if (ref?.current?.files) {
            if (multiple) {
              const fileList = ref?.current?.files;
              //@ts-ignore
              const newFiles: File[] = Array(fileList.length)
                .fill(0)
                .map((elem, index) => fileList.item(index))
                .filter((file) => file !== null);

              onChange([...files, ...newFiles]);
            } else {
              onChange([ref?.current?.files[0]]);
            }
          }
        }}
        error={error}
        helperText={helperText}
        inputProps={{
          multiple: multiple,
        }}
        InputProps={{
          startAdornment:
            files.length === 0 ? undefined : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "75%",
                  marginTop: 24,
                  flexGrow: 1,
                }}
              >
                {files.map((file, index) => (
                  <Chip
                    key={`${file.name}-${index}`}
                    label={file.name}
                    onDelete={() => onDelete(file)}
                  />
                ))}
              </div>
            ),
          endAdornment: (
            <S.ButtonContainer>
              <S.IconButton onClick={() => ref?.current?.click()}>
                {icon}
              </S.IconButton>
            </S.ButtonContainer>
          ),
        }}
      />
    </>
  );
};
