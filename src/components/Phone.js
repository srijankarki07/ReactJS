import { React, useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import { phoneSchema } from "./phoneSchema";
import axios from "axios";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { ScrollToFieldError } from "./ScrollToFieldError";
import { FaEdit } from "react-icons/fa";
const Phone = () => {
  const handleFormSubmit = async (values) => {
    try {
      const response = await axios({
        method: "post",
        url: process.env.REACT_APP_BACKEND_URL + "/phone/add",
        data: values,
      });

      console.log(response, "check");
      toast.success("Phone Added !");
      formik.resetForm();
    } catch (err) {
      console.log(err);
      toast.error("Phone Entry Error");
    }
  };
  const handleDeletePhone = (id) => async (e) => {
    setCalling(true);
    try {
      const response = await axios({
        method: "delete",
        url: process.env.REACT_APP_BACKEND_URL + `/phone/${id}`,
      });

      console.log(response, "check");
      toast.success("Phone Deleted !");
      formik.resetForm();
      setCalling(false);
      setConfirmDelete(false);
    } catch (err) {
      console.log(err);
      toast.error("Phone Deleting Error");
      setCalling(false);
    }
  };
  const nameRef = useRef(null);
  const modelRef = useRef(null);
  const RAMRef = useRef(null);
  const storageRef = useRef(null);
  const batteryRef = useRef(null);
  const colorRef = useRef(null);
  const yearRef = useRef(null);
  const priceRef = useRef(null);

  const [focused, setFocused] = useState(false);
  const [phones, setPhones] = useState([]);
  const [calling, setCalling] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [editMode, setEditMode] = useState(false);
  // const [foundPhone, setFoundPhone] = useState(Phone);

  //  const handlePressEnterAtPrice = (e) => {
  //   if (e.code === "Enter") {
  //     formik.handleChange
  //     priceRef.current?.focus();
  //   }

  const formik = useFormik({
    initialValues: {
      name: "",
      model: "",
      RAM: "",
      storage: "",
      battery: "",
      color: "",
      year: "",
      price: "",
    },
    validationSchema: phoneSchema,
    onSubmit: (values) => handleFormSubmit(values),
  });
  // console.log(process.env.REACT_APP_BACKEND_URL, formik.errors, "test url");
  useEffect(() => {
    const getPhonesList = async () => {
      try {
        const response = await axios({
          method: "get",
          url: process.env.REACT_APP_BACKEND_URL + "/phone",
        });
        console.log(response, "check");
        setPhones(response.data);
        formik.resetForm();
      } catch (err) {
        console.log(err);
        toast.error("Phone Listing error  ");
      }
    };
    getPhonesList();
  }, [formik.submitCount]);
  return (
    <div className="form">
      <h1 className="heading">Phone Registration</h1>
      <form>
        <div className="input-block">
          <label className="input-label" htmlFor="name">
            Name
          </label>

          <input
            className="input-box"
            id="name"
            name="name"
            type="string"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            ref={nameRef}
            onKeyUp={(e) =>
              e.code === "Enter" ? modelRef.current?.focus() : void 0
            }
          />
          {formik.touched.name && formik.errors.name && (
            <span className="form-error">{formik.errors.name}</span>
          )}

          <label className="input-label" htmlFor="model">
            Model
          </label>

          <input
            className="input-box"
            id="model"
            name="model"
            type="string"
            placeholder="Model"
            maxLength={5}
            onChange={formik.handleChange}
            value={formik.values.model}
            onBlur={formik.handleBlur}
            ref={modelRef}
            onKeyUp={(e) =>
              e.code === "Enter" ? RAMRef.current?.focus() : void 0
            }
          />
          {formik.touched.model && formik.errors.model && (
            <span className="form-error">{formik.errors.model}</span>
          )}

          <label className="input-label" htmlFor="RAM">
            RAM
          </label>
          <input
            className="input-box"
            id="RAM"
            name="RAM"
            type="number"
            placeholder="RAM"
            onChange={formik.handleChange}
            value={formik.values.RAM}
            onBlur={formik.handleBlur}
            ref={RAMRef}
            onKeyUp={(e) =>
              e.code === "Enter" ? storageRef.current?.focus() : void 0
            }
          />
          {formik.touched.RAM && formik.errors.RAM && (
            <span className="form-error">{formik.errors.RAM}</span>
          )}

          <label className="input-label" htmlFor="storage">
            Storage
          </label>
          <input
            className="input-box"
            id="storage"
            name="storage"
            type="number"
            placeholder="Storage"
            onChange={formik.handleChange}
            value={formik.values.storage}
            onBlur={formik.handleBlur}
            ref={storageRef}
            onKeyUp={(e) =>
              e.code === "Enter" ? batteryRef.current?.focus() : void 0
            }
          />
          {formik.touched.storage && formik.errors.storage && (
            <span className="form-error">{formik.errors.storage}</span>
          )}

          <label className="input-label" htmlFor="battery">
            Battery Capacity
          </label>
          <input
            className="input-box"
            id="battery"
            name="battery"
            type="number"
            placeholder="Battery Capacity"
            onChange={formik.handleChange}
            value={formik.values.battery}
            onBlur={formik.handleBlur}
            ref={batteryRef}
            onKeyUp={(e) =>
              e.code === "Enter" ? colorRef.current?.focus() : void 0
            }
          />
          {formik.touched.battery && formik.errors.battery && (
            <span className="form-error">{formik.errors.battery}</span>
          )}

          <label className="input-label" htmlFor="color">
            Color
          </label>

          <input
            className="input-box"
            id="color"
            name="color"
            type="string"
            placeholder="Color"
            onChange={formik.handleChange}
            value={formik.values.color}
            onBlur={formik.handleBlur}
            ref={colorRef}
            onKeyUp={(e) =>
              e.code === "Enter" ? yearRef.current?.focus() : void 0
            }
          />
          {formik.touched.color && formik.errors.color && (
            <span className="form-error">{formik.errors.color}</span>
          )}

          <label className="input-label" htmlFor="year">
            Year
          </label>
          <input
            className="input-box"
            id="year"
            name="year"
            type="date"
            placeholder="Year"
            onChange={formik.handleChange}
            value={formik.values.year}
            onBlur={formik.handleBlur}
            ref={yearRef}
            onKeyUp={(e) =>
              e.code === "Enter" ? priceRef.current?.focus() : void 0
            }
          />
          {formik.touched.year && formik.errors.year && (
            <span className="form-error">{formik.errors.year}</span>
          )}

          <label className="input-label" htmlFor="price">
            Price
          </label>

          <input
            className="input-box"
            id="price"
            name="price"
            type="number"
            placeholder="Price"
            onChange={formik.handleChange}
            value={formik.values.price}
            onBlur={formik.handleBlur}
            ref={priceRef}
            // onKeyUp={handlePressEnterAtQuantity}
          />
          {formik.touched.price && formik.errors.price && (
            <span className="form-error">{formik.errors.price}</span>
          )}
        </div>
        <ScrollToFieldError formik={formik} />
      </form>
      <button onClick={formik.handleSubmit}>Add Phone</button>

      {confirmDelete && (
        <div className="modal-body">
          <p>Are you sure you want to delete {selectedPhone.name}?</p>
          <button onClick={handleDeletePhone(selectedPhone._id)}>Delete</button>
          <button onClick={(e) => setConfirmDelete(false)}> Cancel </button>
        </div>
      )}

      <h2 className="heading">List of Phones [{phones.length}]</h2>
      <div className="phone-list">
        <div className="phone-heading">
          <span className="index">SN</span>
          <span className="name">Name</span>
          <span className="model">Model</span>
          <span className="RAM">RAM</span>
          <span className="storage">Storage</span>
          <span className="battery">Battery</span>
          <span className="color">Color</span>
          <span className="year">Year</span>
          <span className="price">Price</span>
        </div>

        {phones.map((phone, index) => (
          <div key={phone._id} className="phone-info">
            <span className="index">{index + 1}</span>
            <span className="name">{phone.name}</span>
            <span className="model">{phone.model} </span>
            <span className="RAM">{phone.RAM} GB</span>
            <span className="storage">{phone.storage} GB</span>
            <span className="battery">{phone.battery} mAh</span>
            <span className="color">{phone.color}</span>
            <span className="year">{phone.year}</span>
            <span className="price">{phone.price}</span>

            <div className="edit" title="Edit">
              <FaEdit
                onClick={(e) => {
                  setEditMode(true);
                  formik.setValues({ ...phone });
                }}
              />
            </div>
            <div className="delete" title="Delete">
              <MdDelete
                onClick={(e) => {
                  setSelectedPhone(phone);
                  setConfirmDelete(true);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phone;
