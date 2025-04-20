import { SettingsFormData, settingsSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { selectCurrentUser } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hook";
import { SettingsFormProps } from "@/types";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import NMImageUploader from "./ui/core/NMImageUploader";
import ImagePreviewer from "./ui/core/NMImageUploader/ImagePreviewer";
import { Form, FormLabel } from "./ui/form";
import { CustomFormField } from "./ui/form/FormField";

const SettingsForm = ({ onSubmit, userType }: SettingsFormProps) => {
  const [editMode, setEditMode] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const userInfo = useAppSelector(selectCurrentUser);
  const router = useRouter();
  const initialData = {
    name: userInfo?.name,
    email: userInfo?.email,
    phoneNumber: userInfo?.phoneNumber,
  };
  const form = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: initialData,
  });

  const toggleEditMode = () => {
    setEditMode(!editMode);
    if (editMode) {
      form.reset(initialData);
    }
  };

  const handleSubmit = async (data: SettingsFormData) => {
    await onSubmit(data, imageFiles);
    setEditMode(false);
  };

  const handleChangePassowrd = () => {
    router.push("/change-password");
  };

  return (
    <div className="pt-8 pb-5 px-8">
      <div className="mb-5">
        <h1 className="text-xl font-semibold">
          {`${
            userType
              ? userType?.charAt(0)?.toUpperCase() + userType?.slice(1)
              : "User"
          } Settings`}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your account preferences and personal information
        </p>
      </div>
      <div className="bg-white rounded-xl p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <CustomFormField name="name" label="Name" disabled={!editMode} />
            <CustomFormField
              name="email"
              label="Email"
              type="email"
              disabled={!editMode}
            />
            <CustomFormField
              name="phoneNumber"
              label="Phone Number"
              disabled={!editMode}
            />

            <div className="">
              <FormLabel htmlFor="" className="font-semibold">
                Profile
              </FormLabel>
              {imagePreview?.length > 0 ? (
                <ImagePreviewer
                  className="max-w-max mt-2"
                  setImageFiles={setImageFiles}
                  imagePreview={imagePreview}
                  setImagePreview={setImagePreview}
                />
              ) : (
                <NMImageUploader
                  className="max-w-max mt-2"
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                  label="Upload Here"
                />
              )}
            </div>

            <div className="pt-4 flex justify-between">
              <div className="flex gap-5">
                <Button
                  type="button"
                  onClick={toggleEditMode}
                  className="bg-secondary-500 text-white hover:bg-secondary-600"
                >
                  {editMode ? "Cancel" : "Edit"}
                </Button>
                <Button
                  onClick={handleChangePassowrd}
                  type="button"
                  className="bg-secondary-500 text-white hover:bg-secondary-600"
                >
                  Change Passoword
                </Button>
              </div>
              {editMode && (
                <Button
                  type="submit"
                  className="bg-primary-700 text-white hover:bg-primary-800"
                >
                  Save Changes
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SettingsForm;
