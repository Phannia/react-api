import React from "react";

    const Characters = ({ characters }) => {
    return (
        <div className="row">
        {characters.map((item, index) => (
            <div key={index} className="col">
                <div className="card mx-2 my-2" style={{ width: '15rem' }}>
                    <img src={item.image} className="card-img-top" />
                    <div className="card-body mx-0 px-0 my-0 py-0">
                        <div className="card-header mx-0 px-1"><strong>Name: </strong>{item.name}</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item mx-0 px-1"><strong>Species: </strong> {item.species}</li>
                                <li className="list-group-item mx-0 px-1"><strong>Gender: </strong>{item.gender}</li>
                                <li className="list-group-item mx-0 px-1"><strong>Origin: </strong>{item.origin.name}</li>
                            </ul>
                        
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
};

export default Characters;
