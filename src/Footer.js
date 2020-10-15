import React from 'react'

    var style = {
        backgroundColor: "#003171",
        
        textAlign: "center",
        padding: "15px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "50px",
        width: "100%",
        color: "#FFFFFF"
    }
    
    var phantom = {
      display: 'block',
      padding: '20px',
      height: '60px',
      width: '100%',
    }
    
    function Footer() {
        return (
            <div>
                <div style={phantom} />
                <div style={style}>
                &copy; {new Date().getFullYear()} COPYRINGHT : <a href="/">UNIVERSITY OF PHAYAO</a>
                </div>
            </div>
        )
    }
    
    export default Footer