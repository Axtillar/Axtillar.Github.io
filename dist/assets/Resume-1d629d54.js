import{j as e}from"./index-a8b1edbe.js";import{r as x,m as i}from"./vendor-c55c7435.js";function h(){const[n,o]=x.useState("experience"),r=[{role:"Senior Software Engineer",company:"Google",period:"2021 - Present",location:"Mountain View, CA",description:"Led development of core search infrastructure components",achievements:["Improved search latency by 35% through optimization of backend algorithms","Led a team of 5 engineers in redesigning the search indexing pipeline","Implemented real-time search suggestions using ML models","Reduced infrastructure costs by 25% through efficient resource utilization"],tech:["Go","Kubernetes","TensorFlow","BigQuery"]},{role:"Full Stack Developer",company:"Microsoft",period:"2019 - 2021",location:"Seattle, WA",description:"Developed features for Microsoft Teams",achievements:["Built real-time collaboration features used by 1M+ users","Reduced application bundle size by 40% through code splitting","Implemented end-to-end encryption for video calls","Led migration from Angular to React, improving performance by 50%"],tech:["React","TypeScript","Node.js","WebRTC"]}],c={"Programming Languages":[{name:"JavaScript/TypeScript",level:95},{name:"Python",level:90},{name:"Go",level:85},{name:"Java",level:80}],Frontend:[{name:"React/Next.js",level:95},{name:"Vue.js",level:85},{name:"HTML5/CSS3",level:90},{name:"Tailwind CSS",level:90}],Backend:[{name:"Node.js",level:90},{name:"Django",level:85},{name:"PostgreSQL",level:85},{name:"MongoDB",level:80}],"DevOps & Tools":[{name:"Docker/K8s",level:85},{name:"AWS/GCP",level:80},{name:"CI/CD",level:90},{name:"Git",level:95}]},d=[{name:"AWS Solutions Architect",issuer:"Amazon Web Services",date:"2023",icon:"amazon-line"},{name:"Google Cloud Professional",issuer:"Google",date:"2022",icon:"google-line"},{name:"MongoDB Developer",issuer:"MongoDB University",date:"2022",icon:"database-2-line"}];return e.jsxs(i.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},className:"max-w-6xl mx-auto pt-24 md:pt-32 pb-16 md:pb-24",children:[e.jsx("header",{className:"text-center mb-12 md:mb-16",children:e.jsxs(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[e.jsx("h1",{className:"text-[#64ffda] font-mono mb-4",children:"03. Professional Journey"}),e.jsx("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6",children:"My Resume"}),e.jsx("p",{className:"text-lg text-slate-400 max-w-2xl mx-auto px-4",children:"A showcase of my professional experience, technical skills, and achievements"})]})}),e.jsx("div",{className:"flex justify-center mb-12",children:e.jsx("div",{className:"flex space-x-4 bg-[#112240] p-1 rounded-lg",children:["experience","skills","certifications"].map(a=>e.jsx("button",{onClick:()=>o(a),className:`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${n===a?"bg-[#64ffda] text-[#0a192f]":"text-[#64ffda] hover:bg-[#64ffda]/10"}`,children:a.charAt(0).toUpperCase()+a.slice(1)},a))})}),n==="experience"&&e.jsx("div",{className:"space-y-8",children:r.map((a,s)=>e.jsxs(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:s*.1},className:"bg-[#112240] rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl text-slate-200 font-bold",children:a.role}),e.jsx("p",{className:"text-[#64ffda] font-mono",children:a.company})]}),e.jsxs("div",{className:"text-slate-400 font-mono text-sm mt-2 md:mt-0",children:[e.jsx("p",{children:a.period}),e.jsx("p",{children:a.location})]})]}),e.jsx("p",{className:"text-slate-400 mb-4",children:a.description}),e.jsx("ul",{className:"space-y-2 mb-4",children:a.achievements.map((l,t)=>e.jsxs("li",{className:"flex text-slate-400",children:[e.jsx("span",{className:"text-[#64ffda] mr-2",children:"▹"}),l]},t))}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a.tech.map((l,t)=>e.jsx("span",{className:"px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm font-mono",children:l},t))})]},s))}),n==="skills"&&e.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:Object.entries(c).map(([a,s],l)=>e.jsxs(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:l*.1},className:"bg-[#112240] rounded-lg p-6 md:p-8",children:[e.jsx("h3",{className:"text-xl text-slate-200 font-bold mb-6",children:a}),e.jsx("div",{className:"space-y-4",children:s.map((t,m)=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-slate-400",children:t.name}),e.jsxs("span",{className:"text-[#64ffda]",children:[t.level,"%"]})]}),e.jsx("div",{className:"h-2 bg-[#0a192f] rounded-full",children:e.jsx(i.div,{initial:{width:0},animate:{width:`${t.level}%`},transition:{duration:1,delay:.2},className:"h-full bg-[#64ffda] rounded-full"})})]},m))})]},a))}),n==="certifications"&&e.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:d.map((a,s)=>e.jsxs(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:s*.1},className:"bg-[#112240] rounded-lg p-6 hover:shadow-lg transition-all duration-300 group",children:[e.jsx("div",{className:"w-12 h-12 rounded-lg bg-[#64ffda]/10 flex items-center justify-center mb-4 group-hover:bg-[#64ffda]/20 transition-colors",children:e.jsx("i",{className:`ri-${a.icon} text-2xl text-[#64ffda]`})}),e.jsx("h3",{className:"text-lg text-slate-200 font-bold mb-2",children:a.name}),e.jsx("p",{className:"text-[#64ffda] font-mono text-sm mb-1",children:a.issuer}),e.jsx("p",{className:"text-slate-400 text-sm",children:a.date})]},s))}),e.jsx(i.div,{className:"mt-12 text-center",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:e.jsxs("a",{href:"#",className:"inline-flex items-center px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded-lg font-mono text-lg font-semibold hover:bg-[#64ffda]/90 transition-colors",children:[e.jsx("i",{className:"ri-download-line mr-2"}),"Download Full Resume"]})})]})}export{h as default};
