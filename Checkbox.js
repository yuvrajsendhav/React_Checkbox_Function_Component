import { useState } from "react"

let Checkbox = () =>
{
    var [u1, setU1] = useState("");
    var [u2, setU2] = useState("");
    var [u3, setU3] = useState("");
    var [course, setCourse] = useState("");

    let course1 = (e) =>
    {
        if(e.target.checked)
        {
           setU1(e.target.value);
        }
        else
        {
            setU1("");
        }
    }
    let course2 = (e) =>
    {
        if(e.target.checked)
        {
           setU2(e.target.value);
        }
        else
        {
            setU2("");
        }
    }
    let course3 = (e) =>
    {
        if(e.target.checked)
        {
           setU3(e.target.value);
        }
        else
        {
            setU3("");
        }
    }
    let Display = (e) =>
    {
        setCourse(u1+u2+u3);
        e.preventDefault();
    }
    return(
        <div>
            <input type="checkbox" value="java" name="Branch1" onClick={ (e) =>course1 (e) } />JAVA
            <br/>
            <input type="checkbox" value="React" name="Branch2" onClick={ (e) =>course2 (e) } />REACT
            <br/>
            <input type="checkbox" value="Python" name="Branch3" onClick={ (e) =>course3 (e) } />PYTHON
            <br/>
            <input type="button" value="Click" onClick={(e) => Display(e)} />
            <br/>
            <p>{course}</p>
        </div>
    )
}
export default Checkbox;