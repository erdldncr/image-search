import React, { useEffect, useState } from 'react'
import TextFiled from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import ImageResults from '../image-results/ImageResults'
import axios from 'axios'
import {useGlobalContext} from '../../store/Context'


export default function Search() {
    const[searchItems,setSearchItems]=useState({text:'',amount:15})
    const {dispatch,url,api_key}=useGlobalContext()


    const onChangeHandles=(e)=>{
        if(e.target.name){
            setSearchItems({...searchItems,[e.target.name]:e.target.value})
        }else{
            setSearchItems({...searchItems,amount:(+e.target.innerHTML)})
        }
       
        axios.get(`${url}/?key=${api_key}&q=${
           searchItems.text
          }&image_type=photo&per_page=${searchItems.amount}&safesearch=true`
        )
        .then(res => 
            dispatch({type:'SEARCH_IMAGE',payload:res.data.hits})
            )
        .catch(err => console.log(err));

  
    }
    useEffect(()=>{
        if(searchItems.text===''){
            dispatch({type:'RESET_IMAGE'})
        }
    },[searchItems.text])
    return (
        <div>
            <TextFiled
                name='text'
                value={searchItems.text}
                onChange={onChangeHandles}
                floatingLabelText='Search For 
            Images'
                fullWidth={true}
            />
            <SelectField
                name="amount"
                floatingLabelText="Amount"
                value={searchItems.amount}
                onChange={onChangeHandles}
            >
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={30} primaryText="30" />
                <MenuItem value={50} primaryText="50" />
            </SelectField>
            <br/>
            <ImageResults/>
        </div>
    )
}

