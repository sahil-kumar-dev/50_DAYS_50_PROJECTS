const testimonials = [
    {
        name: "Alex W.",
        role:'front-end',
        imgsrc:"https://randomuser.me/api/portraits/men/45.jpg",
        review: "At our IT company, I'm immersed in a world of cutting-edge technology. The collaborative atmosphere ignites creativity, allowing us to birth innovative solutions. Colleagues are supportive mentors, guiding me to explore uncharted territories. The dynamic projects challenge me and foster growth, nurturing a strong sense of purpose in my work. This environment is more than a workplace; it's a community where ideas flourish, pushing the boundaries of tech."
    },
    {
        name: "Alexa",
        role:'back-end',
        imgsrc:"https://randomuser.me/api/portraits/men/44.jpg",
        review: "Working here feels like solving puzzles with friends. Our IT company thrives on collaboration; it's incredible how we combine our strengths to crack complex challenges. The shared knowledge propels us forward, making each day a learning adventure. The culture champions diversity, amplifying our creativity and delivering holistic solutions. Our journey isn't about individual milestones but collective accomplishments that fuel our pride."
    },
    {
        name: "David M.",
        role:'data-engineer',
        imgsrc:"https://randomuser.me/api/portraits/men/42.jpg",
        review: "The constant evolution of technology is exhilarating, and this IT company thrives on it. Every day is a growth opportunity; learning is embedded in our DNA. The organization invests in our development, providing access to courses, workshops, and conferences. This investment enhances our skills and broadens our horizons, positioning us as tech leaders."
    },
    {
        name: "Sophia L.",
        role:'Marketing head',
        imgsrc:"https://randomuser.me/api/portraits/men/41.jpg",
        review: "Creativity is our currency at this IT company. Every challenge is an invitation to innovate, to dream up unique solutions that cater to clients' needs. The work environment nurtures our imaginative sparks, pushing us to view problems from fresh angles. I find immense satisfaction in seeing our creative endeavors transform into impactful realities."
    },
    {
        name: "Daniel K.",
        role:'Project manager',
        imgsrc:"https://randomuser.me/api/portraits/men/40.jpg",
        review: "Flexibility is more than a perk here; it's a commitment to work-life balance. Our IT company understands that our well-being fuels productivity. With flexible hours and remote work options, I can be at my best professionally while tending to personal commitments. This balance keeps my motivation high and my stress levels low."
    },
    {
        name: "Olivia P.",
        role:'HR',
        imgsrc:"https://randomuser.me/api/portraits/men/49.jpg",
        review: "Collaboration is our secret sauce. The collective brilliance of our team fuels solutions that surpass expectations. Our IT company values different perspectives; it's a harmonious blend of skills that brings ideas to life. The synergy we share transforms complex projects into seamless outcomes that leave us proud."
    },
    {
        name: "William T.",
        role:'Senior developer',
        imgsrc:"https://randomuser.me/api/portraits/men/55.jpg",
        review: "This IT company doesn't just value diversity; it treasures it. Inclusion isn't a buzzword; it's our ethos. Here, my voice matters, my uniqueness is celebrated, and my ideas hold weight. The leadership's commitment to a diverse culture translates into a workplace where I'm empowered to excel."
    },
    {
        name: "Mia G.",
        role:'Intern',
        imgsrc:"https://randomuser.me/api/portraits/men/65.jpg",
        review: "Staying relevant in tech means embracing the latest trends, and our IT company ensures just that. We're immersed in a world of constant innovation, encouraged to explore emerging technologies. This continuous learning cycle not only hones our skills but also ensures our solutions remain at the forefront."
    },
    {
        name: "Ethan H.",
        role:'Full stack',
        imgsrc:"https://randomuser.me/api/portraits/men/95.jpg",
        review: "This IT company isn't just a job; it's a passion-fueled journey. The camaraderie amongst tech enthusiasts turns challenges into growth opportunities. The enthusiasm to tackle intricate problems head-on keeps me motivated. Every day brings a new puzzle to solve, a new lesson to learn."
    },
    {
        name: "Ava B.",
        role:'ceo',
        imgsrc:"https://randomuser.me/api/portraits/men/75.jpg",
        review: "Joining this IT company was a turning point. The energy is palpable; innovation is in the air. My colleagues are more than teammates; they're collaborators in pushing boundaries. Each day, we're driven by the desire to excel, to harness our collective brilliance and transform it into impactful tech solutions."
    }
]


const rev=document.querySelector('.review');
const nam=document.querySelector('.name');
const image=document.querySelector('img');
const role=document.querySelector('.role');

let idx=1;

function shuffle(){
    if(idx>testimonials.length-1){
        idx=0;
    }
    const {name,imgsrc,review,role}=testimonials[idx];

    rev.innerHTML=review;
    nam.innerHTML=name;
    image.src=imgsrc;
    role.innerHTML=role;

    console.log(idx);
    idx++;
    

}

setInterval(shuffle,7000);