import proyecto1 from '../assets/proyecto1.jpg';
import { useState } from 'react';
import reactsvg from '../assets/reactsvg.png';
import taildwindsvg from '../assets/taildwind.png';
import vitesvg from '../assets/vite.svg';

const Proyecto1 = () => {

  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    display: hovered ? 'block' : 'none',
    transition: 'display 1s ease',
  };

  const containerStyle = {
    backgroundImage: hovered ? 'none':`url(${proyecto1})` ,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'display 1s ease',
    boxShadow: hovered ? '0 10px 10px rgba(0, 0, 0, 0.5)' : '0 0 0 rgba(0, 0, 0, 0)',
  };

  return (
    <div
      className="p-6 text-center"
    >
      <div
        className="bg-white shadow-xl rounded-md p-8 h-80 w-80 flex flex-col justify-center items-center"
        style={containerStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={buttonStyle}
        >
          <h1 className='font-extrabold text-2xl'>Seguimiento de pacientes</h1>
          <h2 className='mt-2'>React - Taildwind - Vite</h2>
          <div className="flex justify-between h-8 m-6">
            <img src={reactsvg} alt="react"/>
            <img src={taildwindsvg} alt="taildiwndcss"/>
            <img src={vitesvg} alt="vite"/>
          </div>

          <button
            className="mt-2 bg-white hover:bg-gray-200 border border-gray-300 shadow-md text-black font-semibold py-2 px-4 rounded-md filter-none"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proyecto1;
