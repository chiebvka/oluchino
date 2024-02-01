import Link from "next/link";
import AuthBanner from "../_components/AuthBanner";
import LoginForm from "./_components/LoginForm";


export default function Login() {

  return (
    <div className=' h-full border-2 w-11/12 mx-auto md:w-full border-palette rounded-lg'>
    <div className="container relative w-full h-full flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <AuthBanner imagesrc={"./logins.svg"} quotes={"Rumor has it that logging in here and building up a loyalty scrore gets you the best deals avilable online 💸 🛍️."} author={"A Little birdy"} />

        <div className="lg:p-8  flex items-center w-full h-full justify-center">
            <div className="mx-auto flex w-full flex-col justify-center  space-y-6 ">
                <div className="flex flex-col h-full space-y-2 text-center">
                <Link
                    href="/"
                    className="absolute right-8  top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                    >
                    <polyline points="15 18 9 12 15 6" />
                    </svg>{" "}
                    Back
                </Link>
                <h1 className="text-2xl font-semibold text-palette tracking-tight">
                    Sign In
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your login credentials
                </p>
                </div>
                <LoginForm />

            </div>
        </div>
    </div>
</div>
  );
}
