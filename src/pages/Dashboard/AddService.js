import React, { useEffect, useState } from "react";
import fetcher from "../../api";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const AddService = () => {
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (info) => {
    const service = {
      ...info,
      imageURL,
    };
    const { data } = await fetcher.post("/add-services", service);
    reset();
    setImageURL("");
    if (data.acknowledged) {
      toast.success("Service Added");
    }
  };
  const handleUploadImage = (e) => {
    setLoading(true);
    const image = e.target.files[0];
    const formData = new FormData();
    formData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=1acbd73a4a8ebea34491d15e22f67080",
        formData
      )
      .then((res) => {
        setLoading(false);
        setImageURL(res.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //
  useEffect(() => {
    // (async () => {
    //   const { data } = await fetcher.get("/get-services");
    //   console.log(data);
    // })();
    //
  }, []);
  //
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="rounded-xl bg-base-100 w-80">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service name</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Add Service name"
                  className="input input-bordered"
                  {...register("serviceName")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service price</span>
                </label>
                <input
                  required
                  type="number"
                  placeholder="Add Service price"
                  className="input input-bordered"
                  {...register("servicePrice")}
                />
              </div>
              <div className="form-control">
                <label htmlFor="uploadImage" className="label">
                  <span
                    className={
                      loading
                        ? "label-text btn btn-accent loading w-full mt-4"
                        : "label-text btn btn-accent  w-full mt-4"
                    }
                  >
                    Upload Image
                  </span>
                </label>
                <input
                  required
                  onChange={handleUploadImage}
                  id="uploadImage"
                  type="file"
                  placeholder="UploadAdd Image"
                  className="input input-bordered hidden"
                />
              </div>
              <div className="form-control ">
                <button
                  className={`btn btn-primary `}
                  disabled={imageURL ? false : true}
                >
                  Add Service
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
