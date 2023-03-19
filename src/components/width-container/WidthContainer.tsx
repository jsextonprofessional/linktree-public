export const WidthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-around h-screen py-4 space-y-2 mx-auto lg:px-8 lg:mx-96">
      {children}
    </div>
  );
};
