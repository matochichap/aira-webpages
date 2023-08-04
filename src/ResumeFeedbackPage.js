// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
import { BasicInfo, ResumeTopics, Loading } from './Components'

const sampleData = {
    overall_score: 8.5,
    topics: [
        {
            name: "Relevance",
            score: 9,
            details: "The resume demonstrates a strong alignment with the job requirements and specific needs of the employer. The candidate's relevant skills, qualifications, and experience make them a strong fit for the position."
        },
        {
            name: "Clarity and Readability",
            score: 8,
            details: "The information in the resume is presented in a clear and organized manner, making it easy to identify the candidate's key qualifications and achievements. However, there are a few areas where the resume could benefit from further simplification and improved formatting to enhance readability."
        },
        {
            name: "Conciseness",
            score: 8.5,
            details: "The resume effectively communicates the candidate's qualifications and experience without unnecessary fluff or overly lengthy descriptions. However, there are a few areas where the candidate could further condense the content to make it more concise."
        },
        {
            name: "Visual Appeal",
            score: 9.5,
            details: "The resume is well-formatted with consistent fonts, spacing, and bullet points, resulting in a visually appealing document. The professional design enhances the overall presentation and makes it easy for the reader to navigate."
        },
        {
            name: "Accomplishments and Impact",
            score: 9,
            details: "The resume highlights specific accomplishments and quantifiable results, showcasing the candidate's effectiveness. The provided metrics, such as revenue growth and successful project outcomes, effectively demonstrate their impact."
        },
        {
            name: "Customization",
            score: 9.5,
            details: "The resume is customized to the specific job requirements, showing that the candidate has tailored their application. The emphasis on relevant experiences and skills indicates a strong understanding of the position's needs."
        },
        {
            name: "Skills and Qualifications",
            score: 8,
            details: "The candidate's listed skills and qualifications are directly applicable and valuable for the position. However, there may be a few areas where additional skills or qualifications could further enhance the resume's effectiveness."
        },
        {
            name: "Grammar and Language",
            score: 9,
            details: "The resume is well-written with minimal grammatical errors and typos. The candidate demonstrates effective communication skills through their clear and concise language."
        },
        {
            name: "Professionalism",
            score: 9.5,
            details: "The resume reflects a professional tone and presentation. The professional summary/objective statement, appropriate language, and contact information contribute to an overall sense of professionalism."
        },
        {
            name: "Overall Impact",
            score: 8.5,
            details: "The resume has an overall positive impact, capturing the reader's interest and effectively conveying the candidate's value proposition. There are a few areas where further refinement and specific examples could strengthen the overall impact."
        }
    ]
}

function ResumeFeedbackPage() {
    // TODO: fetch data from endpoint to display resume feedback
    // const { analysisId } = useParams() // get analysisId to find 
    const data = formatData(sampleData)
    if (data) {
        return (
            <>
            <BasicInfo basicInfo={data.basicInfo}></BasicInfo>
            <ResumeTopics topics={data.topics}></ResumeTopics>
            </>
        )
    }
    return <Loading></Loading>
}

function formatData(data) {
    const formattedData = {}
    formattedData.basicInfo = {
        title: "Resume Feedback",
        subtitle: `Overall Score: ${data.overall_score} / 10`,
        logoImg: null
    }
    formattedData.topics = data.topics
    return formattedData
}

export default ResumeFeedbackPage