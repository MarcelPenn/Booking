import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/square250/971990.webp?k=6d52fe4a57a984e2d540e3d7a1910f8a76fda3a57708faddd74e2109c3344b5e&o=" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Toronto</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/square250/653231.webp?k=526fe3dd8fc78cbaccaee3be9e675b624e73b666ab757ecb0ebf31c7f7d96264&o=" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Montreal</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/square250/653281.webp?k=f290f027412c3954eba82a85cf40eaa703bcbb30b67fa5f2087c7db1eb406262&o=" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Vancouver</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured