// "use client";
// import { useEffect, useState } from "react";
// import { Menu, X, Mail, Phone, ArrowUpRightFromSquareIcon } from "lucide-react";
// import Image from "next/image";
// import ScrollReveal from "scrollreveal";

// interface FormData {
//   fullName: string;
//   email: string;
//   phone: string;
//   subject: string;
//   message: string;
// }

// interface Errors {
//   fullName?: string;
//   email?: string;
//   phone?: string;
// }

// export default function page() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const userPref = window.matchMedia("(prefers-color-scheme: dark)");
//     const savedTheme = localStorage.getItem("theme");

//     const systemTheme = userPref.matches ? "dark" : "light";
//     const currentTheme = savedTheme || systemTheme;

//     setTheme(currentTheme);
//     document.documentElement.classList.toggle("dark", currentTheme === "dark");
//   }, []);

//   // const toggleTheme = () => {
//   //   const newTheme = theme === "dark" ? "light" : "dark";
//   //   setTheme(newTheme);
//   //   localStorage.setItem("theme", newTheme);
//   //   document.documentElement.classList.toggle("dark", newTheme === "dark");
//   // };

//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState<Errors>({});

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
//     const { name, value } = e.currentTarget;
//     if (name === "fullName") {
//       e.currentTarget.value = value.replace(/[^A-Za-z ]/g, "");
//     }
//     if (name === "phone") {
//       e.currentTarget.value = value.replace(/[^0-9]/g, "");
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     let newErrors: Errors = {};

//     if (!formData.fullName) {
//       newErrors.fullName = "Full Name is required.";
//     } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
//       newErrors.fullName = "Full Name should contain only letters.";
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Enter a valid email address.";
//     }

//     if (!formData.phone) {
//       newErrors.phone = "Phone Number is required.";
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = "Phone Number must be 10 digits.";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       alert("Form submitted successfully!");
//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });
//     }
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const sr = ScrollReveal({
//         distance: "500px",
//         duration: 1500,
//         delay: 400,
//         reset: true,
//       });

//       sr.reveal(".reveal", { origin: "bottom" });
//       sr.reveal(".reveal-left", { origin: "left" });
//       sr.reveal(".reveal-right", { origin: "right" });
//       sr.reveal(".reveal-top", { origin: "top" });
//     }
//   }, []);

//   return (
//     <div
//       className="min-h-screen bg-center bg-[length:70%] bg-opacity-10 bg-white dark:bg-[#121212] text-black dark:text-white transition-colors duration-300"
//       style={{
//         backgroundImage: "url('/images/Background image.png')",
//       }}
//     >
//       <header className="fixed top-0 left-0 w-full bg-[#1c1b1a] z-50">
//         <div className="flex justify-between items-center px-4 md:px-8 lg:px-20 py-4">
//           <a href="#" className="text-2xl md:text-3xl font-bold text-white">
//             NAGENDRA.
//           </a>

//           <button className="md:hidden text-white" onClick={toggleMenu}>
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           <nav className="hidden md:flex gap-6 lg:gap-12 ">
//             {["HOME", "ABOUT", "SERVICES", "SKILLS", "PROJECT", "CONTACT"].map(
//               (item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-white hover:text-gray-300 transition-colors hover:border-y-4  hover:border-y-green-600 hover:transition-ease-in-out hover:rounded-full"
//                 >
//                   {item}
//                 </a>
//               )
//             )}
//           </nav>
//         </div>

//         <nav
//           className={`
//           md:hidden
//           fixed top-[60px] left-0
//           w-full h-screen
//           bg-[#1c1b1a]
//           transform transition-transform duration-300 ease-in-out
//           ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
//         `}
//         >
//           <div className="flex flex-col items-center pt-8 gap-6">
//             {["HOME", "ABOUT", "SERVICES", "SKILLS", "PROJECT", "CONTACT"].map(
//               (item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-white hover:text-gray-300 transition-colors text-xl hover:border-y-4  hover:border-y-green-600 hover:transition-ease-in-out hover:rounded-full"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </a>
//               )
//             )}
//           </div>
//         </nav>
//       </header>

//       <section
//         id="home"
//         className="pt-24 md:pt-32 px-4 md:px-8 lg:px-28 reveal-left"
//       >
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div className="space-y-4">
//             <h2 className="lg:text-5xl reveal-top dark:text-white text-black">
//               Hi,<span className="text-green-600">Myself</span>
//             </h2>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 reveal-left ">
//               <span>NAGENDRA REDDY MANUKONDA</span>
//             </h1>
//             <h3 className="text-xl md:text-2xl reveal-left dark:text-white text-black">
//               And I&apos;m a{" "}
//               <span className="text-green-600 ">Frontend Developer</span>
//             </h3>
//             <p className="text-gray-600 text-xl reveal-left">
//               I&apos;m seeking a challenging software development role where I
//               can leverage my skills to contribute to innovative projects.
//               I&apos;m eager to join a dynamic team and utilize my technical
//               expertise to develop high-quality software solutions. My goal is
//               to contribute to technological advancements and drive positive
//               outcomes in the field.
//             </p>

//             <div className="flex gap-4 py-6 reveal-left">
//               <a
//                 href="https://www.facebook.com/share/1CES5gd9uT/?mibextid=wwXIfr"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:scale-110 transition-transform hover:forced-colors:blue"
//               >
//                 <Image
//                   src="/images/facebook.png"
//                   alt="facebook"
//                   width={100}
//                   height={50}
//                   className="size-12"
//                 />
//               </a>
//               <a
//                 href="https://www.instagram.com/nagendra.___.13?igsh=MTk0MGlqcDBoZGc4aw%3D%3D&utm_source=qr"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:scale-110 transition-transform"
//               >
//                 <Image
//                   src="/images/instagram.png"
//                   alt="instagram"
//                   width={100}
//                   height={50}
//                   className="size-12 "
//                 />
//               </a>
//               <a
//                 href="https://x.com/nagendrareddy44?s=21"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:scale-110 transition-transform "
//               >
//                 <Image
//                   src="/images/twitter (1).png"
//                   alt="twitter"
//                   width={100}
//                   height={50}
//                   className="size-12 bg-white rounded-md"
//                 />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/nagendra-reddy-7b58982a8/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:scale-110 transition-transform"
//               >
//                 <Image
//                   src="/images/linkedin.png"
//                   alt="linkedin"
//                   width={100}
//                   height={50}
//                   className="size-12"
//                 />
//               </a>
//             </div>

//             <a
//               href="/images/Nagendra-Frontend developer-resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-[#80ff80] hover:bg-[#3ffdb1] text-black px-8 py-3 rounded-full transition-colors reveal-left"
//             >
//               Download CV
//             </a>
//           </div>

//           <div className="hidden md:block reveal-top">
//             <Image
//               src="/images/nagendra.img.png"
//               alt="Profile"
//               width={400}
//               height={300}
//               className="w-8rem h-1rem  object-contain rounded-full mx-auto bg-gray-50 dark:bg-black dark:brightness-50 brightness-100
//               shadow-[0px_9px_12px_rgba(255,0,134,0.815),0px_6px_12px_rgba(245,121,5,0.83),6px_0px_15px_rgb(5,247,247)]"
//             />
//           </div>
//         </div>
//       </section>

//       <section
//         id="about"
//         className="py-20 px-4 md:px-8 lg:px-16 lg:mt-40 reveal-top"
//       >
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold mb-9 pb-2 border-b-2 border-green-600 reveal-left dark:text-white text-black">
//             About <span className="text-green-600">Me</span>
//           </h2>
//           <p className="text-gray-700 mb-8 text-xl reveal-left">
//             I am a passionate Frontend Developer with a strong foundation in
//             HTML, CSS, JavaScript, and React.js. As a fresher, I am eager to
//             apply my skills in building responsive and user-friendly web
//             applications. I have a keen interest in UI/UX design and web
//             performance optimization. I am a quick learner, problem-solver, and
//             highly motivated to grow in a dynamic development environment.
//           </p>

//           <div className="space-y-8 reveal-left">
//             <h3 className="text-3xl font-bold pb-2 border-b-2 border-green-600 reveal-left dark:text-white text-black">
//               Education
//             </h3>

//             <div className="space-y-8 reveal">
//               {[
//                 {
//                   location: "Vadodara, India",
//                   degree: "Bachelor of Technology (CSE)",
//                   institution: "Parul University (6.72 CGPA) 2020-2024",
//                 },
//                 {
//                   location: "Vijayawada, India",
//                   degree: "12th Standard (MPC)",
//                   institution: "Narayana Junior College (7.38 CGPA) 2018-2020",
//                 },
//                 {
//                   location: "Guntur, India",
//                   degree: "Secondary Education",
//                   institution: "Oxford EM High School (8.5 CGPA) 2018",
//                 },
//               ].map((edu, index) => (
//                 <div key={index} className="pl-4 border-l-4 border-gray-200">
//                   <p className="font-bold dark:text-white text-black">
//                     {edu.location}
//                   </p>
//                   <p className="text-lg dark:text-white text-black">
//                     {edu.degree}
//                   </p>
//                   <p className="text-gray-600 italic">{edu.institution}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         id="services"
//         className=" py-20 px-4 md:px-8 lg:px-16 lg:mt-44 reveal"
//       >
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-12 pb-2 border-b-2 border-green-600 dark:text-white text-black reveal-top">
//             My <span className="text-green-600 text-4xl">Services</span>
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-left">
//             {[
//               {
//                 title: "Frontend Development",
//                 description:
//                   "I specialize in building responsive and user-friendly web applications using HTML, CSS, and JavaScript.",
//                 image: "/images/front-end.png",
//               },
//               {
//                 title: "UI/UX Design",
//                 description:
//                   "I have a keen eye for design and focus on creating visually appealing and intuitive user interfaces.",
//                 image: "/images/designer.png",
//               },
//               {
//                 title: "Web Performance",
//                 description:
//                   "I optimize web applications for speed and performance to provide users with a seamless browsing experience.",
//                 image: "/images/performance.png",
//               },
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className=" relative bg-white p-6 rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300
//                   hover:shadow-[0px_4px_6px_rgba(255,0,234,0.815),0px_6px_12px_rgba(255,72,0,0.83),6px_0px_15px_rgb(5,247,247)]"
//               >
//                 <h3 className=" text-xl font-bold mb-4 flex justify-center text-black align-middle reveal-top">
//                   {service.title}
//                 </h3>
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   width={400}
//                   height={300}
//                   className="w-50% h-48 object-contain rounded-lg transition-all  duration-500 hover:opacity-0 reveal"
//                 />
//                 <div
//                   className="absolute inset-0 bg-white flex flex-col justify-center items-center p-6
//                   opacity-0 transition-opacity duration-500 hover:opacity-100"
//                 >
//                   <h3 className="text-xl font-bold text-black mb-10 text-center">
//                     {service.title}
//                   </h3>

//                   <p className="text-gray-600 mb-8 text-center text-xl">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section
//         id="skills"
//         className="py-20 px-4 md:px-8 lg:px-16 lg:mt-44 reveal"
//       >
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 pb-2 border-b-2 border-green-600 reveal-top">
//             SKILLS
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 name: "HTML",
//                 image: "/images/html-5-svgrepo-com.svg",
//               },
//               {
//                 name: "CSS",
//                 image: "/images/css-svgrepo-com.svg",
//               },
//               {
//                 name: "JavaScript",
//                 image: "/images/js-svgrepo-com.svg",
//               },
//               {
//                 name: "React",
//                 image:
//                   "/images/react-javascript-js-framework-facebook-svgrepo-com.svg",
//               },
//               {
//                 name: "Next.js",
//                 image: "/next.svg",
//               },
//               {
//                 name: "Material UI",
//                 image: "/images/material-ui-svgrepo-com.svg",
//               },
//               {
//                 name: "Tailwind CSS",
//                 image: "/images/tailwind-svgrepo-com.svg",
//               },
//             ].map((skill, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-colors
//                   hover:transform hover:-translate-y-2 duration-300 hover:shadow-green-600 reveal-left"
//               >
//                 <Image
//                   src={skill.image}
//                   alt={skill.name}
//                   width={64}
//                   height={64}
//                   className="w-20 h-20 mx-auto mb-4 hover:scale-125 transition-transform"
//                 />
//                 <h3 className="text-center text-xl font-semibold reveal text-black">
//                   {skill.name}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section
//         id="project"
//         className=" py-20 px-4 md:px-8 lg:px-16 lg:mt-44 reveal"
//       >
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 pb-2 border-b-2 border-green-600 dark:text-white text-black reveal-top">
//             LATEST <span className="text-green-600">PROJECT</span>
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:mt-8 gap-8">
//             {[
//               {
//                 image: "/images/my portfolio.jpeg",
//                 title: "Personal Portfolio",
//                 description:
//                   "A personal portfolio to showcase my work and skills",
//               },
//               {
//                 image: "/images/hotel booking.jpeg",

//                 title: "Business Website",
//                 description:
//                   "Developed a responsive business website for a client",
//               },
//               {
//                 image: "/images/developer.jpg",
//                 title: "E-commerce Platform",
//                 description: "Built a modern e-commerce platform with React",
//               },
//             ].map((project, index) => (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-lg reveal-left"
//               >
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   width={500}
//                   height={300}
//                   className="w-full h-64 object-fill transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div
//                   className="absolute inset-0 bg-white  bg-opacity-50 flex flex-col items-center justify-center
//                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 >
//                   <h3 className="text-black text-xl font-bold mb-2">
//                     {project.title}
//                   </h3>
//                   <p className="text-black text-center px-4 mb-4">
//                     {project.description}
//                   </p>
//                   <a
//                     href="#"
//                     className="text-black hover:text-blue-400 transition-colors"
//                   >
//                     <ArrowUpRightFromSquareIcon size={24} />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section
//         id="contact"
//         className="py-20 px-4 md:px-8 lg:px-16 lg:mt-44 reveal"
//       >
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 pb-2 border-b-2 border-green-600 dark:text-white text-black reveal-top">
//             CONTACT <span className="text-green-600">ME</span>
//           </h2>

//           <form className="space-y-6 reveal-left" onSubmit={handleSubmit}>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="reveal-left">
//                 <label className="font-semibold dark:text-white text-black">
//                   Full Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   onInput={handleInput}
//                   required
//                   className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 {errors.fullName && (
//                   <p className="text-red-500 text-sm">{errors.fullName}</p>
//                 )}
//               </div>
//               <div className="reveal-right">
//                 <label className="font-semibold dark:text-white text-black">
//                   Email Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email}</p>
//                 )}
//               </div>
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="reveal-left">
//                 <label className="font-semibold dark:text-white text-black">
//                   Phone Number <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   onInput={handleInput}
//                   required
//                   maxLength={10}
//                   className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 {errors.phone && (
//                   <p className="text-red-500 text-sm">{errors.phone}</p>
//                 )}
//               </div>
//               <div className="reveal-right">
//                 <label className="font-semibold dark:text-white text-black">
//                   Email Subject
//                 </label>
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Email Subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//             </div>

//             <div className="reveal-left">
//               <label className="font-semibold dark:text-white text-black">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 rows={6}
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="mx-auto block bg-[#80ff80] hover:bg-[#00d0ff] text-black px-8 py-3 rounded-full transition-colors"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       <footer className="bg-[#1c1b1a] text-white py-8 px-4 md:px-8 lg:px-16">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-sm opacity-70">
//             © 2025 NAGENDRA REDDY. All rights reserved.
//           </p>

//           <div className="flex flex-col justify-between  items-center gap-2">
//             <a
//               href="mailto:manukondanagendrareddy@gmail.com"
//               className="flex items-center gap-2 hover:text-blue-400 transition-colors"
//             >
//               <Mail size={20} />
//               manukondanagendrareddy@gmail.com
//             </a>
//             <a
//               href="tel:+917075660441"
//               className="flex items-center gap-2 hover:text-blue-400 transition-colors"
//             >
//               <Phone size={20} />
//               +91 7075660441
//             </a>
//           </div>

//           <div className="flex gap-6">
//             <a
//               href="https://www.facebook.com/share/1CES5gd9uT/?mibextid=wwXIfr"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:scale-120  transition-transform"
//             >
//               <Image
//                 src="/images/facebook.png"
//                 alt="facebook"
//                 width={100}
//                 height={50}
//                 className="size-8"
//               />
//             </a>
//             <a
//               href="https://www.instagram.com/nagendra.___.13?igsh=MTk0MGlqcDBoZGc4aw%3D%3D&utm_source=qr"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:scale-120  transition-transform"
//             >
//               <Image
//                 src="/images/instagram.png"
//                 alt="instagram"
//                 width={100}
//                 height={50}
//                 className="size-8"
//               />
//             </a>
//             <a
//               href="https://x.com/nagendrareddy44?s=21"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:scale-120 transition-transform "
//             >
//               <Image
//                 src="/images/icons8-x-64 (1).png"
//                 alt="twitter"
//                 width={140}
//                 height={80}
//                 className="size-8 "
//               />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/nagendra-reddy-7b58982a8/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:scale-120 transition-transform"
//             >
//               <Image
//                 src="/images/linkedin.png"
//                 alt="linkedin"
//                 width={100}
//                 height={50}
//                 className="size-8"
//               />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
