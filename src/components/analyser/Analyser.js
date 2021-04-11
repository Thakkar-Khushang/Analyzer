import { useState, useRef} from 'react';
import("./analyser.css");

const Analyser = () => {
  const strRef = useRef(null);
  const [arr,setArr] = useState([0,0,0,0,0]);
  const Analyze = () =>{
    if(strRef){
    setArr([0,0,0,0,0]);
    var str = strRef.current.value;
    var v=0,c=0,n=0,s=0,sc=0;
    for (var i=0;i<str.length;i++)
    {
      
      var t=str.charCodeAt(i);

      if (t === 65 || t===69 || t===73 || t===79 || t===85 || t === 97 || t===101 || t===105 || t===111 || t===117)
      {
        v++;
      }
      else if(t === 32)
      {
        s++;
      }
      else if(((t>=65) && (t<=90)) || ((t>=97) && (t<=122)))
      {
        c++;
      }
      else if((t>=48) && (t<=57))
      {
        n++;
      }
      else
      {
        sc++;
      }
    }
    setArr([v,c,n,s,sc]);
  }
  
}

  return (
    <div className="Wrapper">
        <div className="title">
            String Analyzer
        </div>
        <div className="description">
            This analyzer will help you to count <em>vowel, consonent, special characters, spaces and numbers</em> in given string 
        </div>
        <div className="input">Enter your text here:
            <input onChange={Analyze} ref={strRef} type="text" placeholder="Enter your String here" id="string"/><br/>
        </div>
        <div className="output">
            <div className="info">
                <div className="infoAtrbRed">Vowels : {arr[0]}<span id="vowels"></span></div>
                <div className="infoAtrbWhite">Consonants : {arr[1]}<span id='consonants'></span></div>
                <div className="infoAtrbRed">Digits : {arr[2]}<span id='number'></span></div>
                <div className="infoAtrbWhite">Spaces : {arr[3]}<span id='spaces'></span></div>
                <div className="infoAtrbRed">Special characters : {arr[4]}<span id='specialCharacters'></span></div>
            </div>
        </div>
    </div>
  )
}

export default Analyser
