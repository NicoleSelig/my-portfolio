import { FieldErrors } from "react-hook-form"
import { FormData } from "./interfaces"
import { ErrorMessage } from "@hookform/error-message"

type Props = {
    errors: FieldErrors<FormData>
    name: keyof FormData
}

export default function ContactError({errors, name}: Props) {
    return (<ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p className="text-accent" key={type}>⚠ {message}</p>
              ))
            : null;
        }}
    />)
}