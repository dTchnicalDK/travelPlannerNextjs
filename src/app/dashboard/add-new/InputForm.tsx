import { createNewTrip } from "@/actions/createTrip";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InputForm() {
  return (
    <Card className="w-1/2 flex justify-center items-center">
      <form action={createNewTrip} className="w-full max-w-lg">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="title">Tour title here...</FieldLabel>
            <Input
              name="title"
              type="text"
              placeholder="eg: Tour to Mosco"
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
