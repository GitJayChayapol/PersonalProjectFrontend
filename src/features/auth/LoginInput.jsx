export default function LoginInput({
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="block w-96 rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-1 focus:ring-red-900"
      value={value}
      onChange={onChange}
    />
  );
}
