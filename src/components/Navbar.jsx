import { BiBell } from "react-icons/bi";
import { GoHomeFill, GoSearch, GoPerson, GoProjectRoadmap } from "react-icons/go";
import { TiBusinessCard } from "react-icons/ti";
import butterfly from '../../public/btrflty-removebg-preview.png'
import { GoSignOut } from "react-icons/go";

const Navbar = () => {
    return (
        <div className="py-6 px-2">
            <img className="mt-5 w-10 h-10" src={butterfly} alt="" />
            <GoSearch className="mt-5 w-9 h-9"></GoSearch>
            <GoHomeFill className="mt-10 bg-primary rounded-md text-white p-2 w-9 h-9"></GoHomeFill>
            <GoProjectRoadmap className="mt-8 w-9 h-9 "></GoProjectRoadmap>
            <TiBusinessCard className="mt-10 w-9 h-9"></TiBusinessCard>
            <GoPerson className="mt-10 w-9 h-9"></GoPerson>
            <BiBell className="mt-[500px] w-9 h-9"></BiBell>
            <GoSignOut className="mt-12 w-9 h-9"></GoSignOut>
        </div>
    );
};

export default Navbar;