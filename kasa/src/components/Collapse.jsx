import { useState } from 'react';
import '../style/Collapse.css';

function Collapse({ title, description, isOpen = false }) {
     const [open, setOpen] = useState(isOpen);

    const toggle = () => {
        setOpen(!open);
        };
    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggle}>
                <h3>{title}</h3>
                 <span className={`collapse-icon ${open ? 'open' : ''}`}>
                    <i className="fa-solid fa-angle-down"></i>
                </span>
            </div>
            {open && <div className="collapse-content">{description}</div>}
        </div>
    );
}

export default Collapse;