

interface ButtonProps {
    onClick: () => void;
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button {...props}>
        {props.label}
    </button>
}

export default Button;