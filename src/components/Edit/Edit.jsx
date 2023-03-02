import "./Edit.css";
import { Form } from "react-router-dom";
import editImg from "../../img/edit.png";
import editImg2 from "../../img/edit-3.png";


export default function Edit ({nameVal, emailVal, setNameVal, setEmailVal}) {
    return(
        <div className="containerEdit">
            <h1>Edit</h1>

            <img className="imgEdit" src={editImg2} width={100} alt="" />

            <Form className="editForm" action="/my-account">
                <div className="card divLabelAcc">
                    <label htmlFor="">
                    <input  onChange={(e) => {setNameVal(e.target.value)}} type="text" name="editName" placeholder="Name..." id="" />
                </label>

                <label htmlFor="">
                    <input  onChange={(e) => {setEmailVal(e.target.value)}} type="email" name="editEmail" placeholder="Email..." id="" />
                </label>
                </div>
                

                <button>Save</button>
            </Form>
        </div>
    )
}