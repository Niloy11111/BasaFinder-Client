"use client";

import SettingsForm from "@/components/SettingsForm";
import { useUser } from "@/context/UserContext";
import { SettingsFormData } from "@/lib/schemas";
import { setUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { updateUserProfile } from "@/services/User";
import { toast } from "sonner";

const TenantSettings = () => {
  const { user: authUser } = useUser();

  const dispatch = useAppDispatch();

  // if (isLoading) return <>Loading...</>;

  const handleSubmit = async (data: SettingsFormData, imageFiles: File[]) => {
    const toastId = toast.loading("Profile Updating... ");
    const formData = new FormData();

    const payload = {
      ...data,
    };

    formData.append("data", JSON.stringify(payload));

    formData.append("profilePhoto", imageFiles[0] as File);

    try {
      const res = await updateUserProfile(formData);

      // console.log("from upate", res?.data?.updatedProfile);
      if (res.success) {
        dispatch(
          setUser({
            user: res?.data?.updatedProfile,
            token: res?.data?.accessToken,
          })
        );
        toast.success("Profile Updated", { id: toastId });
      } else {
        toast.error(res.message, { id: toastId });
      }
    } catch (err) {
      toast.error(`Something went wrong: ${err}`, { id: toastId });
    }
  };

  return <SettingsForm onSubmit={handleSubmit} userType={authUser?.role} />;
};

export default TenantSettings;
