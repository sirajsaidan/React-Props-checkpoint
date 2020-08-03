import React,{Component} from "react"
import PropTypes from 'prop-types';

class Profile extends Component{
    render(){  console.log("FirstName");
        return(
            <div>
                <p style={{
                    color:"red",
                    fontSize:40
                    
                }}>{this.props.info.FirstName}</p>
                    <p
                    style={{
                        color:"red",
                        fontSize:40
                        
                        
                    }}>{this.props.info.LastName}</p>
                    <p>{this.props.info.Bio}</p>
                    <p>{this.props.info.Proffission}</p>
                    {this.props.children}
            </div>
        )
    }
}
Profile.defaultProps={info:{FirstName:"Siraj Eddine",LastName:"Saidane",Bio:"Student in go my code",Proffission:"full satck"}
}
Profile.propTypes = {
    info:PropTypes.any
     
    
    

    }



export default Profile