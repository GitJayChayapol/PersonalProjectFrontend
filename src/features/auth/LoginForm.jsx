import LoginInput from "./LoginInput";

export default function LoginForm() {
  return (
    <form className="grid gap-4">
      <LoginInput placeholder="Username" />
      <LoginInput type="password" placeholder="password" />
    </form>
  );
}
