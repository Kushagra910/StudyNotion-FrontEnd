import { toast } from "react-hot-toast";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { settingsEndpoints } from "../apis";
import { logout } from "./authApi";
// import { useSelector } from "react-redux";
const {
  UPDATE_DISPLAY_PICTURE_API,
  UPDATE_PROFILE_API,
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,
} = settingsEndpoints;
// const { GET_USER_DETAILS_API } = profileEndpoints;

export function updateDisplayPicture(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector(
        "PUT",
        UPDATE_DISPLAY_PICTURE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(
        "UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
        response
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Display Picture Updated Successfully");
      dispatch(setUser(response.data.data));
    } catch (error) {
      console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error);
      toast.error("Could Not Update Display Picture");
    }
    toast.dismiss(toastId);
  };
}

export function updateProfile(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      });
      console.log("UPDATE_PROFILE_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      // const userImage =   response.data.userDetails && response.data.userDetails.image
      //   ? response.data.userDetails?.image
      //   : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.userDetails.firstName} ${response.data.userDetails.lastName}`
      // dispatch(
      //   setUser({ ...response.data.userDetails, image: userImage })
      // )
      // dispatch(setUser({...response.data.userDetails,}))
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log("UPDATE_PROFILE_API API ERROR............", error);
      toast.error("Could Not Update Profile");
    }
    toast.dismiss(toastId);
  };
}

export async function changePassword(token, formData) {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CHANGE_PASSWORD_API, formData, {
      Authorization: `Bearer ${token}`,
    });
    console.log("CHANGE_PASSWORD_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("Password Changed Successfully");
  } catch (error) {
    console.log("CHANGE_PASSWORD_API API ERROR............", error);
    toast.error(error.response.data.message);
  }
  toast.dismiss(toastId);
}

export function deleteProfile(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
        Authorization: `Bearer ${token}`,
      });

      console.log("DELETE_PROFILE_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Profile Deleted Successfully");
      dispatch(logout(navigate));
    } catch (error) {
      console.log("DELETE_PROFILE_API API ERROR............", error);
      toast.error("Could Not Delete Profile");
    }
    toast.dismiss(toastId);
  };
}

// export function getUpdatedUser(token, navigate) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...");

//     try {
//       const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
//         Authorization: `Bearer ${token}`,
//       });

//       console.log("GET_USER_DETAILS_API API RESPONSE............", response);

//       if (!response.data.success) {
//         throw new Error(response.data.message);
//       }

//       const updatedUserDetails = response.data.userDetails;
//       if (!updatedUserDetails) {
//         throw new Error("Invalid response: 'updatedUserDetails' not found");
//       }

//       const {user} = useSelector((state)=>state.profile);
//       const updatedUser = {
//         ...user,
//         additionalDetails: updatedUserDetails.additionalDetails,
//       };
//       console.log("currentUser",user);
//       console.log("updatedUser",updatedUser);
//       localStorage.setItem("user", JSON.stringify(updatedUser));
//       // Dispatch action to update Redux state
//       dispatch(setUser(updatedUser));

//       toast.success("Profile Fetched Successfully");
//     } catch (error) {
//       console.log("GET_USER_DETAILS_API_ERROR............", error);
//       toast.error(error.response?.data?.message || "An error occurred");
//     }

//     toast.dismiss(toastId);
//     navigate("/dashboard/my-profile");
//   };
// }
