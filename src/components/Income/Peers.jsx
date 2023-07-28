import { AiFillCaretDown } from "react-icons/ai";

const Peers = () => {
    return (
        <div className="mt-7">
            <h3 className="font-semibold text-3xl mt-10">How do I compare to my peers?</h3>
            <p className="text-[#737373] text-xl my-3">These numbers represent current goal achievement</p>
            <div className="flex flex-col md:flex-row md:items-center ">
                <div>
                    <p className="font-semibold text-xl flex items-center mt-8">Age: Under 30 <span className="ml-2"><AiFillCaretDown></AiFillCaretDown></span></p>
                    <p className="font-semibold text-xl flex items-center mt-8">Salary: K 20 - K 30 <span className="ml-2"><AiFillCaretDown></AiFillCaretDown></span></p>
                    <p className="font-semibold text-xl flex items-center mt-8">Gander: Male <span className="ml-2"><AiFillCaretDown></AiFillCaretDown></span></p>
                </div>
                <div className="md:ml-60  mt-10 grid grid-cols-12 gap-4 md:gap-8">
                    <div className="col-span-4">
                        <div className=" radial-progress text-[#34d399]" style={{ "--value": 78 }}>78%</div>
                        <p className="text-[#737373] text-xl my-3 font-semibold">Average</p>
                    </div>
                    <div className="col-span-4">
                        <div className="radial-progress text-[#34d399]" style={{ "--value": 95 }}>95%</div>
                        <p className="text-[#737373] text-xl my-3 ml-6 font-semibold">Top</p>
                    </div>
                    <div className="col-span-4">
                        <div className="radial-progress text-[#34d399]" style={{ "--value": 59 }}>59%</div>
                        <p className="text-[#737373] text-xl my-3 ml-6 font-semibold">Me</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Peers;