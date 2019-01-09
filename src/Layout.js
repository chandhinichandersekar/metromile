import React from 'react';

function Layout({ title, children }) {
    return (
            <div className="card">
                <h3 className="card-header">{title}</h3>
                {children}
            </div>
        );
}

export default Layout;

