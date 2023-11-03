import React, { useState, useEffect, useRef } from 'react';

const Calculate = ({ table }) => {
  const [activeTableList, setActiveTableList] = useState([]);
  const [randomFactorFromTableList, setRandomFactorFromTableList] = useState(0);
  const [randomFactor, setRandomFactor] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const inputRef = useRef(null); // Create a ref for the input field

  useEffect(() => {
    let activeTables = [];
    table
      .filter((e) => e.isActive === true)
      .map((e) => activeTables.push(e.value));
    setActiveTableList(activeTables);
  }, [table]);

  useEffect(() => {
    if (activeTableList.length !== 0) {
      setRandomFactorFromTableList(
        activeTableList[Math.floor(Math.random() * activeTableList.length)]
      );
      setRandomFactor(Math.ceil(Math.random() * 10));
    }
  }, [activeTableList]);

  const checkAnswer = () => {
    setIsCorrect(userAnswer === randomFactor * randomFactorFromTableList);
    setRandomFactorFromTableList(
      activeTableList[Math.floor(Math.random() * activeTableList.length)]
    );
    setRandomFactor(Math.ceil(Math.random() * 10));
    setUserAnswer('');
    inputRef.current.focus(); // Refocus the input field
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };
  return (
    <>
      <div className="container-sm p-5 my-2 border bg-dark text-white rounded text-center option">
        <div className="col-xs-10">
          {activeTableList.length !== 0 ? (
            <>
              <h1 className="count p-2">
                {randomFactor} * {randomFactorFromTableList} = ?
              </h1>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={handleKeyPress} // Handle Enter key press
                  ref={inputRef} // Attach the ref to the input field
                  autoFocus
                />

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => checkAnswer()}
                >
                  Svara
                </button>
              </div>
            </>
          ) : (
            <h1 className="count p-2">Välj tabell</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Calculate;
/* TODO: 
    [ ] autofocus input field
    [ ] enter key button to answer
*/
