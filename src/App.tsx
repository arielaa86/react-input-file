import React, { useRef } from "react";
import { useFormik } from "formik";
import "./App.css";
import * as yup from "yup";

import { IconClip } from "./assets";
import { InputFile } from "./components/InputFile/InputFile";

interface FormValues {
  files: File[];
}

const INITIAL_VALUES: FormValues = {
  files: [],
};

function App() {
  const {
    values,
    errors,
    setValues,
  } = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: yup.object({
      files: yup.array().max(3, "Max limit exceded"),
    }),
    onSubmit: () => {},
  });

  return (
    <div className="App">
      <InputFile
        label="Add Files"
        variant="outlined"
        icon={<IconClip style={{ width: 24, height: 24, fill: "gray" }} />}
        multiple={true}
        files={values.files}
        onChange={(files: File[]) => {
          setValues({
            ...values,
            files: files,
          });
        }}
        onDelete={(selectedFile: File) =>
          setValues({
            ...values,
            files: values.files.filter((current) => current !== selectedFile),
          })
        }
        error={!!errors.files}
        helperText={errors.files as string}
      />

      <InputFile
        label="Add Files"
        variant="standard"
        icon={<IconClip style={{ width: 24, height: 24, fill: "gray" }} />}
        multiple={true}
        files={values.files}
        onChange={(files: File[]) => {
          setValues({
            ...values,
            files: files,
          });
        }}
        onDelete={(selectedFile: File) =>
          setValues({
            ...values,
            files: values.files.filter((current) => current !== selectedFile),
          })
        }
        error={!!errors.files}
        helperText={errors.files as string}
      />

      <InputFile
        label="Add Files"
        variant="filled"
        icon={<IconClip style={{ width: 24, height: 24, fill: "gray" }} />}
        multiple={true}
        files={values.files}
        onChange={(files: File[]) => {
          setValues({
            ...values,
            files: files,
          });
        }}
        onDelete={(selectedFile: File) =>
          setValues({
            ...values,
            files: values.files.filter((current) => current !== selectedFile),
          })
        }
        error={!!errors.files}
        helperText={errors.files as string}
      />
    </div>
  );
}

export default App;
