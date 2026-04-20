import styled from "styled-components";

const Wrapper = styled.div`

/* ===== PAGE BACKGROUND ===== */
background: linear-gradient(180deg, #f8fafc, #eef2f7);
min-height: 100vh;

/* ===== CENTER ===== */
.main-wrapper {
    max-width: 850px;
    margin: 0 auto;
    padding: 30px 20px;
}

/* ===== TITLE ===== */
.course-title {
    text-align: center;
    margin-bottom: 35px;
    font-weight: 700;
    font-size: 34px;
    color: #1f2937;
}

/* ===== DESCRIPTION CARD ===== */
.description-card {
    background: #ffffff;
    padding: 24px 26px;
    border-radius: 14px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    margin-bottom: 35px;
    transition: 0.3s;
}

.description-card:hover {
    transform: translateY(-3px);
}

.description-card h2 {
    font-size: 22px;
    margin-bottom: 15px;
    color: #1e6f8b;
    text-align: center;
    font-weight: 600;
}

.description-card p {
    margin-bottom: 6px;
    font-weight: 500;
    color: #374151;
}

.description-card ul {
    padding-left: 20px;
    margin-bottom: 12px;
}

.description-card li {
    margin-bottom: 6px;
    color: #555;
}

/* ===== CURRICULUM CARD ===== */
.curriculum-card {
    background: #ffffff;
    border-radius: 14px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    overflow: hidden;
}

/* TITLE */
.curriculum-card h2 {
    font-size: 22px;
    padding: 20px;
    text-align: center;
    font-weight: 600;
    border-bottom: 1px solid #eee;
    color: #1e6f8b;
}

/* ===== ACCORDION ITEM ===== */
.accordion-item {
    border-bottom: 1px solid #eee;
}

/* HEADER */
.accordion-header {
    padding: 16px 20px;
    background: #f9fafb;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    transition: 0.25s;
}

/* HOVER */
.accordion-header:hover {
    background: #edf7f3;
}

/* ACTIVE (Premium Green Highlight) */
.accordion-header.active {
    background: linear-gradient(90deg, #d9ece2, #eef9f3);
    color: #1e6f8b;
    font-weight: 600;
}

/* ARROW */
.arrow {
    transition: transform 0.3s ease;
}

.accordion-header.active .arrow {
    transform: rotate(180deg);
}

/* BODY */
.accordion-body {
    max-height: 0;
    overflow: hidden;
    transition: all 0.35s ease;
    padding: 0 20px;
    background: #fff;
}

.accordion-body.open {
    max-height: 500px;
    padding: 14px 20px;
}

/* TOPICS */
.topic {
    margin-bottom: 8px;
    color: #4b5563;
    position: relative;
    padding-left: 14px;
}

/* BULLET STYLE */
.topic::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #1e6f8b;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
    .course-title {
        font-size: 26px;
    }

    .description-card {
        padding: 18px;
    }
}

`;

export default Wrapper;