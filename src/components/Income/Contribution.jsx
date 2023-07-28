


const Contribution = () => {
    return (
        <div className="my-7">
            <h3 className="font-semibold text-3xl mt-10">Contributions Overtime</h3>
            <div className="flex items-center gap-2 md:gap-8">
                {/* <p className="mt-8 text-xl font-semibold">
                    <span className="inline-block w-4 h-4 bg-primary mr-2 rounded-full"></span>
                    <span className="text-[#737373]">Employer:</span> K 73,500
                </p> */}






                <p className="mt-8  text-xl font-semibold"> <div className="badge badge-primary badge-xs"></div>
                    <span className="text-[#737373] ml-2">Employer:</span> K 73,500</p>
                <p className="mt-8 text-xl font-semibold">
                    <div className="badge badge-primary badge-xs"></div>
                    <span className="text-[#737373] ml-2">Employee:</span> K 52,500</p>
                <p className="mt-8 text-xl font-semibold">
                    <div className="badge badge-primary badge-xs"></div>
                    <span className="text-[#737373] ml-2">Total Invest:</span> K 244,313</p>


            </div>
        </div>
    );
};

export default Contribution;