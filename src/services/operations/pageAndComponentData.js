import { toast } from "react-hot-toast";
import { catalogData } from "../apis";
import {apiConnector} from '../apiConnector';


export async function getCatalogPageData (categoryId) {
    let result = [];
    console.log("category ID->" , categoryId);
    const toastId = toast.loading("Loading...");
    try{
      const response = await apiConnector("POST",catalogData.CATALOGPAGEDATA_API,
      {categoryId:categoryId});
      if(!response?.data?.success){
        throw new Error("Could not fetch category page data");
      }

      result = response?.data;

    } catch(err){
      console.log("CATALOG PAGE DATA API ERROR", err);
      toast.error(err.message);
      result = err.response?.data;


    }
    toast.dismiss(toastId);
    return result;
}