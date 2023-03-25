function App({label, placeholder, onchange, type}) {
  return (
    <div className="input">
      {label}
      <input placeholder={placeholder} onChange={(e) => onchange(e.target.value)} type={type} />
    </div>
  );
}

export default App;
