"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { api } from "../apiBase/axios";
import Swal from "sweetalert2";
import {  useRouter, useSearchParams } from 'next/navigation'


// useParams
// import { AllProductsSection } from "../Components/AllProductsSection";


// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   gender: string;
//   rating: number;
//   price: number;
//   size: string;
//   isAvailable: boolean;
// }

export default function AdminProductsList() {
       const searchParams = useSearchParams();


     const router = useRouter()
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setdata] = useState([]);
  async function GetApiData() {
    setLoading(true);
    try {
      const response: any = await api.get("product/get");
      console.log(response.data.data);
      setdata(response.data.data);
      setLoading(false);
    } catch {
      console.log("error in api");
    }
  }

  useEffect(() => {
    GetApiData();
  }, []);

  // Delete
  const handleDelete = async (prouductId: number) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "This product will be permanently deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  });

  
  if (!result.isConfirmed) return;

    try {
      console.log(prouductId);

      const deleteData = await api.delete(`product/delete/${prouductId}`);
      console.log(deleteData);

      await GetApiData();

  
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Product has been deleted successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong while deleting product.",
      });
    }
  };


// uselocation()

  // edit    
  const handleEdit = ((product:any)=>{
    console.log(product);      
    router.push(`/admin/create?id=${product._id}`);
    const productId = searchParams.get("_id");
    console.log(productId); 
     


  
  })

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white"></div>
        <p className="ml-4 text-white text-lg">Loading products...</p>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-light tracking-wide">Perfume Admin</h1>
          <nav>
            <Link
              href="/admin/create"
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
            >
              + Create New Product
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10">
          <h2 className="text-4xl font-light mb-2">Products Management</h2>
          <p className="text-gray-400">
            Manage your perfume collection ({data.length} products)
          </p>
        </div>

        {/* Products Table */}
        <div className="bg-gray-950 border border-gray-900 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="text-left px-8 py-6 font-medium text-gray-300">
                  Name
                </th>
                <th className="text-left px-8 py-6 font-medium text-gray-300">
                  Category
                </th>
                <th className="text-left px-8 py-6 font-medium text-gray-300">
                  Gender
                </th>
                <th className="text-left px-8 py-6 font-medium text-gray-300">
                  Price
                </th>
                <th className="text-left px-8 py-6 font-medium text-gray-300">
                  Size
                </th>
                <th className="text-left px-8 py-6 font-medium text-gray-300">
                  Rating
                </th>
                <th className="text-left px-8 py-6 font-medium text-gray-300">
                  Status
                </th>
                <th className="text-left px-8 py-6 font-medium text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((product: any) => (
                <tr
                  key={product._id}
                  className="border-t border-gray-900 hover:bg-gray-900/30 transition"
                >
                  <td className="px-8 py-6 font-medium">
                    {product.product_name}
                  </td>
                  <td className="px-8 py-6 text-gray-300">
                    {product.category}
                  </td>
                  <td className="px-8 py-6 text-gray-300">{product.gender}</td>
                  <td className="px-8 py-6">Rs.{product.price}</td>
                  <td className="px-8 py-6 text-gray-300">{product.size}</td>
                  <td className="px-8 py-6">⭐ {product.rating}</td>
                  <td className="px-8 py-6">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        product.isAvailable
                          ? "bg-green-900/30 text-green-400"
                          : "bg-red-900/30 text-red-400"
                      }`}
                    >
                      {product.isAvailable ? "Available" : "Not Available"}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <button className="text-gray-400 hover:text-white mr-6 cursor-pointer" onClick={()=>handleEdit(product)}  >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:text-red-400 cursor-pointer"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
   
    </>

  );
}
