
export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="min-h-screen h-[80vh]  relative my-auto py-5  max-w-7xl mx-auto ">
          {children}
        </div>
    )
  }
  