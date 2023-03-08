export const WidthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-4 border-red-500 flex flex-col justify-between h-screen py-2 space-y-2 mx-auto lg:px-8 lg:mx-96">
      {children}
    </div>
  );
};
