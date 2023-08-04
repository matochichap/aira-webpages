import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BasicInfo, JobType, DisplayList, FullWidthButton, Buffer, Loading } from './Components'

function JobDetailsPage() {
    const [data, setData] = useState(null)
    const { searchId, jobId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://aira-dev-fn-line-chatbot.azurewebsites.net/api/jobs/search/${searchId}/items/${jobId}`)
                const jsonData = await response.json()
                console.log(jsonData)
                setData(formatData(jsonData))
            } catch (error) {
                console.error('Error:', error)
            }
        }
        fetchData()
    }, [searchId, jobId])

    /**
     * job: title, logoImg, companyName, location 
     * jobType: 
     * list: title, arrayList
     */
    if (data) {
        const { job, types, requirements, functions, url } = data
        return (
            <>
                <BasicInfo basicInfo={job} />
                <div className="job-details-box">
                    <JobType types={types} />
                    <DisplayList list={requirements.list} title={requirements.title} />
                    <DisplayList list={functions.list} title={functions.title} />
                    <Buffer></Buffer>
                </div>
                <FullWidthButton url={url} />
            </>
        )
    }
    return <Loading></Loading>
}

function formatData(data) {
    const formattedData = {}
    formattedData.job = {
        title: data.details.position,
        subtitle: `${data.company.name} | ${data.details.location}`,
        logoImg: null
    }
    formattedData.types = data.details.jobType.split(", ")
    formattedData.requirements = {
        title: "Job Requirements",
        list: data.requirements
    }
    formattedData.functions = {
        title: "Job Functions",
        list: data.jobFunctions
    }
    let url = data.company.companyUrl
    // if url does not have http or https, add it
    if (url && !/^https?:\/\//i.test(url)) {
        url = "https://" + url
    }
    formattedData.url = url
    return formattedData
}

export default JobDetailsPage