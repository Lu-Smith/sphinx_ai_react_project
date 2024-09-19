import React from 'react';
import { motion } from 'framer-motion';

const HomePage:React.FC = () => {
    return ( 
        <div className="HomePage">
            <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}    
            transition={{ duration: 0.8 }}>
                Welcome <span>to the friendly</span> Student Managment Hub
            </motion.h1>
            <p>Empowering students to achieve their potential with AI support, while making life easier for teachers!</p>
        </div>
     );
}

export default HomePage;