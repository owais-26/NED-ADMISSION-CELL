import React from 'react'
import { useEffect ,useState} from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Loader from "./Loader";
export default function Blog1() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        document.title = "Mastering Programming Languages: A Guide for BCIT SE and CIS Students";
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta name="theme-color" content="#4285f4" />
                    <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />

                    <link rel="canonical" href="https://www.nedadmissioncell.com" />
                    <meta
                        name="description"
                        content="Discover the power of programming languages and gain a competitive edge in your studies at BCIT's SE and CIS programs. Explore the benefits of Python and C++, and learn how to prepare for success in the world of software engineering and computer information systems."
                    />
                </Helmet>
            </HelmetProvider>
            <header className="bgimage  text-center py-5">
                <h1 className='text-congrats h1seo'>Congratulations on Your Admission to Top Merit Programs of NED University!</h1>
                <h4 className=" italic text-center px-2 text-white">Your hard work has paid off, and you're on your way to success.</h4>
            </header>
            {isLoading ? <Loader /> : <>
                <div data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine' className="container text-left sm:text-left col-md-6 mt-5">
                <section>
                    <h1>The Path to Success</h1>
                        <p className='text-left sm:text-left'>As you embark on your journey in the world of computer sciences, you might be eager to know how to excel in your first year. Many of you are probably wondering about the programming languages that can give you an edge. Here's some valuable advice on languages and other essential information to get you started on the right foot:</p>

                        <p className='text-left sm:text-left'>I strongly recommend starting to learn a programming language, preferably Python or C++, right away. Use this time wisely to grasp the fundamental concepts of programming. I assure you that this will give you an advantage over your peers in the first year. It's not as difficult as it may seem; all it requires is logic and practice.</p>
                </section>
                    <section className='text-left sm:text-left'>
                    <h2>The Power of Programming</h2>
                    <p className='text-left sm:text-left'>In today's tech-driven world, programming is a fundamental skill that opens doors to a multitude of possibilities. Whether you're pursuing Computer Science or its Specialization, Software Engineering (SE) or Computer Information Systems (CIS), a strong foundation in programming will serve as a cornerstone for your studies and future career.</p>
                </section>

                <section>
                    <h2>Why Python and C++?</h2>
                    <p className='text-left sm:text-left'><strong>Python: The Versatile Beginner's Choice</strong></p>
                    <ul>
                        <li><strong>User-Friendly Syntax:</strong> Python's syntax resembles plain English, making it accessible for beginners.</li>
                        <li><strong>Versatility:</strong> Python is used in web development, data analysis, artificial intelligence, and more. This versatility ensures you'll find applications across various fields.</li>
                        <li><strong>Vibrant Community:</strong> An active Python community means abundant resources and support, from tutorials to libraries.</li>
                    </ul>
                    <p className='text-left sm:text-left'><strong>C++: Power and Performance</strong></p>
                    <ul>
                        <li><strong>Efficiency:</strong> C++ is renowned for its performance, making it suitable for systems programming.</li>
                        <li><strong>Low-Level Memory Control:</strong> C++ allows for precise memory management, a critical feature for building efficient and resource-conscious systems software.</li>
                        <li><strong>Object-Oriented Capabilities:</strong> C++ supports both procedural and object-oriented programming paradigms, offering flexibility and code organization advantages for complex system development.</li>
                    </ul>

                </section>
              <div className='d-flex  justify-content-center align-items-center'>

                   <img className='shade rounded mb-4' src="/blog1.jpg" width={400}   alt="" />
              </div>
            
                <section>
                    <h2>Useful Resources</h2>
                    <p className='text-left sm:text-left'>Here are a few YouTube channels that can be highly beneficial to learn programming basic and advance concept:</p>
                    <ul>
                        <li><a href="https://www.youtube.com/c/CodeWithHarry" target="_blank">CodeWithHarry</a></li>
                        <li><a href="https://www.youtube.com/c/programmingwithmosh" target="_blank">ProgrammingWithMosh</a></li>
                        <li><a href="https://www.youtube.com/channel/UCBwmMxybNva6P_5VmxjzwqA" target="_blank">The Net Ninja</a></li>
                        <li><a href="https://www.youtube.com/c/codevolution" target="_blank">Codevolution</a></li>
                    </ul>

                    <p className='text-left sm:text-left'>Websites to strengthen your concepts:</p>
                    <ul>
                        <li><a href="https://www.geeksforgeeks.org/" target="_blank">GeeksforGeeks</a></li>
                        <li><a href="https://www.w3schools.com/" target="_blank">W3Schools</a></li>
                        <li><a href="https://leetcode.com/" target="_blank">LeetCode</a></li>
                        <li><a href="https://www.hackerrank.com/" target="_blank">HackerRank</a></li>
                        <li><a href="https://www.coursera.org/" target="_blank">Coursera</a></li>
                    </ul>
                    <h2>Senior's Advice</h2>
                    <p className='text-left sm:text-left'>As responsible senior of BCIT, consider this advice from us. Your future will involve hours of coding and debugging on your laptop or PC. In university, self-study is crucial. No one will spoon-feed you as you might be accustomed to in high school. Professors will provide the basic concepts, but it will be your responsibility to solidify your understanding.</p>

                    <p className='text-left sm:text-left'>It's worth noting that even in fields like electronics, electrical, and telecommunications, there are one or two programming courses (check the course outline in the prospectus). So, this advice applies to all incoming juniors.</p>
                </section>
                    <footer className=" text-white text-center py-3">
                        <p className='text-left sm:text-left'>Feel free to ask any questions on this topic. Your journey has just begun, and with dedication, you'll excel. Contact me at <a href="mailto:owais.ansaricr7@gmail.com">@owaisansari</a></p>
                    </footer>
                    <div className="container mt-3">
                        <p className="text-muted text-end">Published by: Owais Ansari</p>
                    </div>
            </div>

          
            </>
    }
        </>
    )
}
