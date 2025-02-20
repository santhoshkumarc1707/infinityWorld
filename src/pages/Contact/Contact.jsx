import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';


export default function ContactPage() {
 
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 p-6">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">We’d love to hear from you!</p>

        <div className="space-y-4">
          <p className="text-gray-700"> <span className='px-3'><FontAwesomeIcon icon={faPhone} /></span>74180 37909</p>
          <p className="text-gray-700"> <span className='px-3'><FontAwesomeIcon icon={faEnvelope} /></span>sales@infiniteholidays.world</p>
        </div>
      </motion.div>
    </div>
  );
}
