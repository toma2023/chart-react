import { GoHomeFill, GoSearch, GoPerson, GoProjectRoadmap } from "react-icons/go";
import { TiBusinessCard } from "react-icons/ti";



const NavBarbtm = () => {
    return (
        <div className="flex items-center justify-between px-5 h-[100%]" >
            <GoHomeFill className=" bg-primary rounded-md text-white p-2 w-9 h-9"></GoHomeFill>
            <GoProjectRoadmap className="w-9 h-9 "></GoProjectRoadmap>
            <TiBusinessCard className=" w-9 h-9"></TiBusinessCard>
            <GoPerson className=" w-9 h-9"></GoPerson>
            <GoSearch className=" w-9 h-9"></GoSearch>
        </div>
    );
};

export default NavBarbtm;