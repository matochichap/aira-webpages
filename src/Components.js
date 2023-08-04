import './Components.css'
import React, { useEffect, useState, useRef } from 'react'

function BasicInfo(props) {
  /** 
   * title, logoImg, companyName, location 
   */
    const {title, logoImg, subtitle} = props.basicInfo
    return (
        <div className="basic-info">
            {logoImg ? <img className="company-logo" src={logoImg} alt="company-logo" /> : null}            
            <h1 className='title'>{title}</h1>
            <h1>{subtitle}</h1>
        </div>
    )
}

function DisplayList(props) {
  /**
   * title, arrayList
   */
  const list = props.list
  const [isVisible, setIsVisible] = useState(false)
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.15
    })

    observer.observe(componentRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className={`display-list`} ref={componentRef}>
      <h2>{props.title}</h2>
      <div className={`slide-in ${isVisible ? 'slide-in--active' : ''}`}>
          {list.map((element, index) => {
              return (
                <div key={index} className="card">
                  <p className="text">{element}</p>
                </div>
              )
          })}
      </div>
    </div>
  )
}

function JobType(props) {
  /**
   * jobType
   */
  const details = props.types
  return (
    <div className="job-type">
      <h2>Job Type</h2>
      <div className="bubbles">
          {details.map((detail, index) => {
              return (
                  <div key={index} className="bubble">{detail}</div>
              )
          })}
      </div>
    </div>
  )
}

function FullWidthButton(props) {
  /**
   * url
   */
  return (
    <a href={props.url}>
        <button className="full-width-button">Apply</button>
    </a>
  )
}

function Buffer() {
  return (
    <div className='buffer'></div>
  )
}

function Loading() {
  return (
    <>
    <div className="loading-box">
      <div className="spin-wrapper">
        <div className="spinner">
        </div>
      </div>
      <p className='loading'>Loading...</p>  
    </div>
    </>
  )
}

function ProgressBar(props) {
  const {width, color} = props
  const progressBarRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = width
          entry.target.style.backgroundColor = color
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1
    })

    observer.observe(progressBarRef.current)

    return () => {
      observer.disconnect()
    }
  }, [width, color])

  return (
    <div className="progress">
      <div ref={progressBarRef} className="progress-bar"></div>
    </div>
  )
}

function ResumeTopics(props) {
  const colors = ["#C8A5CD", "#F5C947", "#EE6344", "#7ACBF1"]
  let choice = 0

  return (
    <>
    <div className="all-topics">
      {props.topics.map((topic, index) => {
        const color = colors[choice]
        choice++
        if (choice >= colors.length) {
          choice = 0
        }
        return (
          <div key={index} className='topic'>
            <h2 className='topic-name'>{topic.name}: {topic.score} / 10</h2>
            <ProgressBar width={`${topic.score * 10}%`} color={color}></ProgressBar>
            <div className='topic-details'>
              <p>{topic.details}</p>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export { BasicInfo, DisplayList, JobType, FullWidthButton, Buffer, Loading, ResumeTopics }