import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  //  without react hook form
  // const [person, setPerson] = useState({ name: "", age: "" });

  const {
    register,
    handleSubmit,
    formState: { errors }, //destructure
  } = useForm<FormData>();
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
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">The name field is required.</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">The name must at least 3 characters.</p>
          )}
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
            {...register("age")}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Form;
