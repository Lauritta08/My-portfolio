import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.css"

function Homepage() {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        waitForAnimate: false
        };

    return (
       <div>
        <div>
        <Slider {...settings}>
            {data.map((d) => (
                <div className='h-auto relative w-auto border-b-4 border-b-black'>
                    <div className=' text-slate-100 text-3xl md:text-5xl font-semibold absolute left-6 md:left-32 h-full w-44 md:w-96 flex flex-row items-center'>
                        <p className="dancing-script-slide">{d.text}</p>
                    </div>
                    <div className='h-auto w-auto flex flex-row justify-end'>
                        <img src={d.img} alt="" className='h-70'/>
                    </div>
                    
                </div>
            ))}
        </Slider>
        </div>
        <div className="mt-16">
            <div className="flex flex-col  md:flex-row justify-center">
            <h1 className='first-letter kufam m-6'>LAURA</h1>
            <h1 className="first-letter kufam m-6">CHAIKOVSKA</h1>
            </div>
            <p className='font-semibold text-3xl kufam'>UI/UX designer</p>
        </div>
        
        <div className='md:w-2/3 bg-slate-100 p-5 mx-10 md:mx-52 my-8'>
            <p>Let’s get aquainted!</p>
            <p className='kufam mt-4'>
            The classroom was alive with the usual hum of students shuffling papers and 
            whispering to each other. I stood at the front, a teacher who had spent years 
            shaping young minds, using the chalkboard as my canvas and words as brushstrokes 
            to paint knowledge into the minds of my students. I loved teaching, but deep down, 
            I knew something was missing. Design had always been my secret passion. It started 
            with doodles in the margins of notebooks and grew into late-night sessions with 
            design software. The idea of creating something beautiful and functional had always 
            drawn me in, but life had other plans. There were bills to pay, a stable career to 
            maintain, so I continued teaching, year after year, putting my passion on hold.
            Then, life threw me a curveball.

            </p>
            <p className='kufam mt-4'>
            A series of events forced me to reflect on what I truly wanted. Whether it was the 
            shift to remote work during the pandemic or a war that started in my homeland and 
            made me to move to another country. All of that helped me to realize how short life 
            can be, I knew I couldn’t wait any longer. It was time to pursue my dream.
            With determination, I enrolled in UI/UX engineering courses. Diving into the world of user 
            interfaces and user experience was challenging, but exhilarating. I found myself lost in the 
            process of wireframing, prototyping, and understanding the psychology behind user interactions. 
            The principles of design thinking clicked with me in a way that felt both new and familiar—as 
            if I had been preparing for this moment my whole life without even realizing it.
            Evenings became dedicated to online tutorials, working on projects, and slowly building a portfolio. 
            I applied the same dedication to learning UI/UX design that I had once applied to my teaching career. 
            And as the months passed, I saw myself grow. The transition wasn’t easy; there were moments of doubt, 
            times when the learning curve felt insurmountable. But I persevered, driven by that same passion that 
            had kept me awake at night, dreaming of what could be.
            </p>
            <p className='kufam mt-4'>
            Looking around my new workspace, filled with color swatches, wireframes, and sketches, I can’t 
            help but smile. It isn’t the path I had originally set out on, but it is the one I was meant 
            to walk. Teaching had been a chapter in my life, a vital one, but design is a the new adventure, 
            and I am eager to see where it will take me.
            And so, with a heart full of passion and a mind brimming with creativity, I’m embarking on my new journey.
            I am no longer just a teacher; I am a designer, ready to leave my mark on the world, one pixel at a time.

            </p>
        </div>
        <div className='flex flex-row justify-center pb-28'>
            <img className='h-7 md:h-16 w-auto pr-9 md:pr-32' src="src/assets/html-5.png" alt="html" />
            <img className='h-7 md:h-16 w-auto pr-9 md:pr-32' src="src/assets/css-3.png" alt="css" />
            <img className='h-7 md:h-16 w-auto pr-9 md:pr-32' src="src/assets/figma.png" alt="figma" />
            <img className='h-7 md:h-16 w-auto pr-9 md:pr-32' src="src/assets/java-script.png" alt="js" />
            <img className='h-7 md:h-16 w-auto pr-3 md:pr-12' src="src/assets/react.png" alt="react" />
        </div>
       </div>
    )
};

const data =[
    {
        img: `src/assets/girl.png`,
        text: `I develop landing pages, corporate websites and online stores.`,
    },
    {
        img: `src/assets/girl.png`,
        text: `I love ambitious tasks and unusual solutions.`,
    },
    {
        img: `src/assets/girl.png`,
        text: `I strive for a partnership with the client to create an impressive and useful project together.`,
    },

]

export default Homepage