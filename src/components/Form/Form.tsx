import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  //  without react hook form
  // const [person, setPerson] = useState({ name: "", age: "" });

  const { register, handleSubmit } = useForm();
  console.log(register);

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
