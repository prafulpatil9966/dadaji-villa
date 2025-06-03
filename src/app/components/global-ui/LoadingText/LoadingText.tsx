import './LoadingText.scss'

const LoadingText = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-[#f5eee7] gap-4">
      {/* <img src="/common/loader-img.png" alt="Loader" className="w-20 h-20 object-contain" /> */}
      <div className="loading loading01 text-[#91765a] text-4xl tracking-widest">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  )
}

export default LoadingText
