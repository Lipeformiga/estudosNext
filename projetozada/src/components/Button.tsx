interface ButtonProps {
    text: string
    onClick: () => void
    className?: string
}


export default function Button(props: ButtonProps) {
    return (
        <button 
            className={`border-2 py-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-300 ${props.className}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}