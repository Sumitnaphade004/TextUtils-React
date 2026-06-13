import React from 'react';

export default function About(props) {
 return (
    <div>
      <>
      <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
      <h1 className='my-3 text-center'>About TextUtils</h1>
      <p>
      &nbsp; &nbsp; &nbsp; &nbsp; TextUtils is a simple yet powerful text manipulation tool that helps you perform various text transformations effortlessly. Whether you need to <b>convert text to uppercase/lowercase, remove extra spaces, copy text or count words and characters, </b> TextUtils has got you covered.
      </p>
      <br />
      <h2>🔹 Features</h2>
      <ul>
        <li>Convert text to <b>Uppercase</b> or <b>Lowercase</b></li>
        <li>Remove <b>extra spaces</b></li>
        <li>Copy text to <b>clipboard</b></li>
        <li>Count <b>words and characters</b> in real-time</li>
        <li>Toggle between <b>Light & Dark mode</b> for better readability</li>
      </ul>
      <br />
      <h2>🎯 Why Use TextUtils?</h2>
      <p>
      &nbsp; &nbsp; &nbsp; &nbsp; TextUtils is designed for students, writers, developers, and professionals who frequently work with text. With a <b>clean UI and fast performance</b>, it provides an efficient way to format and analyze text without the need for additional software.
      </p>
      <br />
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
