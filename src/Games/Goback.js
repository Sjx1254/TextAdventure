import { useNavigate } from 'react-router-dom'

function Goback() {
    const navigate = useNavigate()
    return (
        <button class = 'btn'
            onClick={() => {navigate("/home")}}
         >
            {" "}
            Go Back
        </button>
    )
}

export default Goback