import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thanks for the Message!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    console.log(data)
    create({
      variables: {
        input: data,
      },
    })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Toaster />

      <Form
        onSubmit={onSubmit}
        className="form"
        formMethods={formMethods}
        error={error}
      >
        <FormError error={error} errorClassName="error" />
        <Label name="name" wrapperClassName="form-error">
          Name
        </Label>
        <TextField name="name" validation={{ required: true }} />
        <FieldError name="name" className="error" />
        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
          }}
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField name="message" validation={{ required: true }} />
        <FieldError name="message" className="error" />

        <Submit className="sendButton" disabled={loading}>
          Send
        </Submit>
      </Form>
    </>
  )
}

export default ContactPage
