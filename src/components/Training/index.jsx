// import { useParams, useNavigate } from "react-router-dom";
// import Wrapper from "./style";
// import HorizontalScroll from "../HorizontalScroll";

// const colors = ["#087ea4", "#F0DC4E", "#00A2E1", "#ef3d42", "#8BC500", "#ff7667"];

// const Training = ({ courses }) => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     if (!courses || courses.length === 0) {
//         return null;
//     }

//     const filteredCourses = id
//         ? courses.filter((course) => course.id === id)
//         : courses;

//     // Safety check
//     if (id && filteredCourses.length === 0) {
//         return (
//             <Wrapper>
//                 <div className="container py-5 text-center">
//                     <h2>Course not found</h2>
//                 </div>
//             </Wrapper>
//         );
//     }

//     const handleTest = (e, url) => {
//         e.preventDefault();
//         navigate(url);
//     };

//     return (
//         <Wrapper>
//             <div className="container py-4">

//                 <h1 className="text-center mb-4">
//                     {id ? filteredCourses[0].title : "Training Programs"}
//                 </h1>

//                 {/* 🔥 DETAIL PAGE */}
//                 {id ? (
//                     <div className="row justify-content-center">
//                         <div className="col-lg-6 col-md-8 col-12">
//                             <div className="card shadow-lg p-4 text-center">

//                                 <div
//                                     className="image mb-4"
//                                     style={{
//                                         backgroundColor: colors[0],
//                                         padding: "20px",
//                                         borderRadius: "10px"
//                                     }}
//                                 >
//                                     <div className="text text-white fw-bold mb-2">
//                                         {filteredCourses[0].title}
//                                     </div>

//                                     <img
//                                         src={filteredCourses[0].image.src}
//                                         alt={filteredCourses[0].title}
//                                         width="150"
//                                         height="150"
//                                     />
//                                 </div>

//                                 <p className="mb-4">
//                                     {filteredCourses[0].description}
//                                 </p>

//                                 {/* <div className="d-flex gap-3 justify-content-center">
//                                     <button
//                                         className="px-4 py-2 button"
//                                         onClick={(e) =>
//                                             handleTest(
//                                                 e,
//                                                 `/test/${filteredCourses[0].testId}`
//                                             )
//                                         }
//                                         style={{
//                                             backgroundColor: colors[0],
//                                             color: "white",
//                                             border: "none",
//                                         }}
//                                     >
//                                         Eligibility Test
//                                     </button>

//                                     <button
//                                         className="px-4 py-2 button"
//                                         style={{
//                                             backgroundColor: "#0b2239",
//                                             color: "white",
//                                             border: "none",
//                                         }}
//                                     >
//                                         Apply Now
//                                     </button>
//                                 </div> */}
//                             </div>
//                         </div>
//                     </div>
//                 ) : (

//                     /* 🔥 LIST PAGE */
//                     <HorizontalScroll>
//                         {courses.map((course, index) => (
//                             <div key={index} className="scroll-card">
//                                 <div
//                                     className="card shadow-sm cursor-pointer"
//                                     onClick={() => navigate(`/training/${course.id}`)}
//                                 >
//                                     <div
//                                         className="image"
//                                         style={{
//                                             backgroundColor: colors[index % colors.length],
//                                         }}
//                                     >
//                                         <div className="text">{course.title}</div>

//                                         <div className="img">
//                                             <img
//                                                 src={course.image}
//                                                 alt={course.title}
//                                                 width="150"
//                                                 height="150"
//                                             />
//                                         </div>
//                                     </div>

//                                     <div className="card-body">
//                                         <p>{course.title}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </HorizontalScroll>
//                 )}
//             </div>
//         </Wrapper>
//     );
// };

// export default Training;

import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "./style";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Training = ({ courses }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [openIndex, setOpenIndex] = useState(0);

    if (!courses || courses.length === 0) return null;

    const course = courses.find((c) => c.id === id);

    if (id && !course) {
        return (
            <Wrapper>
                <div className="container py-5 text-center">
                    <h2>Course not found</h2>
                </div>
            </Wrapper>
        );
    }

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Wrapper>
            <div className="main-wrapper">

                {/* 🔥 TITLE */}
                <h1 className="course-title">{course.title}</h1>

                {/* 🔥 TRAINING DETAILS */}
                <div className="description-card">
                    <h2>Training Schedule & Guidelines</h2>

                    <p><strong>Training Duration:</strong> 3 hours per day</p>

                    <ul>
                        <li>2 hours dedicated to conceptual learning</li>
                        <li>1 hour focused on practical implementation</li>
                    </ul>

                    <p><strong>Weekly Assessments:</strong></p>
                    <ul>
                        <li>Tests conducted every Friday</li>
                    </ul>

                    {/* <p><strong>Scholarship Opportunities:</strong></p>
                    <ul>
                        <li>Based on weekly performance</li>
                    </ul>

                    <p><strong>Important Updates:</strong></p>
                    <ul>
                        <li>Updates via WhatsApp Channel</li>
                        <li>Join to stay informed</li>
                    </ul> */}

                    <p><strong>Location:</strong> Jaipur</p>
                    <p><strong>Mode:</strong> Online & Offline</p>
                </div>


                {/* 🔥 CURRICULUM */}
                {course.modules && (
                    <div className="curriculum-card">
                        <h2>Curriculum</h2>

                        {course.modules.map((module, index) => (
                            <div key={index} className="accordion-item">

                                {/* HEADER */}
                                <div
                                    className={`accordion-header ${openIndex === index ? "active" : ""
                                        }`}
                                    onClick={() => handleToggle(index)}
                                >
                                    <span>{module.title}</span>
                                    <span className="arrow">
                                        {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </span>
                                </div>

                                {/* BODY */}
                                <div
                                    className={`accordion-body ${openIndex === index ? "open" : ""
                                        }`}
                                >
                                    {module.topics.map((topic, topicIndex) => (
                                        <p key={topicIndex} className="topic">
                                            {topic}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

export default Training;