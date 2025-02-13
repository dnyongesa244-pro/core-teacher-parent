import React from 'react';

function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Teacher Core Parent System</h1>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
          <p className="text-gray-700">
            Welcome to the Teacher Core Parent System! This platform aims to enhance communication and collaboration between teachers, parents, and students.
          </p>
        </section>
        
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>View student's progress and grades</li>
            <li>Communicate with teachers</li>
            <li>Access learning resources</li>
          </ul>
        </section>
        
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="text-gray-700">
            To get started, please log in or create an account.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Log In
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 ml-2">
            Sign Up
          </button>
        </section>
      </main>
      
      <footer className="bg-blue-500 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Teacher Core Parent System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
