import React, { useRef } from "react";
import { useFormik } from "formik";
import "./App.css";
import * as yup from "yup";

import { IconClip } from "./assets";
import { InputFile } from "./components/InputFile/InputFile";

interface FormValues {
  name: string;
  birthday: any;
  email: string;
  files: File[];
}

const INITIAL_VALUES: FormValues = {
  name: "",
  birthday: new Date(),
  email: "",
  files: [],
};

function App() {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: yup.object({
      name: yup.string().required("Required"),
      birthday: yup
        .date()
        .nullable()
        .required("Required")
        .typeError("Invalid date"),
      email: yup.string().email("Invalid email").required("Required"),
      files: yup.array().max(3, "Max limit exceded"),
    }),
    onSubmit: () => {},
  });

  return (
    <div className="App">
      <InputFile
        label="Add files: Max 5Mb"
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
        label="Add files: Max 5Mb"
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
        label="Add files: Max 5Mb"
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
