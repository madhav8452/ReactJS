    import { useEffect, useRef, useState } from "react"

    function OTP(){
        let Input1 = useRef(null)
        let Input2 = useRef(null)
        let Input3 = useRef(null)
        let Input4 = useRef(null)
        
        let [obj, setObj] = useState({
            first : '',
            second : '',
            third : '',
            fourth : '',
        })

        useEffect(()=>{
            Input1.current.focus()

            if(obj.first.length == 1){
                Input2.current.focus()

                if(obj.second.length == 1){
                    Input3.current.focus()

                    if(obj.third.length == 1){
                        Input4.current.focus()
                    }
                }
            }
        }, [obj])

        let handleChange = (e)=>{
            setObj({...obj, [e.target.name] : e.target.value})
        }

        let handleDown = (e)=>{
            if(e.key == 'Backspace' && e.target.value == ''){
                if(e.target.name == 'fourth'){
                    Input3.current.focus()
                }
                else if(e.target.name == 'third'){
                    Input2.current.focus()
                }
                else if(e.target.name == 'second'){
                    Input1.current.focus()
                }
            }
        }

        return (
            <div className="border border-black w-[100%] h-[100vh] flex justify-center items-center">
                <form className="shadow-lg shadow-black rounded-lg bg-[gray] text-white w-[400px] h-[200px] flex flex-col justify-center items-center">
                    <h1 className="font-bold">Enter OTP</h1>
                    <div className="w-[150px] flex justify-between mt-5">
                        <input type="text" 
                            name="first" 
                            className="text-black font-bold text-xs w-[30px] h-[35px] p-1 ps-3 rounded-lg" 
                            ref={Input1}
                            onChange={handleChange}
                            onKeyDown={handleDown}
                            maxLength={1}/>
                        <input type="text" 
                            name="second" 
                            className="text-black font-bold text-xs w-[30px] h-[35px] p-1 ps-3 rounded-lg" 
                            ref={Input2}
                            onChange={handleChange}
                            onKeyDown={handleDown}
                            maxLength={1}/>
                        <input type="text" 
                            name="third" 
                            className="text-black font-bold text-xs w-[30px] h-[35px] p-1 ps-3 rounded-lg" 
                            ref={Input3}
                            onChange={handleChange}
                            onKeyDown={handleDown}
                            maxLength={1}/>
                        <input type="text" 
                            name="fourth" 
                            className="text-black font-bold text-xs w-[30px] h-[35px] p-1 ps-3 rounded-lg" 
                            ref={Input4}
                            onChange={handleChange}
                            onKeyDown={handleDown}
                            maxLength={1}/>
                    </div>
                    <input type="submit" className="bg-black w-[100px] h-[30px] mt-5 rounded-lg cursor-pointer"/>
                </form>
            </div>
        )
    }

    export default OTP