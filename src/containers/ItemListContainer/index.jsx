

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TabsMenu from '../../components/Tabs';


const CATEGORIES = [{id:'picadores' , title: 'Picadores'}, {id: 'pipas', title:'Pipas'}, {id:'sedas', title:'Sedas'} ,{id: 'all', title: 'Todos los Productos'}]
const ItemListContainer = ({ greeting}) => {
    const {category} = useParams ();
    const navigate = useNavigate();

    const current = CATEGORIES.some(cat => cat.id === category) ? category : 'all';
    console.log(category);

    React.useEffect(() =>{
        if (!CATEGORIES.some(cat => cat.id === category)){
            navigate('/products/all');
        }
    }, [category, navigate])

   return (
    <div>
        <TabsMenu  current ={category}  items={CATEGORIES} />
    </div>
   )
    
}
export default ItemListContainer;