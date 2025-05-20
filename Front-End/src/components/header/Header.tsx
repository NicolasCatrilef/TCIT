import logo from "../../assets/TCIT.png";

const Header = () => {
  return (
    <div className="flex flex-row items-center p-4 shadow-lg border-md shadow-[#4CB6AC]/30" >
      <img src={logo} alt="principal img TCIT" className="w-30" />
      <div className="flex-1 flex justify-center">
        <h1 className="text-xl font-semibold text-[#4CB6AC]/80">Desafío Técnico</h1>
      </div>
    </div>
  );
};

export default Header;
