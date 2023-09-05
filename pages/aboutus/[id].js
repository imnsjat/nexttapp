import React from 'react'
import { useState , useEffect } from 'react';
import {useRouter} from 'next/router'

function details() {
    const router =useRouter();
    const [id, setId] = useState(null);
    useEffect(() => {
        const query = router.query;
        if (query.id) {
            setId(query.id);
            console.log(query.id)
        }
    }, [router.query , id]);
    details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ]
  return (

    <div >{details.filter(item => item.id == id).map(item => <div key={item.id}>{item.name} - {item.role}</div>)}</div>
    )
}   

export default details