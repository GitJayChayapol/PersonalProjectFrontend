export default function DriverInput({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
  hasError,
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`block w-96 rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-1 focus:ring-red-900
            ${
              hasError
                ? "border-red-500 focus:ring-red-300"
                : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"
            }`}
      />
    </div>
  );
}
