type PropsType = {
    content:string
}

function InvertButton({content}:PropsType) {
  return (
    <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
 {content}
</button>
  )
}

export default InvertButton