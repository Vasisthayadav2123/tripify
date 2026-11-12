<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
</head>
<body>

<h1>🌍 Tripify</h1>
<p><strong>Your AI-Powered Travel Itinerary Planner</strong></p>

<p>
Tripify is a smart travel planning web app that generates complete, AI-built travel itineraries based on your
<strong>budget</strong>, <strong>trip duration</strong>, and <strong>custom interests</strong> such as shopping, hiking,
romantic trips, nightlife, adventure, and more.
</p>

<h2>✨ Features</h2>
<ul>
    <li>AI-generated itineraries powered by <strong>OpenAI</strong></li>
    <li>Real-world data from <strong>Google Places API</strong></li>
    <li>Beautiful images from <strong>Unsplash API</strong></li>
    <li>Supports custom travel keywords (shopping, romantic, hiking…)</li>
    <li>Save trips using <strong>MongoDB</strong></li>
    <li>Frontend built with <strong>React + Tailwind CSS</strong></li>
</ul>

<h2>🛠️ Tech Stack</h2>

<h3>Frontend</h3>
<ul>
    <li>React</li>
    <li>Tailwind CSS</li>
    <li>Axios</li>
</ul>

<h3>Backend</h3>
<ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB / Mongoose</li>
</ul>

<h3>APIs</h3>
<ul>
    <li>OpenAI API</li>
    <li>Unsplash API</li>
    <li>Google Places API</li>
</ul>

<h2>📦 Installation</h2>

<h3>Clone the repository</h3>
<pre><code>git clone https://github.com/Vasisthayadav2123/tripify.git
cd tripify
</code></pre>

<h3>Backend Setup</h3>
<pre><code>cd server
npm install
</code></pre>

<p>Create a <code>.env</code> file:</p>
<pre><code>OPENAI_API_KEY=your_key_here
UNSPLASH_API_KEY=your_key_here
GOOGLE_PLACES_API_KEY=your_key_here
MONGO_URI=your_mongodb_uri
PORT=5000
</code></pre>

<p>Start backend:</p>
<pre><code>npm start
</code></pre>

<h3>Frontend Setup</h3>
<pre><code>cd client
npm install
npm run dev
</code></pre>

<h2>🚀 Usage</h2>
<ul>
    <li>Enter a destination</li>
    <li>Select days</li>
    <li>Add budget</li>
    <li>Add custom interests (shopping, romantic, hiking…)</li>
    <li>Generate & save your itinerary</li>
</ul>

<h2>📄 License</h2>
<p>MIT License</p>

</body>
</html>
