import "./profileDetail.css"

function ProfileData(prop){
    let arr = JSON.parse(localStorage.getItem("Data"))
    console.log(arr)
    return (
        <div className="w-[35%] h-[90%] bg-white rounded-xl shadow-lg shadow-black overflow-hidden">
            <p className="w-[100%] h-[15%] flex justify-start ps-10 items-center text-2xl font-bold relative border border-b-black">Profile Details <span className="text-xs w-[100px] h-[30px] flex justify-center items-center rounded cursor-pointer absolute right-10 bg-[skyblue] shadow-sm shadow-black hover:shadow-none duration-200" onClick={prop.swi}>Form</span></p>
            <div className="w-[100%] h-[85%] p-10 overflow-auto">
                <p className="font-bold mb-5">Personal Details</p>
                <p className="font-bold text-sm">Name : <span className="font-normal text-sm">{arr[0].name}</span></p>
                <p className="font-bold text-sm">Email : <span className="font-normal text-sm">{arr[0].email}</span></p>
                <p className="font-bold mb-5 mt-10">Education Details</p>
                {arr[0].education.map((el)=>(
                    el.length > 1 ?
                    <ul className="ps-5">
                        <li className="list-disc text-sm"><p>{el}</p></li>
                    </ul>
                    : ''
                ))}
                <p className="font-bold mb-5 mt-10">Projects Details</p>
                {arr[0].project.map((el)=>(
                    el.length > 1 ?
                    <ul className="ps-5">
                        <li className="list-disc text-sm"><p>{el}</p></li>
                    </ul>
                    : ''
                ))}
            </div>
        </div>
    )
}

export default ProfileData