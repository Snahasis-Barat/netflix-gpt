import React, { useEffect } from "react";
import "../Navbar.css";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
  useEffect(() => {
    console.log("use effect called");
  }, []);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <div>
      <div className="navbar">
        <img
          className="logo"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />

        <img
          className="logo"
          style={{ height: "50px", width: "50px", marginLeft: "1200px" }}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACUCAMAAAA02EJtAAAAwFBMVEX/AAz/////AAD8//////3/AAb8AAD+//v95Nz/5Nj9TD79DwD7//b7//T+9vL89er/Lyj9PzP8Rjr+My7+GAn/JB38b2H9vLH76Nv+/PD98Ob7xLL6iXb+Ihb7oJL81cv8Wkj52Mr6Uy/8g3T+m4v8LyD6dmL6uqf7Z1b4oYj7r6P9Xlj9XFH2iG37xrv8fXP4+OT9kY39vb39RCz6Px/43cf6l3z5zLv6c1j7j4P27df7gWv5qJP7XkL8TTX5VDqWqcn3AAAD7UlEQVR4nO2aYVPiSBCGne7JDBgMJwQICRBygiDLRu/wiB6u+///1U4iLEwoVxIY1rrrp8oq/eC8b7o7MwPdFxcEQRAEQRAEQRAEQRAEQRAEQRAEQRAE8cmxLFBYxmWOVrHA/uP6stF0zZoFaDUbl9ctgPJL2O2O163V/KDXL7/KxzKNQVi/qnWjwbCsCrSCLnujFv1pyqslbiprFeaPyqUPxl1cL8ElOreGvIoJyo1VhoFbwis0K8j52qr6pT414hXufqqkQjgpoQIztl0iXSQUBt4t+OIg20XOC3uFucM1qxK/ipM7tdxYC4j6o1q4XMUAdaucRaevAJjXec6qU3gbECHL49gnrwC4R6lb5XJU2OrDvtXS2977Vv9iuahK7BRVgfNYHTG9Vhmyvwtb9fatLgxEFfMqOCtsNUb9cTnzT79bQftKN6pqtVe4Vu9zz8vZ5PSbFVxXcirSGReOaiO/CA5Pb1UdNHryOAbFVaAnpdxZgxWuoYNUHtXxvZFR2Wf1wkFNbzz6A4dNM3eAaW17XUlvRWVSZ8EEs60kNYz/mHGqvK7qWUDTKxFercqpWHAb8fTlQukthbG7NYwnb1cWdJIS2d+sAjezThJ3euWXOEhlOujESWfw7Zh4qI9ndt+GIz70HASAcFOZY9exjH9ePZ8KQRAEQRAEQRAEQRAEQfx3scyPnpwGC/rDxRnmZI5WsEAsQz96MdHK12TSr3OP+SYXwH7yERkrNbtQQGc8qnrx/aJ0QACazx4i8rQfZGryJMXqz1Q8UEZ3okylWQCLlwhZ1r4q07kuAMzXjSf0vroFJ7uUT3cYODtDAVi4c10A6GzbsfXB3D7cLEB//vwvbv+dc1YzM86zFgx2e/p+sLJVaD+ya6k3XryOQl/vOmN3aaCTu7Xa1uRQ+sG0Zf9iyC+dALRawxevnuuOo0xOPx6hex11dUXEbvLcHvYh42eE32YhAR7n96Okm7apd3vWjMloarpDZrntqqaa1UPNC4NB7+l17ApQyRbqx158Wz3P4siXa3PaAyYrk5OHG6/QWvpcz2bW3kXOHafuVTM8v+5wnjO4QSZTw/OcW7NiFNVyVvle8DKnPD9pwmQleD3DlOzW7Pg2xr20fgzWwpuG6RrdM2tdvvjFrHKnete4OLPRDPX+3M4iB9m7NbkphCyclXj5Ks6YeR21H43bo/Bhb35Ky7m6Mjwkg/al+B3x1NwKd/x9mXiOsx/bdEvwo8nqe8s1PmZwGOlmLx6nvcEkTsJqtaKoRmEcT+56TwtbOxg+BdnRJOzx4vpSsXi07fXx9buNvcv6OP1kcSQIgiAIgiAIgiAIgiCI/w0/AA3gOJ1WxgSlAAAAAElFTkSuQmCC"
        />
        
          {isAuthenticated ? 
          <Button
            variant="contained"
            color="error" 
            startIcon={
              <LogoutIcon
                
              />
            }
          >
            Sign out
          </Button>
         : <Button
            variant="contained"
            color="success" 
            startIcon={
              <LoginIcon
                
              />
            }
          >Sign In</Button>}
       
      </div>
    </div>
  );
};

export default Navbar;
