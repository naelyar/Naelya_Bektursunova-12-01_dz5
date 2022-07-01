
import {types} from "../../types";


export const massageTrue = (data) => {
    return {
        type: types.MESSAGE_TRUE,
        payload: data
    }
}

export const massageFalse = () => {
    return {
        type: types.MESSAGE_FALSE
    }
}

export const createUserAction = (data) => {
    return async function (dispatch) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users',options);

        if(response.status === 404) {
            dispatch(massageTrue({text: " not created" , button: "danger"}))

    
        }
        else {
            dispatch (massageTrue({text: "created" , button:"success"}))
        } if(data.name === "") {
            dispatch (massageTrue({text : "Name: не заполнено" , button : "danger"}))

        }if(data.lastName === "") {
            dispatch (massageTrue({text : "lastName: не заполнено" , button : "danger"}))

        }if(data.age === "") {
            dispatch (massageTrue({text : "age: не заполнено" , button : "danger"}))

        }if(data.email === "") {
            dispatch (massageTrue({text : "Email: не заполнено" , button : "danger"}))

        }


    }

}
  
