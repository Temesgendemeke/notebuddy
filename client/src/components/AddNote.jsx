
const AddNote = ({ show }) => {
  return (
    <div className={`${!show && 'hidden'} flex flex-col  w-screen h-full inset absolute  bg-black`}>
      <input type="text" name="" id="" />
    </div>
  )
}

export default AddNote
