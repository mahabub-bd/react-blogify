import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-[75vh]">
      <section className="container">
        <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
          <h2 className="text-xl font-semibold mb-10 text-center">
            Login in with your credential
          </h2>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
