import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Portfolio:NextPage =()=>{
    let mainHeading:any = useRef(null);
	let project1 = useRef(null);
    const bgPrimary = "bg-black"
    const bgCard = "bg-black"
    return(
        // <h1 className="text-3xl font-bold underline bg-red-800">
        // Hello world!
        // </h1>
        <div>
            <section>
                <h1>HI</h1>
                <div>
                <Image
                    src="/mountains.jpg"
                    alt='mountains'
                    layout='fill' 
                    // width='100vw'
                    // height="auto"
                    // width= "100"
                    // height= "100"

                >
                </Image>
                </div>
                <h1>H!</h1>
            </section>

        </div>
        // <div 
        //     //className="bg-primary " //{bgPrimary}
        //     className = "bg-black" 
        // >
		// 	<section className="sm:flex-col md:flex-row lg:flex-row-reverse lg:h-screen lg:relative bg-red-200 max-h-screen">
		// 		<Image

        //             //className ='max-h-screen'
		// 			//className="md:z-0 max-full relative object-cover object-center md:h-screen md:max-h-screen lg:absolute lg:right-0"
		// 			//src="/favicon.ico"
        //             src="/mountains.jpg"
        //             //src="https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
		// 			alt="Mountain in the clouds"
        //             layout ='fill'
        //             objectFit ='cover'
        //             objectPosition = 'center'
        //             // layout='responsive'
        //             // //layout='fill'
        //             // height="1"
        //             // width= "1"
        //             // ref={(el) => {
		// 			// 	mainHeading = el;
		// 			// }}
		// 		/>
        //         <div
        //             //className='md:z-10'
		// 			className={"py-10 md:absolute md:top-0 md:left-0 flex flex-col justify-center md:z-10 md:w-1/2 md:h-screen px-10 md:px-20 text-white "+ bgCard + {/*opacity-0 */}}
		// 			// ref={(el) => {
		// 			// 	mainHeading = el;
		// 			// }}
		// 		>
		// 			<h1 className="py-2 text-4xl md:text-6xl text-white">
		// 				Jacob Prudent
		// 			</h1>
		// 			<p className="py-10 text-3xl ">
		// 				Adept with React and Node, I am a full stack developer, who loves mastering new skills and
		// 				discovering a challenge.
		// 			</p>
		// 			<div className="display flex">
		// 				<button
		// 					className="px-1 py-2 md:py-4 mx-1 border border-white text-white bg-transparent rounded-full hover:bg-primary hover:text-white lg:w-1/2 text-lg outline-none"
		// 					//onClick={executeScroll}
		// 				>
		// 					View My Projects
		// 			</button>
		// 				<button
		// 					className="px-1 py-2 md:py-4 mx-1 border border-white text-white bg-transparent rounded-full hover:bg-primary hover:text-white lg:w-1/2 text-lg outline-none"
		// 					//I need to write a script to scroll to the first project
		// 					//onClick={() => { openOverlay("AboutMe") }}
		// 				>
		// 					About Me
		// 			</button>
		// 			</div>
		// 		</div>
                
		// 	</section>
		// 	{/* <section ref={project1}>
		// 		<ProjectCard
		// 			pic={WhiteCat}
		// 			picOnLeft={false}
		// 			picAlt="Mischievous Magical Cat"
		// 			cardTitle="Sorting Hat"
		// 			cardDesc="Quiz web application to sort prospective tech students into relevant tracks of education."
		// 			overlayName="SortingHat"
		// 		/>
		// 	</section>
		// 	<section>
		// 		<ProjectCard
		// 			pic={Zebra}
		// 			picOnLeft={true}
		// 			picAlt="Zebra Hide Closeup"
		// 			cardTitle="Africa Connected"
		// 			cardDesc="A simple small online marketplace for posting and viewing wares"
		// 			overlayName="Market"
		// 		/>
		// 	</section>
		// 	<section>
		// 		<ProjectCard
		// 			pic={Wall}
		// 			picOnLeft={false}
		// 			picAlt="Vines growing on a white wall"
		// 			cardTitle="Game of Life"
		// 			cardDesc="Emergent order from simple rules. Conway's game of life show's the marvel of cellular automatons."
		// 			overlayName="GameOfLife"
		// 		/>
		// 	</section>
		// 	<ContactNav /> */}
		// </div >
    )
}

export default Portfolio