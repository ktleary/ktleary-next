export default function MdxLayout({children}: {children: React.ReactNode}) {
  // Create any shared layout or styles here
  return (
    <div className=" p-4 m-4 w-full h-full text-xl">
      {children}
    </div>
  );
}
