import { WhatsAppOutlined } from "@ant-design/icons";
import { useState } from "react"

export const Subjects = () => {

    const auxSubjects = [
        {
            name: 'Álgebra y Geometría Analítica',
            id: 1,
            link: 'https://chat.whatsapp.com/ITrA2AVtfOqLgVCzN41q54',
            image_url: 'https://concepto.de/wp-content/uploads/2019/12/algebra-e1577465340342.jpg',
            careers: ['Lic. en Informática', 'Téc. en Tecnologías Web']    
        },
        {
            name: 'Programación Web 1',
            id: 2,
            link: 'https://chat.whatsapp.com/JBk3WBPpTnlAhZ5xrJQgTH',
            image_url: 'https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg',
            careers: ['Téc. en Tecnologías Web']
        },
        {
            name: 'Programación Web 2',
            id: 1,
            link: 'https://chat.whatsapp.com/DqEGXzoAcMG1Tom6YrwZtn',
            image_url: 'https://www.itmastersmag.com/wp-content/uploads/2021/01/shutterstock_1078387013-1536x768.jpg',
            careers: ['Téc. en Tecnologías Web']
        }
    ]

    const [subjecs, setSubjects] = useState(auxSubjects);

    const renderCareers = (e) => {
        return e.map((e, index) => {
            return (
                <li key={index}>
                    <p>
                        {e}
                    </p>
                </li>
            )
        })
    }

  return (
    <div>
        <ul>
            {subjecs.map((e, index) => {
                return (
                    <li key={index}>
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">{e.name}</h3>
                            </div>
                            <div className="card-body">
                                <div className="card-image">
                                    <img src={e.image_url} alt={e.name}/>
                                </div>
                                <div className="card-description">
                                    <a href={e.link}><WhatsAppOutlined /> Ingresar</a>
                                </div>
                            </div>
                            <div className="card-footer">
                                <ul>
                                    {renderCareers(e.careers)}
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
