require('styles/components/Content.css');

export default React => ({children}) => {
  return (
    <div className="Content">
      {children}
    </div>
  )
}
