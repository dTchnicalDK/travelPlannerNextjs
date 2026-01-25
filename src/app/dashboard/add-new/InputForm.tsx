"use client";
import { createNewTrip } from "@/actions/createTrip";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { UploadButton } from "@/utils/uploadthing";

export function InputForm() {
  const [imageUrl, setImagUrl] = useState<string | null>(null);
  return (
    <Card className="w-1/2 flex justify-center items-center">
      <form
        action={(formData: FormData) => {
          console.log("image url", imageUrl);
          if (imageUrl) {
            formData.append("imageUrl", imageUrl);
            return createNewTrip(formData);
          }
        }}
        className="w-full max-w-lg"
      >
        <FieldGroup>
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
                      sizes="150"
                      className="rounded-lg py-5"
                    />
                  )}
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res && res[0].ufsUrl) {
                        setImagUrl(res[0].ufsUrl);
                      }
                      console.log("Files: ", res[0].ufsUrl);
                      alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                </main>
              </div>
            </Field>
          </FieldGroup>

          <Field orientation="horizontal" className="grid grid-cols-2 gap-3">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </Card>
  );
}
