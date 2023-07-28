import UserDetails from './UserDetails';


import Income from './Income/Income';
import Strategy from './Strategy/Strategy';

const Home = () => {
    return (
        <div className='flex flex-col md:flex-row h-full w-full'>
            <div className='w-[100%] md:w-[25%] '>
                <UserDetails></UserDetails>
            </div>
            <div className='w-[100%] md:w-[50%] '>
                <Income></Income>
            </div>
            <div>
                <Strategy></Strategy>
            </div>
        </div>
    );
};

export default Home;