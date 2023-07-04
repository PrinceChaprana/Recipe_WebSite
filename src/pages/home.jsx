import Veggie from "../components/Veggie";
import Popular from "../components/popular";
import {motion} from 'framer-motion'

function Home(){
    return(
        //this will add animation
        <motion.div
            animate={{opacity:1}}
            initial={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.5}}
        >
            <Veggie />
            <Popular />
        </motion.div>
    );
}

export default Home;