function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex flex-col items-center gap-2">
      <img
        src="/pic.jpg"
        alt="Profile"
        className="w-24 h-24 rounded-full"
      />
      <p>Tubod, Iligan City</p>
      <p>miguelpaolobarafon.202301454@gmail.com</p>
    </header>
  );
}

export default Header;
