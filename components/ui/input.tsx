
interface InputProps {
  type: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-3 py-2 border rounded outline-none text-darkGray"
    />
  )
}