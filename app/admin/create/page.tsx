"use client";
import { api } from "@/app/apiBase/axios";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function AdminCreateProduct() {
  const [step, setStep] = useState(1);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  console.log(id);


  const GetEditApiData = async() => {
    const editApi = await api.get(`product/getbyid/${id}`)
    console.log(editApi.data.data);
    setFormData(editApi.data.data)
    // setFormData(editApi.data)
  }
  
  useEffect(()=>{
    GetEditApiData() 
  },[])

  
  const [formData, setFormData] = useState({
    product_name: "",
    category: "",
    gender: "Unisex",
    price: "",
    size: "",
    rating: "",
    notes: "",
    sillage: "Intimate",
    longevity: "",
    occasion: "",
    season: "",
    // facebook: "",
    // twitter: "",
    // whatsapp: "",
    shareLinks:{
      facebook: "",
      twitter: "",
      whatsapp: "",
    },
    description: "",
    available: true,
    cover_images: [] as File[],
  });
  

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // const handleChange = (e: any) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));          
  // };
  const handleChange = (e: any) => {
  const { name, value, type, checked } = e.target;

  //  nested fields (shareLinks)
  if (name.startsWith("shareLinks.")) {
    const key = name.split(".")[1];
    // console.log(key);
    

    setFormData((prev) => ({
      ...prev,
      shareLinks: {
        ...prev.shareLinks,
        [key]: value,
      },
    }));
    return;
  }

  //  normal fields
  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};


  

  // console.log(formData.shareLinks.twitter);
  

 const sumbitbtn = async (e: React.FormEvent) => {
  e.preventDefault();

  const notesArray = Array.isArray(formData.notes)
    ? formData.notes
    : formData.notes
        .split(",")
        .map((note) => note.trim())
        .filter(Boolean);

  // Split existing URLs (strings) and new Files
  const existingImages = formData.cover_images.filter(img => typeof img === "string");
  const newImages = formData.cover_images.filter(img => img instanceof File);

  // Check total images
  const totalImagesCount = existingImages.length + newImages.length;

  if (!id && totalImagesCount < 3) {
    // ADD TIME validation
    Swal.fire({
      icon: "warning",
      title: "Minimum 3 Images Required",
      text: "Please select at least 3 product images before submitting.",
    });
    return;
  }

  if (id && totalImagesCount < 3) {
    // EDIT TIME validation
    Swal.fire({
      icon: "warning",
      title: "Minimum 3 Images Required",
      text: "Please ensure product has at least 3 images.",
    });
    return;
  }

  const formDataToSend = new FormData();
  newImages.forEach(file => formDataToSend.append("cover_images", file));

  try {
    // 🔥 IMAGE UPLOAD
    if (!id || newImages.length > 0) {
      const imageresponse = await api.post("uploads/image", formDataToSend);
      const uploadedUrls = imageresponse?.data?.cover_images || [];

      // Merge old + new images for edit
      formData.cover_images = id ? [...existingImages, ...uploadedUrls] : uploadedUrls;

      if (formData.cover_images.length < 3) {
        Swal.fire({
          icon: "error",
          title: "Upload Failed",
          text: "Image upload incomplete. Please try again.",
        });
        return;
      }
    }

    const payload = {
      ...formData,
      notes: notesArray,
    };

    if (!id) {
      await api.post("product/add", payload);
    } else {
      await api.put(`product/update/${id}`, payload);
    }
       
    setStep(1);
    setFormData({
      product_name: "",
      category: "",
      gender: "Unisex",
      price: "",
      size: "",
      rating: "",
      notes: "",
      sillage: "Intimate",
      longevity: "",
      occasion: "",
      season: "",
      shareLinks: {
        facebook: "",
        twitter: "",
        whatsapp: "",
      },
      description: "",
      available: true,
      cover_images: [] as File[],
    });

    Swal.fire({
      icon: "success",
      title: id ? "Product Updated" : "Product Added",
      text: id ? "Product has been updated successfully!" : "Product has been created successfully!",
    });

  } catch (error: any) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Something went wrong",
      text: "Please try again later.",
    });
  }
};

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => {
        const newImage = [...prev.cover_images];
        newImage[index] = file;
        return { ...prev, cover_images: newImage };
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="mx-auto px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-light tracking-wide">Perfume Admin</h1>
          <Link
            href="/admin"
            className="text-gray-400 hover:text-white transition"
          >
            ← Back to Products
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto px-8 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-light mb-3">Create New Product</h2>
          <p className="text-gray-400">
            Add a new luxury fragrance to your collection
          </p>
        </div>

        {/* Stepper Progress */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="parent flex justify-center items-center"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium transition-all ${
                    step >= num
                      ? "bg-white text-black"
                      : "bg-gray-800 text-gray-500 border-2 border-gray-700"
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-24 h-1 mx-4 transition-all ${
                      step > num ? "bg-white" : "bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-gray-900 rounded-3xl p-8 lg:p-12">
          <form className="space-y-10" onSubmit={sumbitbtn}>
            {step === 1 && (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light">Basic Information</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Enter the core details of the perfume
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="product_name"
                      placeholder="e.g., Velvet Oud"
                      value={formData.product_name}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:border-white transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      placeholder="e.g., Floral Oriental"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:border-white transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:border-white transition"
                      required
                    >
                      <option>Unisex</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      name="price"
                      placeholder="185"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:border-white transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Size
                    </label>
                    <input
                      type="text"
                      name="size"
                      placeholder="100ml"
                      value={formData.size}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:border-white transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Initial Rating
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      name="rating"
                      placeholder="4.8"
                      value={formData.rating}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:border-white transition"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-10 py-3 cursor-pointer bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
                  >
                    Next → Fragrance Profile
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light">Fragrance Profile</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Define the scent characteristics and usage
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Notes (comma separated)
                    </label>
                    <input
                      type="text"
                      name="notes"
                      placeholder="e.g., Floral, Spicy, Oud, Vanilla"
                      value={formData.notes}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:border-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Sillage
                    </label>
                    <select
                      name="sillage"
                      value={formData.sillage}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:border-white transition"
                    >
                      <option>Intimate</option>
                      <option>Moderate</option>
                      <option>Strong</option>
                      <option>Enormous</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Longevity
                    </label>
                    <input
                      type="text"
                      name="longevity"
                      placeholder="e.g., 6-8 hours"
                      value={formData.longevity}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:border-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Occasion (comma separated)
                    </label>
                    <input
                      type="text"
                      name="occasion"
                      placeholder="Party, Evening, Daily, Office"
                      value={formData.occasion}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:border-white transition"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Season (comma separated)
                    </label>
                    <input
                      type="text"
                      name="season"
                      placeholder="All Season, Winter, Summer, Spring"
                      value={formData.season}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:border-white transition"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-900 transition cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-10 py-3 bg-white cursor-pointer text-black rounded-full font-medium hover:bg-gray-200 transition"
                  >
                    Next → Media & Settings
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="space-y-8">
  <div>
    <label className="block text-sm font-medium text-gray-400 mb-4">
      Product Images (up to 3)
    </label>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[0, 1, 2].map((i) => (
        <div key={i} className="relative">
          {/* IMAGE PREVIEW CARD */}
        {formData.cover_images[i] && (
          <img
            src={
              typeof formData.cover_images[i] === "string"
                ? formData.cover_images[i]
                : URL.createObjectURL(formData.cover_images[i] as File)
            }
            alt={`Preview ${i + 1}`}
            className="object-cover w-full h-40 rounded-xl"
          />
        )}


          {/* FILE INPUT */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, i)}
            className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3"
          />
          <p className="text-gray-500 text-xs mt-2 text-center">Image {i + 1}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Social Share Links */}
  <div>
    <label className="block text-sm font-medium text-gray-400 mb-2">Social Share Links</label>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <input
        name="shareLinks.facebook"
        placeholder="Facebook URL"
        value={formData.shareLinks.facebook}
        onChange={handleChange}
        required
        className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3"
      />
      <input
        name="shareLinks.twitter"
        placeholder="Twitter URL"
        value={formData.shareLinks.twitter}
        onChange={handleChange}
        required
        className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3"
      />
      <input
        name="shareLinks.whatsapp"
        placeholder="WhatsApp URL"
        value={formData.shareLinks.whatsapp}
        onChange={handleChange}
        required
        className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3"
      />
    </div>
  </div>

  {/* Description */}
  <div className="grid grid-cols-1 mt-10">
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
      <textarea
        name="description"
        rows={5}
        placeholder="Describe the project here"
        value={formData.description}
        onChange={handleChange}
        className="w-full bg-black border border-gray-800 rounded-xl px-5 py-3 focus:outline-none focus:border-white transition"
        required
      />
    </div>
  </div>

  {/* Availability Toggle */}
  <div className="flex items-center justify-between py-6 border-t border-gray-800">
    <div>
      <h4 className="text-lg font-medium">Availability</h4>
      <p className="text-gray-400 text-sm">Set product as available for purchase</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        name="available"
        checked={formData.available}
        onChange={handleChange}
        className="sr-only peer"
      />
      <div className="w-14 h-8 bg-gray-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-600"></div>
    </label>
  </div>

  {/* Buttons */}
  <div className="flex justify-between mt-8">
    <button
      type="button"
      onClick={prevStep}
      className="px-8 py-3 border cursor-pointer border-gray-700 rounded-full font-medium hover:bg-gray-900 transition"
    >
      ← Back
    </button>
    <div className="flex gap-4">
      <Link
        href="/admin"
        className="px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-gray-900 transition"
      >
        Cancel
      </Link>
      <button
        type="submit"
        className="px-10 py-3 bg-white text-black cursor-pointer rounded-full font-medium hover:bg-gray-200 transition"
      >
        {id ? "Edit Product" : "Create Product"}
      </button>
    </div>
  </div>
</div>

              </>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}
