import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_IMAGE, API_KEY, API_URL } from "../../config/config";
import { CastItem, CastList } from "./styles";


export default function Cast(props: any){

    const [cast, setCast] = useState<any[]>([])

    const { id } = useParams();

    console.log(props); 

    useEffect(() => {
        fetch(`${API_URL}/${id}/credits?api_key=${API_KEY}&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(data => setCast(data.cast))
    },[])

    return (
        <div>
            <h1>Elenco</h1>
            <CastList>
            {
                cast.map(castItem => {
                    return (
                        <CastItem>                                
                                <img src={`${API_IMAGE}${castItem.profile_path}`} alt={castItem.title} />                                
                            <span>{castItem.name}</span>
                        </CastItem>
                    )
                })
            }
                                                    
            </CastList>
        </div>
    )
}