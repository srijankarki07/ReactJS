import { React, useState } from "react";
import { Formik, useFormik } from "formik";
import { phoneSchema } from "./PhoneSchema";

const Phone = () => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      model: "",
      RAM: "",
      storage: "",
      battery: "",
      color: "",
      year: "",
      price: "",
    },
    validationSchema: phoneSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form>
      <h1>Phone Registration</h1>
      <div className="input-block">
        <label className="input-label" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="string"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.Name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Name && formik.errors.Name && (
          <span>{formik.errors.Name}</span>
        )}

        <label className="input-label" htmlFor="model">
          Model
        </label>

        <input
          id="model"
          name="model"
          type="string"
          placeholder="Model"
          onChange={formik.handleChange}
          value={formik.values.model}
          onBlur={formik.handleBlur}
        />
        {formik.touched.model && formik.errors.model && (
          <span>{formik.errors.model}</span>
        )}

        <label className="input-label" htmlFor="RAM">
          RAM
        </label>
        <input
          id="RAM"
          name="RAM"
          type="number"
          placeholder="RAM"
          onChange={formik.handleChange}
          value={formik.values.RAM}
          onBlur={formik.handleBlur}
        />
        {formik.touched.RAM && formik.errors.RAM && (
          <span>{formik.errors.RAM}</span>
        )}

        <label className="input-label" htmlFor="storage">
          Storage
        </label>
        <input
          id="storage"
          name="storage"
          type="number"
          placeholder="Storage"
          onChange={formik.handleChange}
          value={formik.values.storage}
          onBlur={formik.handleBlur}
        />
        {formik.touched.storage && formik.errors.storage && (
          <span>{formik.errors.storage}</span>
        )}

        <label className="input-label" htmlFor="battery">
          Battery Capacity
        </label>
        <input
          id="battery"
          name="battery"
          type="number"
          placeholder="Battery Capacity"
          onChange={formik.handleChange}
          value={formik.values.battery}
          onBlur={formik.handleBlur}
        />
        {formik.touched.battery && formik.errors.battery && (
          <span>{formik.errors.battery}</span>
        )}

        <label className="input-label" htmlFor="color">
          Color
        </label>

        <input
          id="color"
          name="color"
          type="text"
          placeholder="Color"
          onChange={formik.handleChange}
          value={formik.values.color}
          onBlur={formik.handleBlur}
        />
        {formik.touched.color && formik.errors.color && (
          <span>{formik.errors.color}</span>
        )}

        <label className="input-label" htmlFor="year">
          Year
        </label>
        <input
          id="year"
          name="year"
          type="number"
          placeholder="Year"
          onChange={formik.handleChange}
          value={formik.values.year}
          onBlur={formik.handleBlur}
        />
        {formik.touched.year && formik.errors.year && (
          <span>{formik.errors.year}</span>
        )}

        <label className="input-label" htmlFor="price">
          Price
        </label>

        <input
          id="price"
          name="price"
          type="number"
          placeholder="Price"
          onChange={formik.handleChange}
          value={formik.values.price}
          onBlur={formik.handleBlur}
        />
        {formik.touched.price && formik.errors.price && (
          <span>{formik.errors.price}</span>
        )}
      </div>
      <button id="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Phone;
