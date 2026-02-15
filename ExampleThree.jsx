import React, { useState } from 'react'

function ExampleThree() {
    let init = ""

    const [data, setData] = useState(init)
    const [color, setColor] = useState(init)
    const [data1, setData1] = useState(init)
    const [color1, setColor1] = useState(init)
    const [data2, setData2] = useState(init)
    const [color2, setColor2] = useState(init)
    const [data3, setData3] = useState(init)
    const [color3, setColor3] = useState(init)
    const [bgcolor, setBgcolor] = useState(init)
    return (
        <>
            <div className="container">
                <div className="form">
                    <div className="info">
                        <input type="text"
                            placeholder='Enter Your Name'
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                        <input type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}

                        />
                    </div>
                    <div className="info">
                        <input type="email"
                            placeholder='Enter Your Email'
                            value={data1}
                            onChange={(e) => setData1(e.target.value)}
                        />
                        <input type="color"
                            value={color1}
                            onChange={(e) => setColor1(e.target.value)}
                        />
                    </div>
                    <div className="info">
                        <input type="tel"
                            placeholder='Enter Your Mobile no.'
                            value={data2}
                            onChange={(e) => setData2(e.target.value)}
                        />
                        <input type="color"
                            value={color2}
                            onChange={(e) => setColor2(e.target.value)}
                        />
                    </div>
                    <div className="info">
                        <input type="text"
                            placeholder='Enter Your Course Name'
                            value={data3}
                            onChange={(e) => setData3(e.target.value)}
                        />
                        <input type="color"
                            value={color3}
                            onChange={(e) => setColor3(e.target.value)}
                        />
                    </div>

                    <input type="color"
                        value={bgcolor}
                        onChange={(e) => setBgcolor(e.target.value)}

                    />
                </div>
                <div className="card">
                    <div className="Card" style={{ backgroundColor: bgcolor }}>
                        <h1 style={{ color: color }}>Name:{data}</h1>
                        <h1 style={{ color: color1 }}>Email:{data1}</h1>
                        <h1 style={{ color: color2 }}>Contact:{data2}</h1>
                        <h1 style={{ color: color3 }}>Course:{data3}</h1>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ExampleThree