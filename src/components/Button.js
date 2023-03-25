
function App({children, onclick}) {
  return (
    <div className="button">
      <button onClick={onclick}>
        {children}
      </button>
    </div>
  );
}

export default App;
