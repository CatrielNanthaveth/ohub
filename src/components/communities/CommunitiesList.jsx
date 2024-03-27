import { filterItems } from '@/utils/filterItems';
import { WhatsAppOutlined } from '@ant-design/icons';
import styles from '@/styles/components.module.css';

export const CommunitiesList = ({ query, dataset }) => {
    
    const items = filterItems(query, dataset)

    return (
        <div>
            <ul className={styles.list}>
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

                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
