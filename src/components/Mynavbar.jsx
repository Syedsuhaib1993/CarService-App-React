import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Navigate, useNavigate } from "react-router-dom";
import { logonav } from "../images"; 
import { Link } from "@heroui/link";


export const AcmeLogo = () => {
    const login = !!localStorage.getItem('sb-ypzjiqjrqsagqkvkczow-auth-token')
    console.log(login);
    
  return (
    // <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    //   <path
    //     clipRule="evenodd"
    //     d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
    //     fill="currentColor"
    //     fillRule="evenodd"
    //   />
    // </svg>
    <Image isZoomed src={logonav} width={75}/>
  );
};

export default function Mynavbar() {
  const Navigate = useNavigate() 
  const handlelogout = ()=>{
    localStorage.removeItem('sb-ypzjiqjrqsagqkvkczow-auth-token')
      Navigate('/signin')
  }
  return (
    <Navbar className="bg-orange-500 text-white">
      <NavbarBrand>
        <AcmeLogo className="pr-6"/>
        <p className="font-bold text-inherit mr-3"><span className="mr-4">  </span>CarDeal</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="" href="/home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link  href="#">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="" href="/about">
            About 
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <Button 
      className="bg-orange-400 text-white hover:text-orange-500 hover:bg-white"
      onPress={handlelogout}>
      Log Out
      </Button>
      </NavbarContent>
    </Navbar>
  );
}
