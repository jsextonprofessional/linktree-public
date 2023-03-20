export const WidthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-around h-screen mx-auto pb-[65px] lg:py-[65px] lg:px-8 lg:mx-96">
      {children}
    </div>
  );
};
