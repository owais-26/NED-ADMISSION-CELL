import React from 'react';
import { useEffect , useState} from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Loader from './Loader';

const Guidelines = () => {
   const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      document.title = "Guidelines | Ned Admission Cell";
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
              content="Looking for guidance to secure admission to NED? Our experts at NED Admission Cell offer personalized support to help you achieve success in engineering."
            />
          </Helmet>
        </HelmetProvider>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div>
              <h1 data-aos="fade-down" data-aos-duration="600" data-aos-easing='ease-out-sine'className="text-center h1seo mt-3">
                <i className="fa-solid fa-circle-info me-1"></i> Guidelines &
                Criteria
              </h1>
              <div
                data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'
                className="  text-decoration-underline mb-4 mx-auto"
              ></div>
            </div>
            <section
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" text-justify guide mx-5 px-5 pt-2"
            >
              When preparing for NED University's conceptual entry test, it's
              important to focus on building a strong foundation of concepts and
              reviewing all of the intermediate level material covered in the
              syllabus. To do this, it's recommended that you use a combination
              of textbook reading, note-taking, and online resources such as
              YouTube channels and past papers. For the test, you'll need to be
              familiar with four subjects:{" "}
              <b>
                {" "}
                English, Mathematics, Physics, and Chemistry/Computer. Each
                subject will have 25 multiple choice questions, for a total of
                100 questions.
              </b>{" "}
              The passing percentage is 50%, but scoring in the <b>
                85 range
              </b>{" "}
              is considered a decent score for gaining admission to top-tier
              departments, provided your intermediate and matric percentages are
              also supportive. <br />
              When preparing for the test, it's important to remember that each
              portion of the test is diverse and unpredictable. However, there
              are some general strategies you can use to help you succeed.
              <ul>
                <li data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'>
                  For Mathematics, memorizing all formulas and learning short
                  tricks from online resources is highly recommended. Practicing
                  with MCQs from popular preparation books such as Dogar's,
                  Anees Hussain, and IBA grads can also be helpful. For
                  strengthening your concepts, you can follow channels like{" "}
                  <b> Mathsflix by Hashim Zia.</b>
                </li>
                <li data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'>
                  For Physics, it's important to memorize all formulas, but also
                  to build up your concepts. Reading the textbook and summaries,
                  and consulting online resources like{" "}
                  <b> Physics by Bilal Zia</b> can help you in this regard.
                  Solving MCQs from previous days' tests can also be helpful.
                </li>
                <li data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'>
                  For Chemistry, the same tips as for Physics apply, with the
                  addition of online resources such as{" "}
                  <b>
                    Sir Anas Soorty, Sir Nasim Zulfiqar, and Chemistrically{" "}
                  </b>{" "}
                  for clarification of concepts.
                </li>
                <li data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'>
                  For English, focusing on basic concepts such as tenses,
                  grammar, and prepositions, and practicing with past papers, is
                  recommended. Learning past paper vocabularies on a daily basis
                  can also be helpful. You can follow channels like{" "}
                  <b>Sir Nasim Zulfiqar, Dear Sir, and Amin Education </b> for
                  further guidance.
                </li>
                <li data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'>
                  For Computer Science, preparing from your intermediate
                  books/notes of the computer and using online resources like
                  Dogars Ecat preparation book and Ecat websites can be helpful.
                  It's important to focus on topics such as C programming
                  language, fundamentals of C language, coding rules and
                  regulations, error identification, and declaration of output
                  with basic computer. Memorizing shortcut keys of Word, Excel,
                  and MS Access can also be beneficial.
                </li>
              </ul>{" "}
              <p data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'>
                {" "}
                <b>Anees Hussain, IBA Grads and Dogars ECAT </b> book are good
                resources for practice. In summary, to succeed in NED's
                conceptual entry test, focus on building a strong foundation of
                concepts and review all intermediate level material covered in
                the syllabus. Use a combination of textbook reading,
                note-taking, and online resources like YouTube channels and past
                papers to prepare. Remember that each portion of the test is
                diverse and unpredictable, but by following the tips outlined
                above, you can increase your chances of success.
              </p>{" "}
              <h3 data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'>
                For O/A Levels Students
              </h3>
              <p data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'>
                For an O/A Levels student, preparing for Aptitude exams is
                easily achievable without enrolling in any specialized
                institution. This is because students with A-levels background
                usually possess a strong understanding of physics and chemistry
                concepts, which can be revised through practicing any Aptitude
                material. For mathematics, there are several topics, such as
                intercept concepts, slope one, and sequence series, that are not
                typically covered in O/A-levels, and therefore, more effort may
                be required in this subject. However, there are ample resources
                available on platforms like YouTube to learn and practice these
                topics. You can also refer to ECAT MATHS PLAYLIST on my YouTube
                channel, where I have listed several relevant resources.
                Additionally, attempting the daily tests I post can also aid in
                your preparation. Many of my students who come from A-levels
                background have found my lectures to be highly beneficial.{" "}
                <br />
                To prepare for Aptitude exams, it's important to review and
                practice the concepts from your O/A Level books and Sindh
                Intermediate books. Practice is crucial for scoring well. I have
                shared study material in this website that can be helpful. If
                you have an A-levels background, your admission will be based on
                your O-levels grades. You need to submit your A-levels marks,
                certificate, and equivalency in January. If your A-levels result
                is released later, you can submit it, but a minimum equivalency
                of 60 is required. It's important to focus on both A-levels and
                Aptitude exams, as students with A-levels and O-levels
                backgrounds often compete for admission. Aim for a score of at
                least 85+ marks in the test.
              </p>
            </section>
            <div>
              <h2
                data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'
                className="text-center mt-4"
              >
                <i className="fa-solid fa-link"></i> Useful Links
              </h2>
              <div
                data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'
                className="  text-decoration-underline mb-4 mx-auto"
              ></div>
            </div>
            <section
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-justify guide mx-5 px-5 pt-2"
            >
              <b>
                <ul>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className="text-dark"
                      href="https://www.youtube.com/c/MathsflixByHashimZia "
                    >
                      Mathsflix by Hashim Zia
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className="text-dark"
                      href="https://youtube.com/playlist?list=PL5b9mn6-ELrGCSz6sZc5H0ChDqrzTHAJI
"
                    >
                      NED PAST PAPERS SOLUTION
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className="text-dark"
                      href="https://drive.google.com/drive/folders/11UOhLbaqlZPO0zYokhTK4orHnzfGgtWD"
                    >
                      NED PAPERS
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className="text-dark"
                      href="https://www.youtube.com/c/PhysicsbyBilalZia "
                    >
                      Physics by Bilal Zia
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className="text-dark"
                      href="https://youtu.be/yE9ezgoA0L4"
                    >
                      HOW TO ACE COMPUTERIZED APTIUDE EXAM?
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className="text-dark"
                      href="https://youtu.be/BZqYojWz3QU"
                    >
                      HOW TO PREPARE FOR NED APTITUDE EXAM?
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className="text-dark"
                      href="https://youtu.be/5HkRSmeific"
                    >
                      HOW TO MANAGE TIME WHILE PREPAREING FOR A-LEVELS/INTER AND
                      APTITUDE?
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className="text-dark"
                      href="https://youtu.be/UOTvIC9Hh9A"
                    >
                      NED SEATS DISTRIBUTION
                    </a>
                  </li>
                </ul>
              </b>
            </section>
          </>
        )}
      </>
    );
}

export default Guidelines;
