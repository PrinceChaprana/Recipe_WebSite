import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

function Search() {
        const [input,setInput] = useState("");
        const navigate = useNavigate();
        const submitHandler = (e)=>{
                //this will stop form from refreshing page on submit
                e.preventDefault();
                navigate('/searched/'+input);
        };
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
        <FaSearch />
        <input onChange={(e)=> setInput(e.target.value) } type="text" value={input}></input>
        </div>
    </FormStyle>
  )
}
const FormStyle = styled.form`
        margin:0rem 20rem;
        div{
                width: 100%;
                position:relative;
        }
        input{
                border:none;
                background: linear-gradient(to right,#494949,#313131);
                font-size:1.5rem;
                color:white;
                padding:1rem 3rem;
                border:none;
                width:100%;
                border-radius: 1rem;
                outline:none;
        }
        svg{
                position:absolute;
                top:50%;
                left:0%;
                transform: translate(100%,-50%);
                color:white;

        }
`;

export default Search;

