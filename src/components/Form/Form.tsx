import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must at least 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, { message: "Age must at least 18" }),
});

// alternative structure with zod
type FormData = z.infer<typeof schema>;

// without zod
// interface FormData {
//   name: string;
//   age: number;
// }

const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  //  without react hook form
  // const [person, setPerson] = useState({ name: "", age: "" });

  const {
    register,
    handleSubmit,
    formState: { errors }, //destructure
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  console.log(errors);

  //  without react hook form
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   // if (nameRef.current !== null) {
  //   //   person.name = nameRef.current.value;
  //   // }
  //   // if (ageRef.current !== null) {
  //   //   person.age = parseInt(ageRef.current.value);
  //   // }

  //   console.log(person);
  // };

  const onSubmit = (data: FieldValues) => {
    console.log("--- data ---");
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            //  without react hook form
            // onChange={(event) =>
            //   setPerson({ ...person, name: event.target.value })
            // }
            // value={person.name}
            // ref={nameRef}

            // with react hook form
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
          {/* without zod */}
          {/* {errors.name?.type === "required" && (
            <p className="text-danger">The name field is required.</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">The name must at least 3 characters.</p>
          )} */}
          {errors.name && <p className="text-danger">{errors.name.message}.</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            // onChange={(event) =>
            //   setPerson({ ...person, age: event.target.value })
            // }
            // value={person.age}
            // ref={ageRef}
            // with react hook form
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && <p className="text-danger">{errors.age.message}.</p>}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Form;
