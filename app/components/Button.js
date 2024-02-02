"use client";

function Button(props) {
    return (
        <div className='mt-5'>
            <button className="bg-green-500 rounded p-6" onClick={()=> console.log("Clicked")}>Click Here</button>
        </div>
    );
}

export default Button;