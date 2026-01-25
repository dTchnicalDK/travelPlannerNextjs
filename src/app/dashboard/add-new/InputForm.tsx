"use client";
import { createNewTrip, revalidateDashboard } from "@/actions/createTrip";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useTransition } from "react";
import { UploadButton } from "@/utils/uploadthing";

export function InputForm() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmitAction = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    // Validate image URL
    if (!imageUrl) {
      setError("Please upload an image first");
      return;
    }
    const formData = new FormData(event.currentTarget);
    formData.append("imageUrl", imageUrl);

    startTransition(async () => {
      try {
        const result = await createNewTrip(formData);
        if (result?.success) {
          setSuccess(true);
          (event.target as HTMLFormElement).reset();
          setImageUrl("");
          // Revalidate dashboard after successful creation
          await revalidateDashboard();
          // Redirect after a delay
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 1500);
        } else if (result?.message) {
          setError(result.message);
        }
      } catch (error) {
        console.log("form submit error", error);
        setError("something went wrong creating new trip!");
      }
    });
  };
  return (
    <Card className="w-1/2 flex justify-center items-center">
      <form onSubmit={handleSubmitAction} className="w-full max-w-lg">
        <FieldGroup>
          {/* Success/Error Messages */}
          {success && (
            <div className="p-3 bg-green-100 text-green-700 rounded-md">
              Trip created successfully!
            </div>
          )}

          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          <Field>
            <FieldLabel htmlFor="title">Tour title here...</FieldLabel>
            <Input
              name="title"
              type="text"
              placeholder="eg: Trip to Mosco"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="description">Tour Descriptions</FieldLabel>
            <Textarea
              name="description"
              placeholder="Type your tour details here here."
            />
          </Field>
          <FieldGroup className="grid grid-cols-2 gap-2">
            <Field>
              <FieldLabel htmlFor="startdate">
                Select tour start date
              </FieldLabel>
              <Input type="date" name="startdate" />
            </Field>
            <Field>
              <FieldLabel htmlFor="enddate">Select tour end date</FieldLabel>
              <Input type="date" name="enddate" />
            </Field>
          </FieldGroup>
          <FieldGroup>
            <Field>
              <div>
                {/* upload things upload buttton and preview */}
                <main className="flex h-full flex-col items-center justify-between p-24">
                  {/* uploaded image preview */}
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt="uploading image"
                      sizes="200"
                      className="rounded-lg py-5"
                    />
                  )}
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res && res[0].ufsUrl) {
                        setImageUrl(res[0].ufsUrl);
                        setError(null); // Clear any previous errors
                      }
                      console.log("Files: ", res[0].ufsUrl);
                      alert("Image Uploaded! click ok to continue!");
                    }}
                    onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                </main>
                {/* Hidden input to store imageUrl for form submission */}
                <input
                  type="hidden"
                  name="imageUrl"
                  defaultValue={imageUrl || ""}
                />
              </div>
            </Field>
          </FieldGroup>

          <Field orientation="horizontal" className="grid grid-cols-2 gap-3">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            {/* <Button type="submit"  disabled={isPending}>Submit</Button> */}
            <Button
              type="submit"
              disabled={isPending || !imageUrl}
              className="flex items-center justify-center"
            >
              {isPending ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Creating...
                </>
              ) : (
                "Create Trip"
              )}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </Card>
  );
}
