import styled from "styled-components";

const sideBarStyles = styled.div`
@media only screen and (max-width: 768px) {
     lineHeigth: "21px";
}
`;

const SidebarBox = () => {
    return ( 
        <sideBarStyles style={{
            padding: "10px 10px",
            border: "1px solid red",
            // backgroundColor: "rgb(242, 194, 194)",
            width: "100%",
            lineHeight: "21px",
            borderRadius: "10px"
        }}
         className="sidebarbox">
            <h4 style={{margin: "8px 15px"}} >Play movie quizes and earn free tickets </h4>
            <p style={{margin: "8px 15px"}}>50k people are playing now</p>
            <button className="btn">Start playing</button>
        </sideBarStyles>
     );
}
 
export default SidebarBox;