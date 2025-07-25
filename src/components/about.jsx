import React from 'react';

function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">About Codexintern Project</h1>

        <p className="mb-4">
          This project is part of the frontend internship tasks provided by <strong>Codexintern</strong>. It includes a collection of three hands-on assignments built using <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>React Router</strong>, showcasing my understanding of key frontend development concepts.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">🔤 1. Text Translator App</h2>
        <p className="mb-4">
          A React-based application that allows users to translate English text into their favorite languages using the <strong>RapidAPI translation service</strong>. The interface is styled with Tailwind CSS and is responsive across devices.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">🔁 2. Random String Generator</h2>
        <p className="mb-4">
          A small utility app to generate random strings using React. This project uses <strong>React Hooks</strong> like <code>useState</code>, <code>useEffect</code>, and <code>useCallback</code> to handle state and re-renders efficiently.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">🌐 3. Client-Side Routing</h2>
        <p className="mb-4">
          The entire application uses <strong>client-side routing</strong> with <code>react-router-dom</code> to manage different pages like Home, Features, textgen, and About. It demonstrates the ability to build a single-page application (SPA) with smooth navigation.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-600">🚀 Technologies Used</h2>
        <ul className="list-disc list-inside mb-4">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>React Router DOM</li>
          <li>RapidAPI for translation</li>
          <li>JavaScript</li>
        </ul>

        <p className="mt-6">
          This internship project helped me strengthen my understanding of component-based architecture, routing, APIs, and responsive UI development. I'm proud to have built this as part of my frontend learning journey.
        </p>
      </div>
    </div>
  );
}

export default About;