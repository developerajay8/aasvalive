
"use client";
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const Accordion: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ transitionDuration: "500ms" }}>
      <div  className='py-[20px] border-t-2'
        style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer'  }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-[26px] text-[#ffffff] leading-[32px] font-handel'>{title}</span>
        <span className='w-[24px] h-[24px] font-poppins'>{isOpen ? <FaMinus className='w-[24px] h-[18px]' /> : <FaPlus className='w-[24px] h-[24px]' /> }</span>
      </div>
      {isOpen && <div style={{ padding: '10px' }}>{content}</div>}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className='mt-10 border-b-2'>
      <Accordion title="Lorem Ipsum" content="This is the content for section 1." />
      <Accordion title="Lorem Ipsum" content="This is the content for section 2." />
      <Accordion title="Lorem Ipsum" content="This is the content for section 3." />
      <Accordion title="Lorem Ipsum" content="This is the content for section 4." />
    </div>
  );
};

export default Home;
