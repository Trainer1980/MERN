import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'
import PersonCardBirthday from './components/PersonCardBirthday'

function App() {
  return (
    <div className="App">
        <h1>Prop It Up</h1>
        <PersonCard lastName = "Doe" firstName = "Jane" age = { 45 } hairColor = "Black" />
        <PersonCard lastName = "Smith" firstName = "John" age = { 88 } hairColor = "Brown" />
        <PersonCard lastName = "Fillmore" firstName = "Millard" age = { 50 } hairColor = "Brown" />
        <PersonCard lastName = "Smith" firstName = "Maria" age = { 62 } hairColor = "Brown" />
        <h1>Putting It All Together (Birthday Button)</h1>
        <PersonCardBirthday lastName = "Doe" firstName = "Jane" age = { 45 } hairColor = "Black" />
        <PersonCardBirthday lastName = "Smith" firstName = "John" age = { 88 } hairColor = "Brown" />
        <PersonCardBirthday lastName = "Fillmore" firstName = "Millard" age = { 50 } hairColor = "Brown" />
        <PersonCardBirthday lastName = "Smith" firstName = "Maria" age = { 62 } hairColor = "Brown" />
    </div>
  );
}

export default App;
