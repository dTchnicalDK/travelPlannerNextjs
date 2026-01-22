import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InputForm() {
  return (
    <form className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="title">Tour title here...</FieldLabel>
          <Input
            id="title"
            type="text"
            placeholder="eg: Tour to Mosco"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="description">Tour Descriptions</FieldLabel>
          <Textarea
            id="description"
            placeholder="Type your tour details here here."
          />
        </Field>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="startdate">Select tour start date</FieldLabel>
            <Input type="date" />
          </Field>
          <Field>
            <FieldLabel htmlFor="enddate">Select tour end date</FieldLabel>
            <Input type="date" />
          </Field>
        </FieldGroup>

        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
