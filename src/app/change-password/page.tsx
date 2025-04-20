"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { setUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { changePassword, logout } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { changePasswordValidation } from "./changePasswordValidation";

const ChangePassword = () => {
  const dispatch = useAppDispatch();
  const form = useForm({
    resolver: zodResolver(changePasswordValidation),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  // const { user: authUser, setIsLoading } = useUser();

  // const [reCaptchaStatus, setReCaptchaStatus] = useState(false);

  const router = useRouter();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await changePassword(data);

      if (res?.success) {
        toast.success(res?.message);

        await logout();
        dispatch(setUser({ user: null, token: null }));
        router.push("/login");
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-2 border-gray-300 rounded-[8px] flex-grow max-w-md w-full p-5 ">
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mt-8">Old Password</FormLabel>
                  <FormControl>
                    <Input
                      type="oldPassword"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      type="newPassword"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="mt-5 w-full bg-[#2058e7]  rounded-[8px] hover:bg-[#4e7bee] cursor-pointer"
            >
              {isSubmitting ? "Changing...." : "Submit"}
            </Button>
          </form>
        </Form>
        <p className="text-sm text-gray-600 text-center my-3">
          Do not have any account ?
          <Link href="/register" className="text-primary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ChangePassword;
