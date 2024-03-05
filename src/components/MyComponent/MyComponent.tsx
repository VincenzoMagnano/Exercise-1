import React from 'react';
// Definizione del tipo delle props
interface MyComponentProps {
    name: string;
    age: number;
    isAdmin?: boolean; // Proprietà opzionale
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Funzione di callback
}
// Dichiarazione del componente funzionale con le props tipizzate
const MyComponent: React.FC<MyComponentProps> = ({ name, age, isAdmin =
    false, onClick }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {isAdmin && <p>Admin User</p>}
            <button onClick={onClick}>Click Me</button>
        </div>
    );
};
export default MyComponent;