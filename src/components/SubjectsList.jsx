import { filterItems } from "@/utils/filterItems";
import { WhatsAppOutlined } from "@ant-design/icons";
import { useState } from "react"

export const SubjectsList = ({ query, dataset }) => {

    
    const items = filterItems(query, dataset)

    return (
        <div>
            <ul>
                {items.map((e, index) => {
                    return (
                        <li key={index}>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">{e.name}</h3>
                                </div>
                                <div className="card-body">
                                    <div className="card-image">
                                        <img src={e.image_url} alt={e.name} />
                                    </div>
                                    <div className="card-description">
                                        <a href={e.link}><WhatsAppOutlined /> Ingresar</a>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        {e.careers.map((career, index) => {
                                            return (
                                                <li key={index}>
                                                    <p>
                                                        {career}
                                                    </p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
