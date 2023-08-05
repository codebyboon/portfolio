import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import linkedinIcon from 'public/images/linkedin-icon.png';
import githubIcon from 'public/images/github-icon.png';
import linkedinIcon2 from 'public/images/linkedin-icon-org.png';
import githubIcon2 from 'public/images/github-icon-org.png';

const iconVariants = {
  hovered: [linkedinIcon2, githubIcon2],
  notHovered: [linkedinIcon, githubIcon],
};

const IconLink = ({ href, imageIndex, alt }:{href:string, imageIndex: any, alt:string}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ scale: 1.2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
        
      <Image
        
        className={imageIndex===1 ? 'ml-2' : 'mr-2'}
        priority
        src={iconVariants[hovered ? 'hovered' : 'notHovered'][imageIndex]}
        alt={alt}
        width={40}
        height={40}
      />
    </motion.a>
  );
};

const Icons = () => {
  return (
    <div>
        <div className="flex">
            <IconLink href="https://www.linkedin.com/in/yee-boon-saw/" imageIndex={0} alt="LinkedIn" />
            <IconLink href="https://github.com/codebyboon" imageIndex={1} alt="Github" />
        </div>
        <div className="text-[10px] ml-2">
            Icons by <a target="_blank" href="https://icons8.com"><u className="text-[#ff8906]">Icons8</u></a>
        
        </div>
    </div>
    
  );
};

export default Icons;
