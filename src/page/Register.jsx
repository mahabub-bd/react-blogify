import { RegisterForm } from "../components";

export default function RegisterPage() {
  return (
    <main className="min-h-[75vh]">
      <section className="container ">
        <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
}
