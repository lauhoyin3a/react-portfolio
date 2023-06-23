import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";


const Projects= () =>{
return (
    <section id="projects" className="pt-48 pb-48">
        {/* HEADING */}
    <motion.div
className="md:w-2/4 mx-auto text-center"
initial="hidden" whileInView="visible" 
viewport={{once: true, amount: 0.5}} 
transition={{duration:0.5}}
variants={{
hidden: { opacity: 0, y: -50 },
visible:{ opacity:1, y: 0 }
}}>
    <div>
    <p className="font-playfair font-semibold text-4xl">
         <span className="text-red">PRO</span>JECTS
    </p>
    <div className="flex justify-center mt-5">
        <LineGradient width="w-1/3"/>
    </div>
    </div>
    <LineGradient width="w-1/3" />
    <p className="mt-10 mb-10">
    this is a text

    </p>

</motion.div>

    </section>
)
}
export default Projects;