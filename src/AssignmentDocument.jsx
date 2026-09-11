import React from 'react'

export default function AssignmentDocument() {
  return (
    <div className="container" style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 1rem', lineHeight: '1.6' }}>
      
      <header style={{ marginBottom: '3rem' }}>
        <h1 className="section__title">Portfolio Case Study Assignment</h1>
      </header>

      {/* THE VOICE CARD */}
      <section style={{ 
        background: 'rgba(255, 255, 255, 0.05)', 
        padding: '1.5rem', 
        borderLeft: '4px solid #14b8a6',
        marginBottom: '3rem' 
      }}>
        <h2 className="mono" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#14b8a6' }}>
          // VOICE CARD
        </h2>
        <p><strong>Traits:</strong> Passionate, Professional, Curious, Ethical all means, Self-Correcting, Lifelong Student.</p>
        <p><strong>Execution Constraint:</strong> Direct, analytical, objective, outcome-focused, no corporate buzzwords.</p>
      </section>

      {/* CASE STUDY */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          Case Study: Autonomous Indoor Delivery Robot
        </h2>
        
        <h3 style={{ marginTop: '1.5rem', color: '#eab308' }}>The Problem</h3>
        <p>
          Delivering items like coffee indoors across a campus typically requires expensive robotics. Standard autonomous navigation relies heavily on LiDAR, which significantly drives up hardware costs and introduces complex computational overhead. I needed to build a web-triggered delivery robot that could navigate dynamically without relying on expensive laser scanning, keeping the system economical and the codebase streamlined.
        </p>

        <h3 style={{ marginTop: '1.5rem', color: '#eab308' }}>What I Did (and Decided)</h3>
        <p>
          I dropped LiDAR entirely to reduce hardware costs, shifting to a vision-first navigation system. I implemented ArUco markers for autonomous point-to-point pathfinding and trained a custom YOLO object detection model to handle dynamic obstacle avoidance. 
        </p>
        <p>Because I was working without expensive motor encoders, I made several practical engineering decisions to self-correct the hardware limitations:</p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Implemented trim-based motor control using an IMU to manage precise rotational turns.</li>
          <li style={{ marginBottom: '0.5rem' }}>Integrated HC-SR04 ultrasonic sensors for immediate proximity safety.</li>
          <li style={{ marginBottom: '0.5rem' }}>Built a custom data logger that records PWM, duration, IMU data, and camera feeds during every movement to train future optimization models.</li>
        </ul>

        <h3 style={{ marginTop: '1.5rem', color: '#eab308' }}>The Outcome</h3>
        <p>
          The hardware architecture, embedded software, and full-stack web application are fully built. While a previous iteration relied on manual control via the web app, the current version is in the final stages of integrating the ArUco navigation. Once finalized, the robot will accept HTTP dispatch requests directly from the Spring Boot backend to execute fully autonomous deliveries, proving the viability of low-cost, vision-based navigation.
        </p>
      </section>

      {/* BIO & CONTACT */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          Bio & Contact
        </h2>
        <p>
          I am a Computer Engineer specializing in embedded systems, computer vision, and full-stack architecture. I focus on building practical, hardware-efficient robotics and machine learning pipelines that solve real-world logistical problems.
        </p>
        <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
          <li><strong>GitHub:</strong> <a href="https://github.com/huseyinTozluyurt" target="_blank" rel="noreferrer" style={{ color: '#14b8a6' }}>github.com/huseyinTozluyurt</a></li>
        </ul>
      </section>

      {/* BEFORE & AFTER */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          Before & After: Editing the AI
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '1rem' }}>
            <h4 style={{ color: '#ef4444', margin: '0 0 0.5rem 0' }}>Generic AI Draft (Before)</h4>
            <p style={{ margin: 0, fontStyle: 'italic' }}>
              "As a deeply passionate and lifelong student of robotics, I successfully synergized cutting-edge YOLO object detection with ArUco marker paradigms to revolutionize campus delivery, ensuring highly professional and ethical autonomous navigation."
            </p>
          </div>

          <div style={{ background: 'rgba(34, 197, 94, 0.1)', borderLeft: '4px solid #22c55e', padding: '1rem' }}>
            <h4 style={{ color: '#22c55e', margin: '0 0 0.5rem 0' }}>My Edited Version (After)</h4>
            <p style={{ margin: 0 }}>
              "I built an autonomous campus delivery robot that drops expensive LiDAR in favor of ArUco markers and a custom YOLO model for cost-effective indoor navigation."
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
