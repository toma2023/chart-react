import {AiFillCaretDown } from "react-icons/ai";

const UserDetails = () => {
    return (
        <div className="md:p-16 p-2 bg-slate-100 mb-4">
            <div className="flex mt-16 md:mt-0 gap-3 items-center">
                <div className="avatar ">
                    <div className="w-24 rounded-full">
                        <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                    </div>
                </div>
               
                <div>
                    <h2 className="font-bold text-5xl ml-4">Hi Mike,</h2>
                    <p className="ml-4  text-lg mt-2">welcome back.</p>
                </div>
            </div>
            <h4 className="text-2xl font-semibold mt-8">Today</h4>
            <h2 className="text-4xl font-bold mt-8">$19,892</h2>
            <p className="text-[#737373] mt-2">Account Balance</p>
            <h2 className="text-2xl font-bold mt-8">$4000</h2>
            <p className="text-[#737373] mt-2">Year-to-Date-Contributions</p>
            <h2 className="text-2xl font-bold mt-8">$1,892</h2>
            <p className="text-[#737373] mt-2">Total Interest</p>
            <button className="btn btn-primary mt-4">I want to <span><AiFillCaretDown></AiFillCaretDown></span></button>
            <h2 className="mt-16 text-xl font-bold">Recent Transactions </h2>
            <p className="text-[#737373] mt-8">2020-08-07</p>
            <h2 className="mt-4 text-xl font-bold">Withdrawal Transfer to Bank-XXX11</h2>
            <div className="divider"></div>
            <p className="text-[#737373] mt-8">2020-07-21</p>
            <h2 className="mt-4 text-xl font-bold">Withdrawal Transfer to Bank-XXX11</h2>
            <div className="divider"></div>
            <p className="text-[#737373] mt-8">2020-07-16</p>
            <h2 className="mt-4 text-xl font-bold mb-4">Withdrawal Transfer to Bank-XXX11</h2>
            <div className="divider mb-8"></div>
        </div>
    );
};

export default UserDetails;