
export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="min-h-screen h-[80vh]  relative my-auto py-16  max-w-6xl mx-auto ">
          {children}
        </div>
    )
  }
  