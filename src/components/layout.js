const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 pb-10">
      <a
        href="https://www.morimorig3.com/"
        className="font-righteous block text-center text-xl leading-none font-bold py-8 text-gray-100"
      >
        morimorig3.com
      </a>
      <main className="rounded-lg bg-gray-100 p-4">{children}</main>
    </div>
  );
};

export default Layout;
