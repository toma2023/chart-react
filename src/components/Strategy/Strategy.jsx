import { AiOutlineRight } from "react-icons/ai";


const Strategy = () => {
    return (
        <div className="pt-16">
            <div className="bg-slate-100 p-8">
                <h3 className="font-bold text-3xl">Retirement Strategy</h3>
                <h3 className="font-bold text-xl mt-7">Employee Contribution</h3>
                <span className="flex items-center font-bold">
                    <progress className="mt-7 progress w-[100%] mr-4 " value="12" max="100"></progress>
                    12%
                </span>


                <h3 className="font-bold text-xl mt-7">Retirement Age</h3>
                <span className="flex items-center font-bold">
                    <progress className="mt-7 progress w-[100%] text-primary  mr-4 " value="65" max="100"></progress>
                    65%
                </span>
                <div className="divider mt-7"></div>
                <h3 className="font-bold text-xl mt-7">Employer Contribution <span className="ml-6">8.4%</span> </h3>
                <h3 className="font-bold text-xl mt-7">Interest Rate <span className="ml-32 ">5%</span> </h3>
                <button className="w-[100%] btn btn-primary text-xl px-16  mt-7">Update</button><br />
                <button className="md:flex hidden btn btn-ghost mt-7 text-primary text-xl font-semibold items-center">
                    View Help Docs <span className="ml-1"><AiOutlineRight /></span>
                </button>

            </div>

            <div className="border-l-4 border-primary md:block hidden mt-8">
                <h3 className="ml-8 text-xl mt-7">Are you considering a <br /> <span className="font-bold">Housing Advance?</span> </h3>
                <p className="ml-8 text-[#737373] mt-2">Limited time reduced interest.</p>
                <button className="ml-4 btn btn-ghost mt-2 text-primary text-lg font-semibold">Learn More <span className="ml-2"><AiOutlineRight></AiOutlineRight> </span> </button>
            </div>
        </div>
    );
};

export default Strategy;