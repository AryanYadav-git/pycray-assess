import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {

    userProfile: false,
};

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [financeData, setFinanceData] = useState([
        {
            ownerName: 'Owner name',
            propertyName: 'Greenview Appartment',
            income: '$25000',
            expenses: '$15000',
            netProfit: '$10000'
        },
        {
            ownerName: 'Owner name',
            propertyName: 'Greenview Appartment',
            income: '$25000',
            expenses: '$15000',
            netProfit: '$10000'
        },
        {
            ownerName: 'Owner name',
            propertyName: 'Greenview Appartment',
            income: '$25000',
            expenses: '$15000',
            netProfit: '$10000'
        },
    ])
    const [propertyData, setPropertyData] = useState([
        {
            ownerName: 'Owner name',
            propertyName: 'Greenview Appartment',
            totalUnits: 50,
            filledUnits:42,
            vacantUnits: 8,
            occupancyRate: '85%',
            lastMaintenanceDate: '2024-09-11',
        },
        {
            ownerName: 'Owner name',
            propertyName: 'Greenview Appartment',
            totalUnits: 50,
            filledUnits:42,
            vacantUnits: 8,
            occupancyRate: '85%',
            lastMaintenanceDate: '2024-09-11',
        },
        {
            ownerName: 'Owner name',
            propertyName: 'Greenview Appartment',
            totalUnits: 50,
            filledUnits:42,
            vacantUnits: 8,
            occupancyRate: '85%',
            lastMaintenanceDate: '2024-09-11',
        },
    ])

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings, financeData, setFinanceData, propertyData, setPropertyData }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
