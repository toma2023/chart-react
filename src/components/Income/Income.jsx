import Charts from "./Charts";
import Contribution from "./Contribution";
import Peers from "./Peers";


const Income = () => {
    return (
        <div className="md:p-16 p-2">
            <p className=" text-primary text-2xl font-serif font-bold">Retirement Income</p>
            <h1 className="mt-2 font-semibold text-4xl">Starting Year 2056</h1>
            <div className=" grid grid-cols-12 gap-3 md:gap-12 mt-7">
                <div className="col-span-12 w-[100%]  md:col-span-4">
                    <h2 className="text-4xl font-bold mt-8">$300,000</h2>
                    <p className="text-[#737373] my-3">My Goal</p>
                    <div className="h-1 w-[100%] bg-primary"></div>
                </div>
                <div className="col-span-6 md:col-span-4">
                    <h2 className="text-4xl font-bold mt-8">59%</h2>
                    <p className="text-[#737373] my-3"> Goal Achieved</p>
                    <div className="h-1 w-[100%] bg-primary"></div>
                </div>
                <div className="col-span-6 md:col-span-4">
                    <h2 className="text-4xl font-bold mt-8">$300</h2>
                    <p className="text-[#737373] my-3">Est. Monthly Income</p>
                    <div className="h-1 w-[100%] bg-primary"></div>
                </div>
            </div>
            <Contribution></Contribution>
            <Charts></Charts>
            <Peers></Peers>
        </div>
    );
};

export default Income;