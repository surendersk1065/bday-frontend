import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import M1 from "./M1";
import M2 from "./M2";
import M3 from "./M3";
import M4 from "./M4";
import M5 from "./M5";
import c1 from '../assets/c1.jpeg';
import c2 from '../assets/c2.jpeg';

const Memories = () => {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getMemories = async () => {
      try {
        const response = await axios.get("https://bday-backend-f6kc.onrender.com/memories");
        setMemories(response.data);
      } catch (error) {
        console.log("Error fetching memories:", error);
      } finally {
        setLoading(false);
      }
    };

    getMemories();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl font-medium text-white animate-pulse">
          Loading memoriesss...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-between items-center gap-6 px-4 py-8 max-w-7xl mx-auto">
      {/* Left Decorative Image */}
      <div className="hidden sm:flex justify-center items-center shrink-0">
        <img src={c1} alt="Decoration Left" className="w-28 sm:w-36 md:w-44 lg:w-50 h-auto object-contain" />
      </div>

      {/* Main Memory Content Area */}
      <div className="w-full md:w-[60%] lg:w-[70%] rounded-2xl p-4 sm:p-6 md:p-8">
        <Routes>
          <Route path="1" element={<M1 memory={memories[0]} />} />
          <Route path="2" element={<M2 memory={memories[1]} />} />
          <Route path="3" element={<M3 memory={memories[2]} />} />
          <Route path="4" element={<M4 memory={memories[3]} />} />
          <Route path="5" element={<M5 memory={memories[4]} />} />
          {/* Default to 1 if user hits /memories */}
          <Route path="/" element={<M1 memory={memories[0]} />} />
        </Routes>
      </div>

      {/* Right Decorative Image */}
      <div className="hidden sm:flex justify-center items-center shrink-0">
        <img src={c2} alt="Decoration Right" className="w-28 sm:w-36 md:w-44 lg:w-50 h-auto object-contain" />
      </div>
    </div>
  );
};

export default Memories;