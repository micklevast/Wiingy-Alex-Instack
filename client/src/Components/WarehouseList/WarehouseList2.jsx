import React, { useState } from 'react';
import WarehouseCard from '../WarehouseCard/WarehouseCard';
import '../WarehouseList/WarehouseList.scss';
import SortIcon from '../../Assets/Icons/sort-24px.svg';
import { Link } from "react-router-dom";


function WarehouseList2(props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    }

    const filteredWarehouses = props.warehouselist.filter(warehouse => {
        return warehouse.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <section className="warehouseList">
                <div className="warehouseList__title-container">
                    <h2 className="warehouseList__title">Warehouses</h2>
                    <div className="warehouseList__search-subcontainer">
                        <input className="warehouseList__search-bar" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}></input>
                        <Link to="/warehouse/add"><button className="warehouseList__add-button">+ Add New Warehouse</button></Link>
                    </div>
                </div>

                <div className="warehouseList__tablet-title-container">
                    <div className="warehouseList__tablet-text-container">
                        <div className="warehouseList__tablet-sub-container">
                            <h3 className="warehouseList__tablet-title">WAREHOUSE</h3>
                            <img className="warehouseList__tablet-title-image" src={SortIcon} alt="Sorting for Warehouse"/>
                        </div>

                        <div className="warehouseList__tablet-sub-container">
                            <h3 className="warehouseList__tablet-title">ADDRESS</h3>
                            <img className="warehouseList__tablet-title-image" src={SortIcon} alt="Sorting for Warehouse"/>
                        </div>

                        <div className="warehouseList__tablet-sub-container">
                            <h3 className="warehouseList__tablet-title">CONTACT NAME</h3>
                            <img className="warehouseList__tablet-title-image" src={SortIcon} alt="Sorting for Warehouse"/>
                        </div>

                        <div className="warehouseList__tablet-sub-container">
                            <h3 className="warehouseList__tablet-title">CONTACT INFORMATION</h3>
                            <img className="warehouseList__tablet-title-image" src={SortIcon} alt="Sorting for Warehouse"/>
                        </div>
                    </div>

                    <div className="warehouseList__tablet-misc-container">
                        <h3 className="warehouseList__tablet-title">ACTIONS</h3>
                    </div>
                </div>

                <div className="warehouseList__warehouse-cards">
                    {filteredWarehouses.map(warehouse =>
                        <WarehouseCard
                            key={warehouse.id}
                            id={warehouse.id}
                            city={warehouse.name}
                            address={warehouse.address + ', ' + warehouse.name + ', ' + warehouse.country}
                            name={warehouse.contact.name}
                            number={warehouse.contact.phone}
                            email={warehouse.contact.email}
                            warehouseModal={props.warehouseModal}
                            showModal={props.showModal}
                            closeModal={props.closeModal}
                        />)}
                    {filteredWarehouses.length === 0 && <p>No warehouses found.</p>}
                </div>

            </section>

        </>
    )
}


export default WarehouseList2;
