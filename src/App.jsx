
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import TextInput from './components/TextInput'
import Badge from './components/Badge';
import RuleItem from './components/RuleItem';
 // [] include / [] /
  // ^ not
  // - from ... to (Range)
  // /[A-Z]/
  // /[a-z]/
  // /[0-9]/
  // /[^A-Za-z0-9]
function getStrength(password){
  const lengthOk = password.length >= 8;
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  const score = 
  (lengthOk ? 1 : 0) +
  (hasLower ? 1 : 0) +
  (hasNumber ? 1 : 0) +
  (hasSymbol ? 1 : 0) +
  (hasUpper ? 1 : 0);

  let label = "Weak";
  if(score>=4) 
    label = "Strong";
  else if(score>=3) 
    label = "Medium"

  return {score, label, lengthOk, hasUpper, hasLower, hasNumber, hasSymbol};
}

function App() {

  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  // Derived State
  const result = getStrength(password);

  const rules = [
    {id:"len", ok:result.lengthOk, text:"At least 8 charachters"},
    {id:"upper", ok:result.hasUpper, text:"Contains an uppercase letter (A-Z)"},
    {id:"lower", ok:result.hasLower, text:"Contains an lowercase letter (a-z)"},
    {id:"num", ok:result.hasNumber, text:"Contains a number (0-9)"},
    {id:"sym", ok:result.hasSymbol, text:"Contains a symbol (!@#$%...)"},
  ];
 return (
  <div className="page">
      <h1 className="title">
        Password Strength Checker
      </h1>
      <p className="subtitle">Week 1 + Week 2 Practice</p>

      <Card title="Check your password">
          <TextInput
            label={"Password"}
            value={password}
            onChange={setPassword}
            placeholder="Type your password..."
            type={show? "text": "password"}
          ></TextInput>

          <div className="rowInline">
            <button className='btn' onClick={()=>setShow(!show)}>
              {show ? "Hide" : "Show"} Password
            </button>
            <p className="small">Strength: <Badge label={result.label}/> 
               (score: {result.score})
            </p>
          </div>

          <ul className="rules">
            {rules.map((rule)=>(
              <RuleItem key={rule.id} ok={rule.ok} text={rule.text}/>
            ))}
          </ul>

          { password.length === 0 ? (
            <p className="hint">Start typing a password to see feedback</p>
          ) : result.label==="Strong" ? (
            <p className="hint good">Strong password! Good job!</p>
          ) : (
            <p className="hint bad"> Improve your password using checklist... </p>
          ) }
      </Card>
  </div>
 )
}

export default App
