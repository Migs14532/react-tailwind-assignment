function SideBar() {
  return (
    <aside className="w-1/4 bg-gray-200 p-4">
      <h3 className="font-semibold">Navigation Menu</h3>
      <br></br>
      <ul className="space-y-5">
        <li className="hover:text-red-500 cursor-pointer">Home</li>
        <li className="hover:text-red-500 cursor-pointer">Profile</li>
        <li className="hover:text-red-500 cursor-pointer">Projects</li>
      </ul>
    </aside>
  );
}

export default SideBar;
