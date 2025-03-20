function Product(prop){
    return (
        <div>
            <form action="" id="productForm" className="w-[500px] h-[650px] text-[black] flex flex-col items-start rounded-xl p-12 bg-[gray]">
                <h1 className="mt-5 font-bold text-2xl w-[100%] flex justify-between items-center">ADD PRODUCTS <p className="text-xs cursor-pointer border border-black w-[120px] h-[40px] rounded flex justify-center items-center bg-black text-white hover:bg-transparent hover:text-black" onClick={prop.handleswi}>PRODUCTS</p></h1>
                <label htmlFor="" className="mt-10 font-bold">Title</label>
                <input 
                    type="text"
                    value = {prop.state.title}
                    placeholder="Enter Title"
                    name = "title"
                    onChange={prop.handleChange}
                    className="mt-1 border border-black placeholder:text-black text-xs w-[100%] h-[40px] rounded ps-5 bg-transparent outline-none"
                    style={{border: prop.validTitle ? "2px solid green" : "2px solid brown"}}
                />
                {prop.validTitle ? 
                    <p className="mb-3 text-xs">Title is valid</p> 
                    : <p className="mb-3 text-xs">Title is not valid</p>}

                <label htmlFor="" className="font-bold">Price</label>
                <input 
                    type="text"
                    value = {prop.state.price}
                    placeholder="Enter Price"
                    name = "price"
                    onChange={prop.handleChange} 
                    className="mt-1 border border-black placeholder:text-black text-xs w-[100%] h-[40px] rounded ps-5 bg-transparent outline-none"
                    style={{border: prop.validPrice ? "2px solid green" : "2px solid brown"}}
                />
                {prop.validPrice ? 
                    <p className="mb-3 text-xs">Price is valid</p> 
                    : <p className="mb-3 text-xs">Price is not valid</p>}

                <label htmlFor="" className="font-bold">Description</label>
                <input 
                    type="text"
                    value = {prop.state.description}
                    placeholder="Enter Description"
                    name = "description"
                    onChange={prop.handleChange}
                    className="mt-1 border border-black placeholder:text-black text-xs w-[100%] h-[40px] rounded ps-5 bg-transparent outline-none"
                    style={{border: prop.validDes ? "2px solid green" : "2px solid brown"}}
                />
                {prop.validDes ? 
                    <p className="mb-3 text-xs">Description is valid</p> 
                    : <p className="mb-3 text-xs">Description is not valid</p>}

                <label htmlFor="" className="font-bold">Image Link</label>
                <input 
                    type="text"
                    value = {prop.state.image}
                    placeholder="Enter Image source or path"
                    name = "image"
                    onChange={prop.handleChange}
                    className="mt-1 border border-black placeholder:text-black text-xs w-[100%] h-[40px] rounded ps-5 bg-transparent outline-none"
                    style={{border: prop.validImage ? "2px solid green" : "2px solid brown"}}
                />
                {prop.validImage ? 
                    <p className="mb-3 text-xs">Image is valid</p> 
                    : <p className="mb-3 text-xs">Image is not valid</p>}

                <input 
                    type="submit" 
                    className="border border-black w-[150px] h-[40px] rounded cursor-pointer hover:bg-black hover:text-white mt-5"
                    onClick={prop.handleSignupSubmit}
                />
            </form>
        </div>
    )
}

export default Product