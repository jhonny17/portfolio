export const Footer = () => {
  const date = new Date();

  return (
    <footer className="flex w-full h-20 justify-center bg-neutral-950 p-2 md:px-8 shadow-top shadow-gray-600">
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-sm text-gray-400">
          Jhonny Vargas Arias © {date.getFullYear()}
        </p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
    </footer>
  );
};
