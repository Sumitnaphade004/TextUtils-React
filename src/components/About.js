import React from 'react';

export default function About(props) {
 return (
    <div>
      <>
      <div className="container my-5" style={{color: props.mode==="light"?"black":"white"}}>
      <h1 style={{textAlign: "center"}}>About TextUtils</h1>
      <p>
      &nbsp; &nbsp; &nbsp; &nbsp; TextUtils is a simple yet powerful text manipulation tool that helps you perform various text transformations effortlessly. Whether you need to **convert text to uppercase/lowercase**, **remove extra spaces**, **copy text**, or **count words and characters**, TextUtils has got you covered.
      </p>
      
      <h2>🔹 Features</h2>
      <ul>
        <li>Convert text to **Uppercase** or **Lowercase**</li>
        <li>Remove **extra spaces**</li>
        <li>Copy text to **clipboard**</li>
        <li>Count **words and characters** in real-time</li>
        <li>Toggle between **Light & Dark mode** for better readability</li>
      </ul>

      <h2>🎯 Why Use TextUtils?</h2>
      <p>
      &nbsp; &nbsp; &nbsp; &nbsp; TextUtils is designed for students, writers, developers, and professionals who frequently work with text. With a **clean UI and fast performance**, it provides an efficient way to format and analyze text without the need for additional software.
      </p>

      <h2>📌 How to Use</h2>
      <ol>
        <li>Enter or paste your text into the input box.</li>
        <li>Choose an operation (Uppercase, Lowercase, Remove Spaces, etc.).</li>
        <li>Get instant results!</li>
      </ol>

    </div>
      </>
    </div>
  )
}
