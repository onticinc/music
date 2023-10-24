import { forwardRef } from "react"

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, disabled, type="button", ...props }, ref) => {
    return (
        <button title="button">

        </button>
    )
})

Button.displayName = "Button";

export default Button